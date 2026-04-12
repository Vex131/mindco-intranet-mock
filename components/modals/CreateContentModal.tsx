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
      <div className="w-full max-w-2xl rounded-[28px] border border-white/10 bg-[#171717] p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#2EC4B6]">Create</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">New Content</h2>
            <p className="mt-2 text-sm text-white/55">Create a workplace post or poll for your team.</p>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70"
          >
            Close
          </button>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2 rounded-2xl bg-white/5 p-1">
          <button
            onClick={() => setTab("post")}
            className={`rounded-xl px-4 py-2.5 text-sm transition ${
              tab === "post" ? "bg-white/10 text-white" : "text-white/55 hover:text-white"
            }`}
          >
            Create Post
          </button>
          <button
            onClick={() => setTab("poll")}
            className={`rounded-xl px-4 py-2.5 text-sm transition ${
              tab === "poll" ? "bg-white/10 text-white" : "text-white/55 hover:text-white"
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
                <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-white">
                  Standard Post
                </button>

                {role === "Admin" ? (
                  <button className="rounded-2xl border border-[#FF3B3F]/30 bg-[#FF3B3F]/10 px-4 py-3 text-left text-sm text-white">
                    Official Announcement
                  </button>
                ) : (
                  <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/35">
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
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/70">Audience</label>
              <select className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none">
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
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/70">Attachment</label>
              <div className="rounded-2xl border border-dashed border-white/10 bg-black/20 px-4 py-5 text-sm text-white/35">
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
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/70">Audience</label>
              <select className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none">
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
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30"
              />
              <input
                type="text"
                placeholder="Option 2"
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30"
              />
              <input
                type="text"
                placeholder="Option 3"
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-white/70">Visibility</label>
                <select className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none">
                  <option>Visible after voting</option>
                  <option>Visible immediately</option>
                  <option>Visible after poll closes</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/70">Poll Type</label>
                <select className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none">
                  <option>Single choice</option>
                  <option>Multiple choice</option>
                </select>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 flex items-center justify-end gap-3 border-t border-white/10 pt-5">
          <button
            onClick={onClose}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/70"
          >
            Cancel
          </button>
          <button className="rounded-xl bg-[#FF3B3F] px-4 py-2.5 text-sm font-medium text-white">Publish</button>
        </div>
      </div>
    </div>
  );
}
