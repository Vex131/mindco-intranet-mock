type SourceType = "feed" | "dm" | "group" | "department";

type PollOptionItem = {
  label: string;
  votes: number;
  percent: number;
};

type ActivePoll = {
  id: number;
  title: string;
  description: string;
  status: string;
  totalVotes: number;
  closesIn: string;
  author: string;
  highlighted?: boolean;
  sourceType: SourceType;
  sourceName: string;
  options: PollOptionItem[];
};

type ClosedPoll = {
  id: number;
  title: string;
  meta: string;
  totalVotes: number;
  sourceType: SourceType;
  sourceName: string;
  options: PollOptionItem[];
};

const activePolls: ActivePoll[] = [
  {
    id: 1,
    title: "What time should the Q2 town hall start?",
    description:
      "We’re finalizing the all-hands schedule for next Thursday. Vote for the time that works best for your team.",
    status: "Closing soon",
    totalVotes: 42,
    closesIn: "Closes today • 5:00 PM",
    author: "Leadership",
    highlighted: true,
    sourceType: "feed",
    sourceName: "My Feed",
    options: [
      {label: "9:00 AM", votes: 12, percent: 29},
      {label: "11:00 AM", votes: 18, percent: 43},
      {label: "2:00 PM", votes: 12, percent: 29},
    ],
  },
  {
    id: 2,
    title: "Should the team lunch happen this Friday?",
    description: "Help us decide whether to lock in the lunch booking for this week.",
    status: "Open",
    totalVotes: 18,
    closesIn: "2 days left",
    author: "Aisha Rafi",
    sourceType: "dm",
    sourceName: "Direct Message",
    options: [
      {label: "Yes", votes: 10, percent: 56},
      {label: "No", votes: 4, percent: 22},
      {label: "Need more details", votes: 4, percent: 22},
    ],
  },
  {
    id: 3,
    title: "Preferred onboarding format for new hires?",
    description: "We’re refining the first-week experience for incoming team members.",
    status: "Open",
    totalVotes: 27,
    closesIn: "4 days left",
    author: "HR Working Group",
    sourceType: "group",
    sourceName: "Private Group",
    options: [
      {label: "In-person", votes: 8, percent: 30},
      {label: "Hybrid", votes: 13, percent: 48},
      {label: "Self-paced digital", votes: 6, percent: 22},
    ],
  },
  {
    id: 4,
    title: "Preferred release review window?",
    description: "Engineering leads are aligning on a review window for the next release cycle.",
    status: "Open",
    totalVotes: 31,
    closesIn: "1 day left",
    author: "Engineering Leads",
    sourceType: "department",
    sourceName: "Engineering",
    options: [
      {label: "Tuesday morning", votes: 7, percent: 23},
      {label: "Wednesday afternoon", votes: 15, percent: 48},
      {label: "Friday morning", votes: 9, percent: 29},
    ],
  },
];

const closedPolls: ClosedPoll[] = [
  {
    id: 5,
    title: "Preferred release review window?",
    meta: "Closed yesterday • 31 votes",
    totalVotes: 31,
    sourceType: "department",
    sourceName: "Engineering",
    options: [
      {label: "Tuesday morning", votes: 7, percent: 23},
      {label: "Wednesday afternoon", votes: 15, percent: 48},
      {label: "Friday morning", votes: 9, percent: 29},
    ],
  },
  {
    id: 6,
    title: "Best topic for the next wellness session?",
    meta: "Closed 2 days ago • 24 votes",
    totalVotes: 24,
    sourceType: "group",
    sourceName: "Private Group",
    options: [
      {label: "Stress management", votes: 11, percent: 46},
      {label: "Ergonomics at work", votes: 8, percent: 33},
      {label: "Sleep and recovery", votes: 5, percent: 21},
    ],
  },
];

function PollOption({label, votes, percent}: PollOptionItem) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-medium text-white">{label}</span>
        <span className="text-xs text-white/55">
          {votes} votes • {percent}%
        </span>
      </div>

      <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-[#5B7CFA]"
          style={{width: `${percent}%`}}
        />
      </div>
    </div>
  );
}

function StatusBadge({status}: {status: string}) {
  const styles =
    status === "Closing soon"
      ? "border-[#FFD23F]/25 bg-[#FFD23F]/10 text-[#FFD23F]"
      : status === "Closed"
        ? "border-white/10 bg-white/5 text-white/60"
        : "border-[#2EC4B6]/25 bg-[#2EC4B6]/10 text-[#2EC4B6]";

  return <span className={`rounded-full border px-3 py-1 text-xs font-medium ${styles}`}>{status}</span>;
}

function SourceBadge({sourceType, sourceName}: {sourceType: SourceType; sourceName: string}) {
  const styles =
    sourceType === "feed"
      ? "border-[#5B7CFA]/25 bg-[#5B7CFA]/10 text-[#A9B9FF]"
      : sourceType === "dm"
        ? "border-[#2EC4B6]/25 bg-[#2EC4B6]/10 text-[#7DE4D8]"
        : sourceType === "group"
          ? "border-[#FF3B3F]/20 bg-[#FF3B3F]/10 text-[#FF9A9C]"
          : "border-white/10 bg-white/5 text-white/70";

  return <span className={`rounded-full border px-3 py-1 text-xs font-medium ${styles}`}>{sourceName}</span>;
}

function PollCard({poll}: {poll: ActivePoll}) {
  return (
    <article
      className={`rounded-[28px] border p-6 ${
        poll.highlighted
          ? "border-[#5B7CFA]/30 bg-[linear-gradient(180deg,rgba(91,124,250,0.14),rgba(26,26,26,1))]"
          : "border-white/10 bg-[#1A1A1A]"
      }`}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            {poll.highlighted ? (
              <span className="rounded-full border border-[#5B7CFA]/25 bg-[#5B7CFA]/10 px-3 py-1 text-xs font-medium text-[#A9B9FF]">
                Featured Poll
              </span>
            ) : null}

            <StatusBadge status={poll.status} />
            <SourceBadge
              sourceType={poll.sourceType}
              sourceName={poll.sourceName}
            />
          </div>

          <h2 className="mt-4 text-xl font-semibold text-white">{poll.title}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">{poll.description}</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-right">
          <p className="text-xs uppercase tracking-[0.18em] text-white/35">Posted by</p>
          <p className="mt-1 text-sm font-medium text-white">{poll.author}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-3 text-sm text-white/55">
        <span>{poll.totalVotes} total votes</span>
        <span className="text-white/20">•</span>
        <span>{poll.closesIn}</span>
      </div>

      <div className="mt-5 space-y-3">
        {poll.options.map((option) => (
          <PollOption
            key={option.label}
            label={option.label}
            votes={option.votes}
            percent={option.percent}
          />
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
        <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/75 transition hover:bg-white/10">
          Open post
        </button>
        <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/75 transition hover:bg-white/10">
          Share
        </button>
      </div>
    </article>
  );
}

export default function PollsPage() {
  const featuredPoll = activePolls.find((poll) => poll.highlighted);
  const regularPolls = activePolls.filter((poll) => !poll.highlighted);

  return (
    <div className="h-full min-h-0 overflow-y-auto pr-2 chat-scrollbar">
      <div className="space-y-8 pb-6">
        <section className="rounded-[24px] border border-white/10 bg-[#1A1A1A] p-6">
          <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#FFD23F]">Engagement</p>
              <h1 className="mt-3 text-3xl font-semibold text-white">Polls</h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">
                Polls from feed posts, direct messages, private groups, and department channels.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.16em] text-white/35">Active</p>
                <p className="mt-2 text-xl font-semibold text-white">{activePolls.length}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.16em] text-white/35">Closing Soon</p>
                <p className="mt-2 text-xl font-semibold text-white">
                  {activePolls.filter((poll) => poll.status === "Closing soon").length}
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.16em] text-white/35">Closed</p>
                <p className="mt-2 text-xl font-semibold text-white">{closedPolls.length}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-wrap gap-3">
          {["All Polls", "Open", "Closing Soon", "Closed", "My Department"].map((filter) => (
            <button
              key={filter}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                filter === "All Polls"
                  ? "border-[#5B7CFA]/30 bg-[#5B7CFA]/10 text-white"
                  : "border-white/10 bg-white/5 text-white/65 hover:bg-white/10 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </section>

        {featuredPoll ? <PollCard poll={featuredPoll} /> : null}

        <section className="space-y-5">
          {regularPolls.map((poll) => (
            <PollCard
              key={poll.id}
              poll={poll}
            />
          ))}
        </section>

        <section className="rounded-[28px] border border-white/10 bg-[#1A1A1A] p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/35">Archive</p>
              <h2 className="mt-2 text-xl font-semibold text-white">Recently Closed</h2>
            </div>
            <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/75 hover:bg-white/10">
              View all
            </button>
          </div>

          <div className="mt-5 grid gap-4 xl:grid-cols-2">
            {closedPolls.map((poll) => (
              <article
                key={poll.id}
                className="rounded-2xl border border-white/10 bg-black/20 p-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <StatusBadge status="Closed" />
                    <SourceBadge
                      sourceType={poll.sourceType}
                      sourceName={poll.sourceName}
                    />
                  </div>
                </div>

                <p className="mt-4 text-base font-semibold text-white">{poll.title}</p>
                <p className="mt-2 text-sm text-white/50">{poll.meta}</p>
                <p className="mt-2 text-sm text-white/55">{poll.totalVotes} total votes</p>

                <div className="mt-4 space-y-3">
                  {poll.options.map((option) => (
                    <PollOption
                      key={option.label}
                      label={option.label}
                      votes={option.votes}
                      percent={option.percent}
                    />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
