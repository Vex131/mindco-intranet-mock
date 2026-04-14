type PostMetaChipsProps = {
  reactions: string;
  commentsCount: number;
  attachment?: string | null;
};

function Chip({children}: {children: React.ReactNode}) {
  return (
    <span className="inline-flex items-center rounded-full border border-[rgba(129,157,255,0.14)] bg-white/[0.04] px-3 py-1 text-xs text-white/60">
      {children}
    </span>
  );
}

export default function PostMetaChips({reactions, commentsCount, attachment}: PostMetaChipsProps) {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-2">
      <Chip>👍 {reactions}</Chip>
      <Chip>💬 {commentsCount} comments</Chip>
      {attachment ? <Chip>📎 Attachment</Chip> : null}
    </div>
  );
}
