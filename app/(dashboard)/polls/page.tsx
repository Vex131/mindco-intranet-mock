export default function PollsPage() {
  const polls = [
    {
      title: "Town hall preferred time?",
      meta: "42 votes • Closes today",
      options: ["9:00 AM", "11:00 AM", "2:00 PM"],
    },
    {
      title: "Should the team lunch happen this Friday?",
      meta: "18 votes • Open",
      options: ["Yes", "No", "Need more details"],
    },
    {
      title: "Preferred onboarding format for new hires?",
      meta: "27 votes • HR",
      options: ["In-person", "Hybrid", "Self-paced digital"],
    },
  ];

  return (
    <div className="space-y-8">
      <section className="rounded-[24px] border border-white/10 bg-[#1A1A1A] p-6">
        <p className="text-sm uppercase tracking-[0.2em] text-[#FFD23F]">Engagement</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Polls</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">
          Active workplace polls, team voting, feedback collection, and participation snapshots.
        </p>
      </section>

      <section className="space-y-5">
        {polls.map((poll) => (
          <article
            key={poll.title}
            className="rounded-[28px] border border-white/10 bg-[#1A1A1A] p-6"
          >
            <p className="text-lg font-semibold text-white">{poll.title}</p>
            <p className="mt-2 text-sm text-white/45">{poll.meta}</p>

            <div className="mt-5 space-y-3">
              {poll.options.map((option) => (
                <div
                  key={option}
                  className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/75"
                >
                  {option}
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
