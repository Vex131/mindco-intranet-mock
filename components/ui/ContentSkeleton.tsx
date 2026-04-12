type ContentSkeletonProps = {
  lines?: number;
  cards?: number;
};

export default function ContentSkeleton({lines = 3, cards = 2}: ContentSkeletonProps) {
  return (
    <div className="space-y-4">
      {Array.from({length: cards}).map((_, cardIndex) => (
        <div
          key={cardIndex}
          className="animate-pulse rounded-[24px] border border-white/10 bg-[#1A1A1A] p-5"
        >
          <div className="h-4 w-24 rounded bg-white/10" />
          <div className="mt-4 h-6 w-2/3 rounded bg-white/10" />
          <div className="mt-5 space-y-3">
            {Array.from({length: lines}).map((_, lineIndex) => (
              <div
                key={lineIndex}
                className={`h-4 rounded bg-white/10 ${lineIndex === lines - 1 ? "w-2/3" : "w-full"}`}
              />
            ))}
          </div>
          <div className="mt-5 flex gap-2">
            <div className="h-7 w-24 rounded-full bg-white/10" />
            <div className="h-7 w-28 rounded-full bg-white/10" />
            <div className="h-7 w-20 rounded-full bg-white/10" />
          </div>
        </div>
      ))}
    </div>
  );
}
