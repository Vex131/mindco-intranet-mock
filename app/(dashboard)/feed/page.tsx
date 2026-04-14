import Link from "next/link";
import {posts} from "@/lib/mock-data";
import PostMetaChips from "@/components/feed/PostMetaChips";
import ContentSkeleton from "@/components/ui/ContentSkeleton";

export default function FeedPage() {
  const feedPosts = posts.filter((post) => post.type === "post");

  const showSkeleton = false;

  return (
    <div className="h-full min-h-0 overflow-y-auto pr-2 chat-scrollbar">
      <div className="space-y-8 pb-6">
      <section className="rounded-[24px] border border-white/10 bg-[#1A1A1A] p-6">
        <p className="text-sm uppercase tracking-[0.2em] text-[#2EC4B6]">Workplace Activity</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">My Feed</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">
          Posts, updates, discussions, and recent workplace activity from across MindCo.
        </p>
      </section>

      <section className="rounded-[24px] border border-white/10 bg-[#1A1A1A] p-5">
        <p className="text-lg font-semibold text-white">Create a post</p>
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm text-white/35">
          Share an update with your team...
        </div>
      </section>

      <section className="space-y-5">
        {showSkeleton ? (
          <ContentSkeleton
            cards={3}
            lines={3}
          />
        ) : (
          feedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/posts/${post.slug}`}
              className="block rounded-[24px] border border-white/10 bg-[#1A1A1A] p-6 transition hover:border-white/20 hover:bg-[#202020]"
            >
              <p className="text-sm font-medium text-white">{post.author}</p>
              <p className="mt-1 text-xs text-white/45">
                {post.authorRole} • {post.time}
              </p>
              <p className="mt-4 text-lg font-semibold text-white">{post.title}</p>
              <p className="mt-3 text-sm leading-7 text-white/70">{post.summary}</p>
              <PostMetaChips
                reactions={post.reactions}
                commentsCount={post.commentsCount}
                attachment={post.attachment}
              />
            </Link>
          ))
        )}
      </section>
      </div>
    </div>
  );
}
