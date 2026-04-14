import {posts} from "@/lib/mock-data";
import PostMetaChips from "@/components/feed/PostMetaChips";

type PostDetailPageProps = {
  params: Promise<{slug: string}>;
};

export default async function PostDetailPage({params}: PostDetailPageProps) {
  const {slug} = await params;

  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <div className="h-full min-h-0 overflow-y-auto pr-2 chat-scrollbar">
        <div className="space-y-6 pb-6">
          <div className="rounded-[24px] mindco-panel p-6">
            <h1 className="text-2xl font-semibold text-white">Post not found</h1>
          </div>
        </div>
      </div>
    );
  }

  const isAnnouncement = post.type === "announcement";

  return (
    <div className="h-full min-h-0 overflow-y-auto pr-2 chat-scrollbar">
      <div className="space-y-6 pb-6">
      <section className="rounded-[24px] mindco-panel p-6">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              isAnnouncement ? "bg-[#6675ff]/15 text-[#FF9A9C]" : "bg-[linear-gradient(180deg,#7c6cff,#4e7bff)]/15 text-[#8DD0EA]"
            }`}
          >
            {isAnnouncement ? "Official Notice" : "Post"}
          </span>

          <span className="text-xs text-white/40">{post.time}</span>
        </div>

        <h1 className="mt-4 text-3xl font-semibold text-white">{post.title}</h1>

        <div className="mt-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[linear-gradient(180deg,#7c6cff,#4e7bff)] text-sm font-medium text-white">
            {post.author.charAt(0)}
          </div>

          <div>
            <p className="text-sm font-medium text-white">{post.author}</p>
            <p className="text-xs text-white/45">{post.authorRole}</p>
          </div>
        </div>

        <p className="mt-6 text-sm leading-7 text-white/70">{post.content}</p>

        {post.attachment ? (
          <div className="mt-6 rounded-2xl border border-[rgba(129,157,255,0.14)] bg-[rgba(255,255,255,0.03)] p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-white/35">Attachment</p>
            <p className="mt-2 text-sm text-white">{post.attachment}</p>
          </div>
        ) : null}

        <div className="mt-6 border-t border-[rgba(129,157,255,0.12)] pt-4">
          <PostMetaChips
            reactions={post.reactions}
            commentsCount={post.commentsCount}
            attachment={post.attachment}
          />
        </div>
      </section>

      <section className="rounded-[24px] mindco-panel p-6">
        <div className="flex items-center justify-between gap-4 border-b border-[rgba(129,157,255,0.12)] pb-4">
          <div>
            <h2 className="text-lg font-semibold text-white">Comments</h2>
            <p className="mt-1 text-sm text-white/45">Discussion and feedback on this post</p>
          </div>
        </div>

        <div className="mt-5 space-y-4">
          {post.comments.map((comment, index) => (
            <article
              key={index}
              className="rounded-2xl bg-[rgba(255,255,255,0.035)] p-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2EC4B6] text-sm font-medium text-white">
                  {comment.author.charAt(0)}
                </div>

                <div>
                  <p className="text-sm font-medium text-white">{comment.author}</p>
                  <p className="text-xs text-white/45">
                    {comment.role} • {comment.time}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-white/70">{comment.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-5 border-t border-[rgba(129,157,255,0.12)] pt-4">
          <div className="rounded-2xl border border-[rgba(129,157,255,0.14)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-sm text-white/35">
            Write a comment...
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
