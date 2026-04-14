import EmptyState from "@/components/ui/EmptyState";

export default function ProfilePage() {
  const uploads = [
    {
      title: "Campaign review board",
      meta: "Uploaded 2 days ago",
    },
    {
      title: "Workshop snapshots",
      meta: "Uploaded last week",
    },
    {
      title: "Product planning notes",
      meta: "Uploaded 12 days ago",
    },
    {
      title: "Team event photo set",
      meta: "Uploaded 2 weeks ago",
    },
    {
      title: "UI concept references",
      meta: "Uploaded this month",
    },
    {
      title: "Internal launch visuals",
      meta: "Uploaded this month",
    },
  ];

  const stats = [
    {label: "Posts", value: "24"},
    {label: "Comments", value: "86"},
    {label: "Uploads", value: "12"},
    {label: "Polls", value: "4"},
  ];

  return (
    <div className="h-full min-h-0 overflow-y-auto pr-2 chat-scrollbar">
      <div className="space-y-8 pb-6">
      <section className="rounded-[24px] border border-white/10 bg-[#1A1A1A] p-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex items-start gap-5">
            <div className="flex h-20 w-20 items-center justify-center rounded-[24px] bg-[#3FA7D6] text-2xl font-semibold text-white">
              N
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#2EC4B6]">User Profile</p>
              <h1 className="mt-2 text-3xl font-semibold text-white">Naavil</h1>
              <p className="mt-2 text-sm text-white/60">Product Designer • Employee</p>
              <p className="mt-1 text-sm text-white/45">Design Team • MindCo Intranet Demo</p>
            </div>
          </div>

          <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
            Edit Profile
          </button>
        </div>

        <p className="mt-6 max-w-3xl text-sm leading-7 text-white/65">
          Product-focused designer working on internal tools, UX flows, and interface structure for MindCo’s workplace
          platform. Interested in clarity, usability, and clean information architecture.
        </p>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <div className="rounded-[28px] border border-white/10 bg-[#1A1A1A] p-6">
          <h2 className="text-lg font-semibold text-white">Details</h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-black/20 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-white/35">Email</p>
              <p className="mt-2 text-sm text-white">naavil@mindco.com</p>
            </div>

            <div className="rounded-2xl bg-black/20 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-white/35">Department</p>
              <p className="mt-2 text-sm text-white">Design</p>
            </div>

            <div className="rounded-2xl bg-black/20 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-white/35">Team</p>
              <p className="mt-2 text-sm text-white">Product Experience</p>
            </div>

            <div className="rounded-2xl bg-black/20 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-white/35">Location</p>
              <p className="mt-2 text-sm text-white">Malé Office</p>
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-[#1A1A1A] p-6">
          <h2 className="text-lg font-semibold text-white">Activity Snapshot</h2>

          <div className="mt-5 grid grid-cols-2 gap-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl bg-black/20 p-4"
              >
                <p className="text-2xl font-semibold text-white">{item.value}</p>
                <p className="mt-2 text-sm text-white/50">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-[28px] border border-white/10 bg-[#1A1A1A] p-6">
        <h2 className="text-lg font-semibold text-white">Recent Activity</h2>

        <div className="mt-5 space-y-4">
          <div className="rounded-2xl bg-black/20 p-4">
            <p className="text-sm font-medium text-white">Shared updated intranet dashboard layout mock</p>
            <p className="mt-1 text-sm text-white/50">1 hour ago • 12 comments • 21 likes</p>
          </div>

          <div className="rounded-2xl bg-black/20 p-4">
            <p className="text-sm font-medium text-white">Uploaded new gallery images for internal demo content</p>
            <p className="mt-1 text-sm text-white/50">Yesterday • 6 uploads</p>
          </div>

          <div className="rounded-2xl bg-black/20 p-4">
            <p className="text-sm font-medium text-white">Voted in the onboarding experience poll</p>
            <p className="mt-1 text-sm text-white/50">2 days ago • HR Poll</p>
          </div>
        </div>
      </section>

      <section className="rounded-[28px] border border-white/10 bg-[#1A1A1A] p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-white">Uploaded Images</h2>
            <p className="mt-1 text-sm text-white/50">A small gallery of images shared by this user</p>
          </div>

          <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            View All
          </button>
        </div>

        <div className="mt-6">
          {uploads.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {uploads.map((item, index) => (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-[24px] border border-white/10 bg-black/20"
                >
                  <div className="h-36 bg-gradient-to-br from-white/10 to-white/0" />
                  <div className="p-4">
                    <p className="text-sm font-medium text-white">{item.title}</p>
                    <p className="mt-2 text-xs text-white/45">
                      {item.meta} • Image #{index + 1}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <EmptyState
              title="No uploaded images yet"
              description="Images shared by this user will appear here once media has been uploaded."
              actionLabel="Upload Image"
            />
          )}
        </div>
      </section>
      </div>
    </div>
  );
}
