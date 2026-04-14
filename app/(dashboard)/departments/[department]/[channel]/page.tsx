import Link from "next/link";
import {departmentChannelContent, posts} from "@/lib/mock-data";
import PostMetaChips from "@/components/feed/PostMetaChips";
import EmptyState from "@/components/ui/EmptyState";

type DepartmentChannelPageProps = {
  params: Promise<{department: string; channel: string}>;
};

export default async function DepartmentChannelPage({params}: DepartmentChannelPageProps) {
  const {department, channel} = await params;

  const departmentData = departmentChannelContent[department as keyof typeof departmentChannelContent];

  const channelData = departmentData?.[channel as keyof typeof departmentData];

  if (!departmentData || !channelData) {
    return (
      <div className="rounded-[24px] border border-white/10 bg-[#1A1A1A] p-6">
        <h1 className="text-2xl font-semibold text-white">Channel not found</h1>
      </div>
    );
  }

  const channelPosts = posts.filter((post) => post.department === department && post.channel === channel);

  return (
    <div className="space-y-6">
      <section className="rounded-[24px] border border-white/10 bg-[#1A1A1A] p-6">
        <p className="text-sm uppercase tracking-[0.2em] text-[#2EC4B6]">Department Channel</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">#{channelData.title}</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">{channelData.description}</p>
      </section>

      <section className="rounded-[24px] border border-white/10 bg-[#1A1A1A] p-6">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <p className="text-lg font-semibold text-white">Channel Activity</p>
            <p className="mt-1 text-sm text-white/45">Latest posts and updates from this department channel</p>
          </div>

          <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            New Post
          </button>
        </div>

        <div className="mt-5 space-y-4">
          {channelPosts.length > 0 ? (
            channelPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/posts/${post.slug}`}
                className="block rounded-2xl bg-black/20 p-5 transition hover:bg-black/30"
              >
                <p className="text-base font-semibold text-white">{post.title}</p>
                <p className="mt-2 text-sm text-white/45">
                  {post.author} • {post.time}
                </p>
                <p className="mt-4 text-sm leading-7 text-white/70">{post.summary}</p>
                <PostMetaChips
                  reactions={post.reactions}
                  commentsCount={post.commentsCount}
                  attachment={post.attachment}
                />
              </Link>
            ))
          ) : (
            <EmptyState
              title="No posts in this channel yet"
              description="This department channel does not have any shared posts yet. New activity posted here will appear in this space."
              actionLabel="Create Post"
            />
          )}
        </div>
      </section>
    </div>
  );
}
