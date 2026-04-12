import Link from "next/link";
import {posts} from "@/lib/mockData";
import PostMetaChips from "@/components/feed/PostMetaChips";

export default function AnnouncementsPage() {
  const announcementPosts = posts.filter((post) => post.type === "announcement");

  return (
    <div className="space-y-8">
      <section className="rounded-[24px] border border-white/10 bg-[#1A1A1A] p-6">
        <p className="text-sm uppercase tracking-[0.2em] text-[#2EC4B6]">Official Communication</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Announcements</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">
          Company-wide notices, HR updates, leadership communication, and important reminders.
        </p>
      </section>

      <section className="space-y-5">
        {announcementPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/posts/${post.slug}`}
            className="block rounded-[24px] border border-white/10 bg-[#1A1A1A] p-6 transition hover:border-white/20 hover:bg-[#202020]"
          >
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-[#FF3B3F]/15 px-3 py-1 text-xs font-medium text-[#FF9A9C]">
                Official Notice
              </span>
              <span className="text-xs text-white/40">{post.time}</span>
            </div>

            <p className="mt-4 text-lg font-semibold text-white">{post.title}</p>
            <p className="mt-2 text-sm text-white/45">{post.authorRole}</p>
            <p className="mt-4 text-sm leading-7 text-white/70">{post.summary}</p>
            <PostMetaChips
              reactions={post.reactions}
              commentsCount={post.commentsCount}
              attachment={post.attachment}
            />
          </Link>
        ))}
      </section>
    </div>
  );
}
