"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {departments} from "@/lib/mockData";
import {useRole} from "@/components/providers/RoleProvider";

const mainNav = [
  {label: "Home", href: "/home"},
  {label: "Announcements", href: "/announcements"},
  {label: "My Feed", href: "/feed"},
  {label: "Polls", href: "/polls"},
  {label: "Directory", href: "/directory"},
  {label: "Gallery", href: "/gallery"},
  {label: "Notifications", href: "/notifications"},
  {label: "Direct Messages", href: "/messages"},
];

export default function SidebarNav() {
  const pathname = usePathname();
  const {role, setRole} = useRole();

  return (
    <aside className="flex w-56 flex-col border-r border-white/10 bg-[#121212]">
      <div className="flex-1 p-5">
        <div className="space-y-8">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/35">Main</p>
            <nav className="space-y-2">
              {mainNav.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`block rounded-xl px-3 py-2.5 text-[14px] transition ${
                      active ? "bg-white/10 text-white" : "text-white/65 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              {role === "Admin" ? (
                <Link
                  href="/admin"
                  className={`block rounded-2xl px-4 py-3 text-sm transition ${
                    pathname === "/admin"
                      ? "bg-[#FF3B3F]/15 text-white"
                      : "text-white/65 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  Admin
                </Link>
              ) : null}
            </nav>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/35">Departments</p>
            <div className="space-y-2">
              {departments.map((dept) => {
                const href = `/departments/${dept.name.toLowerCase()}`;
                const active = pathname === href;

                return (
                  <Link
                    key={dept.name}
                    href={href}
                    className={`block rounded-2xl px-4 py-3 text-sm transition ${
                      active ? "bg-[#3FA7D6]/15 text-white" : "text-white/65 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {dept.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/35">User Type</p>
            <div className="grid grid-cols-2 gap-2 rounded-2xl bg-white/5 p-1">
              {(["Employee", "Admin"] as const).map((item) => (
                <button
                  key={item}
                  onClick={() => setRole(item)}
                  className={`rounded-xl px-3 py-2 text-sm transition ${
                    role === item ? "bg-white/10 text-white" : "text-white/55 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 p-4">
        <Link
          href="/profile"
          className={`flex items-center gap-2.5 rounded-xl p-2.5 transition ${
            pathname === "/profile" ? "bg-white/10" : "bg-white/5 hover:bg-white/10"
          }`}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3FA7D6] text-sm font-medium text-white">
            N
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-white">Naavil</p>
            <p className="truncate text-[11px] text-white/50">Product Designer • {role}</p>
          </div>
        </Link>
      </div>
    </aside>
  );
}
