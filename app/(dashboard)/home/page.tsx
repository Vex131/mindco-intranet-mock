import {departmentMessages} from "@/lib/mockData";

export default function HomePage() {
  const engineeringMessages = departmentMessages.Engineering;

  return (
    <div className="space-y-8">
      <section className="rounded-[24px] border border-white/10 bg-[#1A1A1A] p-6">
        <p className="text-sm uppercase tracking-[0.2em] text-[#2EC4B6]">Welcome back</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Good morning, Naavil</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">
          Stay up to date with announcements, department activity, current polls, pins, and workplace events across
          MindCo.
        </p>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-[28px] border border-white/10 bg-[#1A1A1A] p-6">
          <h2 className="text-lg font-semibold text-white">Important Announcements</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-2xl bg-black/20 p-4">
              <p className="text-sm font-medium text-white">Updated leave policy published</p>
              <p className="mt-1 text-sm text-white/50">HR • 2 hours ago</p>
            </div>
            <div className="rounded-2xl bg-black/20 p-4">
              <p className="text-sm font-medium text-white">Quarterly town hall scheduled</p>
              <p className="mt-1 text-sm text-white/50">Leadership • Today</p>
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-[#1A1A1A] p-6">
          <h2 className="text-lg font-semibold text-white">Today at MindCo</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-2xl bg-black/20 p-4">
              <p className="text-sm font-medium text-white">Engineering weekly sync</p>
              <p className="mt-1 text-sm text-white/50">10:00 AM</p>
            </div>
            <div className="rounded-2xl bg-black/20 p-4">
              <p className="text-sm font-medium text-white">Design review session</p>
              <p className="mt-1 text-sm text-white/50">2:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[28px] border border-white/10 bg-[#1A1A1A] p-6">
        <h2 className="text-lg font-semibold text-white">Department Activity Preview</h2>
        <div className="mt-4 space-y-4">
          {engineeringMessages.map((message) => (
            <div
              key={message}
              className="rounded-2xl bg-black/20 p-4"
            >
              <p className="text-sm font-medium text-white">{message}</p>
              <p className="mt-1 text-sm text-white/50">Engineering • mock update</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
