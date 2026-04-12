type EmptyStateProps = {
  title: string;
  description: string;
  actionLabel?: string;
};

export default function EmptyState({title, description, actionLabel}: EmptyStateProps) {
  return (
    <div className="rounded-[24px] border border-dashed border-white/10 bg-black/20 px-6 py-10 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-lg text-white/55">
        ✦
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-white/55">{description}</p>

      {actionLabel ? (
        <button className="mt-5 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/70">
          {actionLabel}
        </button>
      ) : null}
    </div>
  );
}
