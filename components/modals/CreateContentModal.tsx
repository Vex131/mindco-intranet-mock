"use client";

import {useState} from "react";
import {useRole} from "@/components/providers/RoleProvider";

type CreateContentModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function CreateContentModal({open, onClose}: CreateContentModalProps) {
  const {role} = useRole();
  const [tab, setTab] = useState<"post" | "poll">("post");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="w-full max-w-2xl rounded-[28px] mindco-panel p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#2EC4B6]">Create</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">New Content</h2>
            <p className="mt-2 text-sm text-white/55">Create a workplace post or poll for your team.</p>
          </div>

          <button
            onClick={onClose}
            className="mindco-button rounded-xl px-3 py-2 text-sm text-white"
          >
            Close
          </button>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2 rounded-2xl border border-[rgba(129,157,255,0.12)] bg-white/[0.03] p-1">
          <button
            onClick={() => setTab("post")}
            className={`rounded-xl px-4 py-2.5 text-sm transition ${
              tab === "post" ? "mindco-pill text-white" : "text-white/55 hover:text-white"
            }`}
          >
            Create Post
          </button>
          <button
            onClick={() => setTab("poll")}
            className={`rounded-xl px-4 py-2.5 text-sm transition ${
              tab === "poll" ? "mindco-pill text-white" : "text-white/55 hover:text-white"
            }`}
          >
            Create Poll
          </button>
        </div>

        {tab === "post" ? (
          <div className="mt-6 space-y-4">
            <div>
              <label className="mb-2 block text-sm text-white/70">Post Type</label>
              <div className="grid grid-cols-2 gap-3">
                <button className="rounded-2xl border border-[rgba(129,157,255,0.14)] bg-white/[0.04] px-4 py-3 text-left text-sm text-white">
                  Standard Post
                </button>

                {role === "Admin" ? (
                  <button className="rounded-2xl border border-[rgba(124,108,255,0.34)] bg-[rgba(124,108,255,0.16)] px-4 py-3 text-left text-sm text-white">
                    Official Announcement
                  </button>
                ) : (
                  <div className="rounded-2xl border border-[rgba(129,157,255,0.14)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-sm text-white/35">
                    Official Announcement (Admin only)
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/70">Title</label>
              <input
                type="text"
                placeholder="Enter a post title"
                className="w-full mindco-input rounded-2xl px-4 py-3 text-sm text-white placeholder:text-white/30"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/70">Audience</label>
              <select className="mindco-input w-full rounded-2xl px-4 py-3 text-sm text-white">
                <option>My Department</option>
                <option>My Team</option>
                <option>Private Group</option>
                {role === "Admin" ? <option>Company-wide</option> : null}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/70">Content</label>
              <textarea
                rows={5}
                placeholder="Write your update..."
                className="w-full mindco-input rounded-2xl px-4 py-3 text-sm text-white placeholder:text-white/30"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/70">Attachment</label>
              <div className="rounded-2xl border border-dashed border-[rgba(129,157,255,0.16)] bg-[rgba(255,255,255,0.03)] px-4 py-5 text-sm text-white/35">
                Upload image, PDF, or file
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-6 space-y-4">
            <div>
              <label className="mb-2 block text-sm text-white/70">Poll Title</label>
              <input
                type="text"
                placeholder="Enter a poll question"
                className="w-full mindco-input rounded-2xl px-4 py-3 text-sm text-white placeholder:text-white/30"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/70">Audience</label>
              <select className="mindco-input w-full rounded-2xl px-4 py-3 text-sm text-white">
                <option>My Department</option>
                <option>My Team</option>
                {role === "Admin" ? <option>Company-wide</option> : null}
              </select>
            </div>

            <div className="space-y-3">
              <label className="block text-sm text-white/70">Options</label>
              <input
                type="text"
                placeholder="Option 1"
                className="w-full mindco-input rounded-2xl px-4 py-3 text-sm text-white placeholder:text-white/30"
              />
              <input
                type="text"
                placeholder="Option 2"
                className="w-full mindco-input rounded-2xl px-4 py-3 text-sm text-white placeholder:text-white/30"
              />
              <input
                type="text"
                placeholder="Option 3"
                className="w-full mindco-input rounded-2xl px-4 py-3 text-sm text-white placeholder:text-white/30"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-white/70">Visibility</label>
                <select className="mindco-input w-full rounded-2xl px-4 py-3 text-sm text-white">
                  <option>Visible after voting</option>
                  <option>Visible immediately</option>
                  <option>Visible after poll closes</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/70">Poll Type</label>
                <select className="mindco-input w-full rounded-2xl px-4 py-3 text-sm text-white">
                  <option>Single choice</option>
                  <option>Multiple choice</option>
                </select>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 flex items-center justify-end gap-3 border-t border-[rgba(129,157,255,0.12)] pt-5">
          <button
            onClick={onClose}
            className="rounded-xl border border-[rgba(129,157,255,0.14)] bg-white/[0.04] px-4 py-2.5 text-sm text-white/70"
          >
            Cancel
          </button>
          <button className="rounded-xl bg-[#6675ff] px-4 py-2.5 text-sm font-medium text-white">Publish</button>
        </div>
      </div>
    </div>
  );
}
