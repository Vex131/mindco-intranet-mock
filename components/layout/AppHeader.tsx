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
      <header className="h-16 border-b border-[rgba(129,157,255,0.12)] mindco-sidebar px-5">
        <div className="mx-auto flex h-full max-w-[1800px] items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl mindco-button text-sm font-semibold text-white shadow-[0_10px_30px_rgba(76,94,255,0.22)]">
              M
            </div>
            <div>
              <p className="text-sm font-semibold text-white">MindCo</p>
              <p className="text-xs text-white/45">Intranet Workplace</p>
            </div>
          </div>

          <div className="hidden max-w-xl flex-1 md:block">
            <input
              type="text"
              placeholder="Search people, posts, polls, departments..."
              className="mindco-input w-full rounded-2xl px-4 py-2.5 text-[14px] text-white placeholder:text-white/35"
            />
          </div>

          <div className="flex items-center gap-3">
            <span className="mindco-pill hidden rounded-2xl px-3 py-2 text-xs text-white/80 md:inline-flex">
              {role}
            </span>

            <button
              onClick={() => setIsCreateOpen(true)}
              className="mindco-button rounded-2xl px-4 py-2 text-sm text-white"
            >
              Create
            </button>

            <Link
              href="/notifications"
              className="flex h-10 w-10 items-center justify-center mindco-panel-soft rounded-2xl text-white/80"
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
