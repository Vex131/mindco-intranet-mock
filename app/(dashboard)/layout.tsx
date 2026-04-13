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
    <div className="flex h-full min-h-0 flex-col overflow-hidden bg-[#0F0F0F] text-[#F5F5F5]">
      <AppHeader />

      <div className="flex min-h-0 flex-1 overflow-hidden">
        <SidebarNav />

        {showMessagesMenu ? (
          <DirectMessagesMenu />
        ) : activeDepartment ? (
          <DepartmentChannels
            departmentName={activeDepartment.name}
            channels={activeDepartment.channels}
          />
        ) : null}

        <main className="min-w-0 flex-1 overflow-hidden bg-[#111111]">
          <div className="mx-auto flex h-full min-h-0 max-w-6xl flex-col p-6">{children}</div>
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
