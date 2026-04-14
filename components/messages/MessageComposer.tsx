"use client";

type MessageComposerProps = {
  placeholder: string;
};

export default function MessageComposer({placeholder}: MessageComposerProps) {
  return (
    <div className="border-t border-[rgba(129,157,255,0.12)] bg-[rgba(7,10,24,0.72)] px-4 py-4 backdrop-blur-xl">
      <div className="flex items-end gap-3 mindco-input rounded-3xl px-4 py-3">
        <button className="text-lg text-white/45 transition hover:text-white">＋</button>

        <textarea
          rows={1}
          placeholder={placeholder}
          onInput={(event) => {
            const target = event.currentTarget;
            target.style.height = "0px";
            target.style.height = `${Math.min(target.scrollHeight, 160)}px`;
          }}
          className="max-h-40 min-h-[24px] flex-1 resize-none overflow-y-auto bg-transparent text-[15px] leading-6 text-white outline-none placeholder:text-white/35 hide-scrollbar"
        />

        <button className="text-white/45 transition hover:text-white">😊</button>
      </div>
    </div>
  );
}
