"use client";

import {useMemo} from "react";
import {usePathname} from "next/navigation";
import AppHeader from "@/components/layout/AppHeader";
import DepartmentChannels from "@/components/layout/DepartmentChannels";
import SidebarNav from "@/components/layout/SidebarNav";
import UtilityPanel from "@/components/layout/UtilityPanel";
import {departments} from "@/lib/mockData";
import {RoleProvider} from "@/components/providers/RoleProvider";
import DirectMessagesMenu from "@/components/layout/DirectMessagesMenu";

function DashboardShell({children}: {children: React.ReactNode}) {
  const pathname = usePathname();

  const departmentSlug = pathname.startsWith("/departments/") ? pathname.split("/")[2] : null;

  const activeDepartment = useMemo(() => {
    if (!departmentSlug) return null;

    return departments.find((dept) => dept.name.toLowerCase() === decodeURIComponent(departmentSlug)) ?? null;
  }, [departmentSlug]);

  const showMessagesMenu = pathname.startsWith("/messages");

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#F5F5F5]">
      <AppHeader />

      <div className="flex min-h-[calc(100vh-4rem)]">
        <SidebarNav />

        {showMessagesMenu ? (
          <DirectMessagesMenu />
        ) : activeDepartment ? (
          <DepartmentChannels
            departmentName={activeDepartment.name}
            channels={activeDepartment.channels}
          />
        ) : null}

        <main className="min-w-0 flex-1 bg-[#111111]">
          <div className="mx-auto max-w-6xl p-6">{children}</div>
        </main>

        <UtilityPanel />
      </div>
    </div>
  );
}

export default function DashboardLayout({children}: {children: React.ReactNode}) {
  return (
    <RoleProvider>
      <DashboardShell>{children}</DashboardShell>
    </RoleProvider>
  );
}
