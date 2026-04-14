export default function GalleryPage() {
  const items = [
    "Campaign moodboard preview",
    "Team workshop snapshots",
    "Town hall presentation visuals",
    "Product launch creative set",
    "Office culture photo wall",
    "Design sprint whiteboard captures",
  ];

  return (
    <div className="h-full min-h-0 overflow-y-auto pr-2 chat-scrollbar">
      <div className="space-y-8 pb-6">
      <section className="rounded-[24px] border border-white/10 bg-[#1A1A1A] p-6">
        <p className="text-sm uppercase tracking-[0.2em] text-[#FF3B3F]">Media</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Gallery</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">
          Visual content shared across the workplace, including team moments, campaign previews, and internal media.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => (
          <article
            key={item}
            className="overflow-hidden rounded-[28px] border border-white/10 bg-[#1A1A1A]"
          >
            <div className="h-44 bg-gradient-to-br from-white/10 to-white/0" />
            <div className="p-5">
              <p className="text-sm font-medium text-white">{item}</p>
              <p className="mt-2 text-xs text-white/45">Media post #{index + 1}</p>
            </div>
          </article>
        ))}
      </section>
      </div>
    </div>
  );
}
