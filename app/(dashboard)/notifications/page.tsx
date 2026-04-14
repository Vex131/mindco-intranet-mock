import Link from "next/link";
import {notifications} from "@/lib/mock-data";
import EmptyState from "@/components/ui/EmptyState";

function badgeClasses(type: string) {
  switch (type) {
    case "announcement":
      return "bg-[#FF3B3F]/15 text-[#FF9A9C]";
    case "message":
      return "bg-[#2EC4B6]/15 text-[#7DE3D7]";
    case "channel":
      return "bg-[#3FA7D6]/15 text-[#8DD0EA]";
    case "poll":
      return "bg-[#FFD23F]/15 text-[#FFE27D]";
    case "comment":
      return "bg-white/10 text-white/75";
    case "reaction":
      return "bg-white/10 text-white/75";
    default:
      return "bg-white/10 text-white/75";
  }
}

export default function NotificationsPage() {
  const unread = notifications.filter((item) => item.unread);
  const earlier = notifications.filter((item) => !item.unread);

  return (
    <div className="h-full min-h-0 overflow-y-auto pr-2 chat-scrollbar">
      <div className="space-y-8 pb-6">
      <section className="rounded-[24px] border border-white/10 bg-[#1A1A1A] p-6">
        <p className="text-sm uppercase tracking-[0.2em] text-[#2EC4B6]">Updates</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Notifications</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">
          Track comments, reactions, direct messages, announcement updates, department activity, and poll changes across
          MindCo.
        </p>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-lg font-semibold text-white">Unread</h2>
          <span className="rounded-full bg-[#FF3B3F]/15 px-3 py-1 text-xs font-medium text-[#FF9A9C]">
            {unread.length} new
          </span>
        </div>

        <div className="space-y-4">
          {unread.length > 0 ? (
            unread.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="block rounded-[24px] border border-white/10 bg-[#1A1A1A] p-5 transition hover:border-white/20 hover:bg-[#202020]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`rounded-full px-3 py-1 text-xs font-medium ${badgeClasses(item.type)}`}>
                        {item.type}
                      </span>
                      <span className="text-xs text-white/40">{item.time}</span>
                      <span className="h-2 w-2 rounded-full bg-[#FF3B3F]" />
                    </div>

                    <p className="mt-3 text-base font-semibold text-white">{item.title}</p>

                    <p className="mt-2 text-sm leading-7 text-white/65">{item.description}</p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <EmptyState
              title="No unread notifications"
              description="You’re all caught up. New comments, messages, and updates will appear here."
            />
          )}
        </div>
      </section>

      <section className="space-y-4">
        <div className="space-y-4">
          {earlier.length > 0 ? (
            earlier.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="block rounded-[24px] border border-white/10 bg-[#1A1A1A] p-5 transition hover:border-white/20 hover:bg-[#202020]"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${badgeClasses(item.type)}`}>
                      {item.type}
                    </span>
                    <span className="text-xs text-white/40">{item.time}</span>
                  </div>

                  <p className="mt-3 text-base font-semibold text-white">{item.title}</p>

                  <p className="mt-2 text-sm leading-7 text-white/65">{item.description}</p>
                </div>
              </Link>
            ))
          ) : (
            <EmptyState
              title="No earlier notifications"
              description="Past activity and updates will appear here once you have more interaction history."
            />
          )}
        </div>
      </section>
      </div>
    </div>
  );
}
