"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {directMessages} from "@/lib/mockData";

export default function DirectMessagesMenu() {
  const pathname = usePathname();

  return (
    <aside className="w-56 border-r border-white/10 bg-[#101010] px-4 py-5">
      <div className="mb-5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-[#2EC4B6]">Messages</p>
        <h2 className="mt-1.5 text-[18px] font-semibold text-white">Direct Messages</h2>
      </div>

      <div className="space-y-2">
        {directMessages.map((person) => {
          const href = `/messages/${person.slug}`;
          const active = pathname === href;

          return (
            <Link
              key={person.slug}
              href={href}
              className={`block rounded-xl px-3 py-2.5 text-left transition ${
                active ? "bg-white/10" : "hover:bg-white/5"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="relative mt-0.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#3FA7D6] text-sm font-medium text-white">
                    {person.name.charAt(0)}
                  </div>
                  {person.online ? (
                    <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border border-[#101010] bg-[#2EC4B6]" />
                  ) : null}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="truncate text-[14px] font-medium text-white">{person.name}</p>
                    <span className="text-[11px] text-white/35">{person.time}</span>
                  </div>

                  <p className="mt-0.5 truncate text-[12px] text-white/45">{person.role}</p>

                  <p className="mt-1 truncate text-[12px] text-white/60">{person.lastMessage}</p>
                </div>

                {person.unread > 0 ? (
                  <div className="ml-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#FF3B3F] px-1.5 text-[11px] font-medium text-white">
                    {person.unread}
                  </div>
                ) : null}
              </div>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
