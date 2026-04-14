"use client";

import Link from "next/link";
import {useMemo, useState} from "react";
import {usePathname} from "next/navigation";
import {messageMembers, messageThreads} from "@/lib/mockData";

export default function DirectMessagesMenu() {
  const pathname = usePathname();
  const [query, setQuery] = useState("");

  const filteredMembers = useMemo(() => {
    return messageMembers.filter((member) => member.name.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  const dmThreads = messageThreads.filter((thread) => thread.type === "dm");
  const groupThreads = messageThreads.filter((thread) => thread.type === "group");

  return (
    <aside className="flex h-full w-72 flex-col overflow-hidden border-r border-[rgba(129,157,255,0.12)] mindco-sidebar px-4 py-5">
      <div className="mb-5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-[#78d9ff]">Messages</p>
        <h2 className="mt-1.5 text-[18px] font-semibold text-white">Direct Messages</h2>
      </div>

      <div className="space-y-3">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search member to message..."
          className="w-full mindco-input w-full rounded-2xl px-3 py-2.5 text-sm text-white placeholder:text-white/35"
        />

        <div className="grid grid-cols-2 gap-2">
          <button className="mindco-button rounded-2xl px-3 py-2 text-sm text-white transition">
            New DM
          </button>
          <button className="mindco-button rounded-2xl px-3 py-2 text-sm text-white transition">
            Create Group
          </button>
        </div>
      </div>
      <div className="mt-5 min-h-0 flex-1 overflow-y-auto pr-1 hide-scrollbar">
        {query ? (
          <div className="mt-5">
            <p className="mb-2 text-[11px] uppercase tracking-[0.16em] text-white/35">Members</p>

            <div className="space-y-2">
              {filteredMembers.map((member) => (
                <Link
                  key={member.slug}
                  href={`/messages/${member.slug}`}
                  className="block rounded-xl px-3 py-2.5 transition hover:bg-white/[0.06]"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[linear-gradient(180deg,#7c6cff,#4e7bff)] text-sm font-medium text-white">
                        {member.name.charAt(0)}
                      </div>
                      {member.online ? (
                        <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border border-[#0a1023] bg-[#4ce0b3]" />
                      ) : null}
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-white">{member.name}</p>
                      <p className="truncate text-xs text-white/45">{member.role}</p>
                    </div>
                  </div>
                </Link>
              ))}

              {filteredMembers.length === 0 ? (
                <div className="rounded-xl rounded-2xl border border-dashed border-[rgba(129,157,255,0.16)] bg-white/[0.02] px-3 py-4 text-sm text-white/45">
                  No matching members found.
                </div>
              ) : null}
            </div>
          </div>
        ) : (
          <>
            <div className="mt-5">
              <p className="mb-2 text-[11px] uppercase tracking-[0.16em] text-white/35">DMs</p>

              <div className="space-y-2">
                {dmThreads.map((thread) => {
                  const href = `/messages/${thread.slug}`;
                  const active = pathname === href;

                  return (
                    <Link
                      key={thread.slug}
                      href={href}
                      className={`block rounded-xl px-3 py-2.5 transition ${active ? "mindco-pill" : "hover:bg-white/[0.06]"}`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="relative mt-0.5">
                          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[linear-gradient(180deg,#7c6cff,#4e7bff)] text-sm font-medium text-white">
                            {thread.avatarLabel ?? thread.name.charAt(0)}
                          </div>
                          {thread.online ? (
                            <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border border-[#0a1023] bg-[#4ce0b3]" />
                          ) : null}
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <p className="truncate text-[14px] font-medium text-white">{thread.name}</p>
                            <span className="text-[11px] text-white/35">{thread.time}</span>
                          </div>

                          <p className="mt-0.5 truncate text-[12px] text-white/45">{thread.subtitle}</p>
                          <p className="mt-1 truncate text-[12px] text-white/60">{thread.lastMessage}</p>
                        </div>

                        {thread.unread > 0 ? (
                          <div className="ml-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#6675ff] px-1.5 text-[11px] font-medium text-white">
                            {thread.unread}
                          </div>
                        ) : null}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="mt-6">
              <p className="mb-2 text-[11px] uppercase tracking-[0.16em] text-white/35">Group Chats</p>

              <div className="space-y-2">
                {groupThreads.map((thread) => {
                  const href = `/messages/${thread.slug}`;
                  const active = pathname === href;

                  return (
                    <Link
                      key={thread.slug}
                      href={href}
                      className={`block rounded-xl px-3 py-2.5 transition ${active ? "mindco-pill" : "hover:bg-white/[0.06]"}`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl mindco-pill text-xs font-semibold text-white">
                          {thread.avatarLabel ?? thread.name.slice(0, 2)}
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <p className="truncate text-[14px] font-medium text-white">{thread.name}</p>
                            <span className="text-[11px] text-white/35">{thread.time}</span>
                          </div>

                          <p className="mt-0.5 truncate text-[12px] text-white/45">{thread.subtitle}</p>
                          <p className="mt-1 truncate text-[12px] text-white/60">{thread.lastMessage}</p>
                        </div>

                        {thread.unread > 0 ? (
                          <div className="ml-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#6675ff] px-1.5 text-[11px] font-medium text-white">
                            {thread.unread}
                          </div>
                        ) : null}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
