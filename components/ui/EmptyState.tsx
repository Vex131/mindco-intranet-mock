type EmptyStateProps = {
  title: string;
  description: string;
  actionLabel?: string;
};

export default function EmptyState({title, description, actionLabel}: EmptyStateProps) {
  return (
    <div className="rounded-[24px] border border-dashed border-[rgba(129,157,255,0.18)] bg-[rgba(10,15,34,0.72)] px-6 py-10 text-center backdrop-blur-xl">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.05] text-lg text-white/55">
        ✦
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-white/55">{description}</p>

      {actionLabel ? (
        <button className="mt-5 mindco-button rounded-xl px-4 py-2.5 text-sm text-white">
          {actionLabel}
        </button>
      ) : null}
    </div>
  );
}
