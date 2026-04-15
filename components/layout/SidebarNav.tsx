"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {departments} from "@/lib/mock-data";
import {useRole} from "@/components/providers/RoleProvider";

const workspaceNav = [
  {label: "Home", href: "/home"},
  {label: "Announcements", href: "/announcements"},
  {label: "My Feed", href: "/feed"},
  {label: "Polls", href: "/polls3"},
  {label: "Directory", href: "/directory"},
];

const communicationNav = [
  {label: "Direct Messages", href: "/messages"},
  {label: "Gallery", href: "/gallery"},
];

export default function SidebarNav() {
  const pathname = usePathname();
  const {role, setRole} = useRole();

  return (
    <aside className="flex h-full min-h-0 w-56 flex-col border-r border-[rgba(129,157,255,0.12)] mindco-sidebar">
      <div className="min-h-0 flex-1 overflow-y-auto p-5 hide-scrollbar">
        <div className="space-y-8">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/30">Workspace</p>

            <nav className="space-y-1">
              {workspaceNav.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`block rounded-xl px-3 py-1.5 text-[14px] transition ${
                      active ? "mindco-pill text-white" : "text-white/62 hover:bg-white/6 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              {role === "Admin" ? (
                <Link
                  href="/admin"
                  className={`block rounded-xl px-3 py-1.5 text-[14px] transition ${
                    pathname === "/admin" ? "mindco-pill text-white" : "text-white/62 hover:bg-white/6 hover:text-white"
                  }`}
                >
                  Admin
                </Link>
              ) : null}
            </nav>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/30">Communication</p>

            <nav className="space-y-1">
              {communicationNav.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`block rounded-xl px-3 py-1.5 text-[14px] transition ${
                      active ? "mindco-pill text-white" : "text-white/62 hover:bg-white/6 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/30">Departments</p>

            <div className="space-y-1.5">
              {departments.map((dept) => {
                const href = `/departments/${dept.name.toLowerCase()}`;
                const active = pathname === href;

                return (
                  <Link
                    key={dept.name}
                    href={href}
                    className={`block rounded-xl px-3 py-1.5 text-[14px] transition ${
                      active ? "mindco-pill text-white" : "text-white/62 hover:bg-white/6 hover:text-white"
                    }`}
                  >
                    {dept.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/30">User Type</p>

            <div className="grid grid-cols-2 gap-2 rounded-2xl border border-[rgba(129,157,255,0.12)] bg-white/[0.03] p-1">
              {(["Employee", "Admin"] as const).map((item) => (
                <button
                  key={item}
                  onClick={() => setRole(item)}
                  className={`rounded-xl px-3 py-2 text-sm transition ${
                    role === item ? "mindco-pill text-white" : "text-white/55 hover:bg-white/6 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[rgba(129,157,255,0.12)] p-4">
        <Link
          href="/profile"
          className={`flex items-center gap-2.5 rounded-xl p-1.5 transition ${
            pathname === "/profile" ? "mindco-pill" : "bg-white/[0.03] hover:bg-white/[0.06]"
          }`}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-sm font-medium text-white">
            N
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-white">Naavil</p>
            <p className="text-[11px] text-white/50">Product Designer • {role}</p>
          </div>
        </Link>
      </div>
    </aside>
  );
}
