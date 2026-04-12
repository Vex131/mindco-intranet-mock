"use client";

import {useState} from "react";
import Link from "next/link";
import {useRole} from "@/components/providers/RoleProvider";
import CreateContentModal from "@/components/modals/CreateContentModal";

export default function AppHeader() {
  const {role} = useRole();
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  return (
    <>
      <header className="h-14 border-b border-white/10 bg-[#141414] px-5">
        <div className="mx-auto flex h-full max-w-[1800px] items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FF3B3F] text-sm font-semibold text-white">
              M
            </div>
            <div>
              <p className="text-sm font-semibold text-white">MindCo</p>
              <p className="text-xs text-white/50">Intranet Workplace</p>
            </div>
          </div>

          <div className="hidden max-w-xl flex-1 md:block">
            <input
              type="text"
              placeholder="Search people, posts, polls, departments..."
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-[14px] text-white outline-none placeholder:text-white/35"
            />
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70 md:inline-flex">
              {role}
            </span>

            <button
              onClick={() => setIsCreateOpen(true)}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
            >
              Create
            </button>

            <Link
              href="/notifications"
              className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/80"
            >
              🔔
            </Link>
          </div>
        </div>
      </header>

      <CreateContentModal
        open={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
      />
    </>
  );
}
