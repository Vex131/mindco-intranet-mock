"use client";

import {useMemo, useState} from "react";
import type {ActivePoll, ClosedPoll, PollOptionItem, SourceType, VoteVisibility} from "@/lib/mock-data";
import {activePolls, closedPolls} from "@/lib/mock-data";

type ActivePollItem = ActivePoll & {pollType: "active"};
type ArchivedPollItem = ClosedPoll & {pollType: "archived"};
type SearchablePoll = ActivePollItem | ArchivedPollItem;

function PollOption({label, votes, percent}: PollOptionItem) {
  return (
    <div className="rounded-xl border border-[rgba(129,157,255,0.14)] bg-[rgba(255,255,255,0.03)] p-2.5">
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-medium text-white">{label}</span>
        <span className="text-[11px] text-white/55">
          {votes} votes • {percent}%
        </span>
      </div>

      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
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
      : status === "Closed" || status === "Archived"
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
          ? "border-[#FF3B3F]/20 bg-[#6675ff]/10 text-[#FF9A9C]"
          : "border-white/10 bg-white/5 text-white/70";

  return <span className={`rounded-full border px-3 py-1 text-xs font-medium ${styles}`}>{sourceName}</span>;
}

function VoteVisibilityBadge({voteVisibility}: {voteVisibility: VoteVisibility}) {
  return (
    <span className="rounded-full border border-[rgba(129,157,255,0.14)] bg-white/[0.04] px-3 py-1 text-xs text-white/65">
      {voteVisibility === "public" ? "Public votes" : "Anonymous votes"}
    </span>
  );
}

function PollResultsModal({
  open,
  onClose,
  poll,
}: {
  open: boolean;
  onClose: () => void;
  poll: ActivePoll | ClosedPoll | null;
}) {
  if (!open || !poll) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="w-full max-w-2xl rounded-[28px] mindco-panel-soft p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#5B7CFA]">Vote Details</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">{poll.title}</h2>
            <p className="mt-2 text-sm text-white/55">
              {poll.voteVisibility === "public"
                ? "Visible voters by option"
                : "This poll is anonymous. Voter identities are hidden."}
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl border border-[rgba(129,157,255,0.14)] bg-white/[0.04] px-3 py-2 text-sm text-white/70 hover:bg-white/10"
          >
            Close
          </button>
        </div>

        <div className="mt-6 space-y-4">
          {poll.options.map((option) => (
            <div
              key={option.label}
              className="rounded-2xl border border-[rgba(129,157,255,0.14)] bg-[rgba(255,255,255,0.03)] p-4"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-medium text-white">{option.label}</p>
                <p className="text-xs text-white/50">
                  {option.votes} votes • {option.percent}%
                </p>
              </div>

              {poll.voteVisibility === "public" ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {option.voters?.length ? (
                    option.voters.map((voter) => (
                      <span
                        key={voter.id}
                        className="rounded-full border border-[rgba(129,157,255,0.14)] bg-white/[0.04] px-2.5 py-1 text-xs text-white/65"
                      >
                        {voter.name}
                      </span>
                    ))
                  ) : (
                    <p className="text-xs text-white/40">No voter details available</p>
                  )}
                </div>
              ) : (
                <p className="mt-3 text-xs text-white/40">Voter identities hidden</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function isHrPoll(poll: ActivePoll | ClosedPoll) {
  const author = "author" in poll ? poll.author : "";
  return author.toLowerCase() === "hr" || poll.sourceName.toLowerCase().includes("hr");
}

function isDepartmentPoll(poll: ActivePoll | ClosedPoll, currentUserDepartment: string) {
  return (
    poll.sourceType === "department" && poll.sourceName.toLowerCase().includes(currentUserDepartment.toLowerCase())
  );
}

function getPollPriority(poll: SearchablePoll, currentUserDepartment: string) {
  if (poll.pollType === "archived") return 3;
  if (isHrPoll(poll)) return 0;
  if (isDepartmentPoll(poll, currentUserDepartment)) return 1;
  return 2;
}

function sortPolls(a: SearchablePoll, b: SearchablePoll, currentUserDepartment: string) {
  const priorityDifference = getPollPriority(a, currentUserDepartment) - getPollPriority(b, currentUserDepartment);

  if (priorityDifference !== 0) {
    return priorityDifference;
  }

  if (a.pollType !== b.pollType) {
    return a.pollType === "active" ? -1 : 1;
  }

  return a.id - b.id;
}

function getActivePollCardStyle(poll: ActivePoll, currentUserDepartment: string) {
  if (isHrPoll(poll)) {
    return "border-[#FF5A6B]/40 bg-[linear-gradient(180deg,rgba(255,90,107,0.22),rgba(26,26,26,1))]";
  }

  if (isDepartmentPoll(poll, currentUserDepartment)) {
    return "border-[#A78BFA]/45 bg-[linear-gradient(180deg,rgba(167,139,250,0.26),rgba(26,26,26,1))]";
  }

  return "border-[#5B7CFA]/25 bg-[linear-gradient(180deg,rgba(91,124,250,0.12),rgba(26,26,26,1))]";
}

function getPollHighlightLabel(poll: ActivePoll, currentUserDepartment: string) {
  if (isHrPoll(poll)) {
    return {
      text: "HR Poll",
      className: "border-[#FF5A6B]/35 bg-[#FF5A6B]/14 text-[#FFC1C8]",
    };
  }

  if (isDepartmentPoll(poll, currentUserDepartment)) {
    return {
      text: "Your Department",
      className: "border-[#A78BFA]/40 bg-[#A78BFA]/18 text-[#E2D4FF]",
    };
  }

  return null;
}

function PollCard({
  poll,
  onShowResults,
  currentUserDepartment,
}: {
  poll: ActivePoll;
  onShowResults: (poll: ActivePoll) => void;
  currentUserDepartment: string;
}) {
  const highlightLabel = getPollHighlightLabel(poll, currentUserDepartment);

  return (
    <article className={`rounded-[24px] border p-4 ${getActivePollCardStyle(poll, currentUserDepartment)}`}>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0 flex-1 lg:max-w-[48%]">
          <h2 className="text-lg font-semibold text-white">{poll.title}</h2>

          <div className="mt-2 flex flex-wrap items-center gap-2">
            {highlightLabel ? (
              <span className={`rounded-full border px-3 py-1 text-xs font-medium ${highlightLabel.className}`}>
                {highlightLabel.text}
              </span>
            ) : null}

            <StatusBadge status={poll.status} />
            <SourceBadge
              sourceType={poll.sourceType}
              sourceName={poll.sourceName}
            />
            <VoteVisibilityBadge voteVisibility={poll.voteVisibility} />
          </div>

          <p className="mt-3 text-sm leading-6 text-white/60">{poll.description}</p>

          <div className="mt-4 flex flex-wrap gap-2 text-sm text-white/55">
            <span>{poll.totalVotes} total votes</span>
            <span className="text-white/20">•</span>
            <span>{poll.closesIn}</span>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <button className="rounded-xl border border-[rgba(129,157,255,0.14)] bg-white/[0.04] px-3 py-2 text-sm text-white/75 transition hover:bg-white/10">
              Open post
            </button>

            {poll.voteVisibility === "public" ? (
              <button
                onClick={() => onShowResults(poll)}
                className="rounded-xl border border-[rgba(129,157,255,0.14)] bg-white/[0.04] px-3 py-2 text-sm text-white/75 transition hover:bg-white/10"
              >
                Show voters
              </button>
            ) : null}

            <button className="rounded-xl border border-[rgba(129,157,255,0.14)] bg-white/[0.04] px-3 py-2 text-sm text-white/75 transition hover:bg-white/10">
              Share
            </button>
          </div>
        </div>

        <div className="w-full lg:w-[44%]">
          <div className="space-y-2">
            {poll.options.map((option) => (
              <PollOption
                key={option.label}
                label={option.label}
                votes={option.votes}
                percent={option.percent}
              />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function ArchivedPollCard({poll}: {poll: ClosedPoll}) {
  return (
    <article className="rounded-[24px] border border-white/10 bg-[#1A1A1A] p-4">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-lg font-semibold text-white">{poll.title}</h2>
            <StatusBadge status="Archived" />
            <SourceBadge
              sourceType={poll.sourceType}
              sourceName={poll.sourceName}
            />
            <VoteVisibilityBadge voteVisibility={poll.voteVisibility} />
          </div>

          <p className="mt-2 line-clamp-2 text-sm text-white/50">{poll.meta}</p>

          <div className="mt-3 text-sm text-white/50">
            <span>{poll.totalVotes} total votes</span>
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-2 md:grid-cols-2 xl:grid-cols-3">
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
  );
}

export default function PollsPage() {
  const currentUserDepartment = "Engineering";

  const [selectedPoll, setSelectedPoll] = useState<ActivePoll | ClosedPoll | null>(null);
  const [resultsOpen, setResultsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sourceFilter, setSourceFilter] = useState<"all" | SourceType | "archived">("all");

  const searchablePolls = useMemo<SearchablePoll[]>(() => {
    const allPolls: SearchablePoll[] = [
      ...activePolls.map((poll) => ({...poll, pollType: "active" as const})),
      ...closedPolls.map((poll) => ({...poll, pollType: "archived" as const})),
    ];

    return allPolls
      .filter((poll) => {
        const matchesSearch =
          searchQuery.trim().length === 0 ||
          [poll.title, poll.sourceName, poll.voteVisibility, ...poll.options.map((option) => option.label)]
            .join(" ")
            .toLowerCase()
            .includes(searchQuery.toLowerCase());

        const matchesSource =
          sourceFilter === "all"
            ? true
            : sourceFilter === "archived"
              ? poll.pollType === "archived"
              : poll.sourceType === sourceFilter;

        return matchesSearch && matchesSource;
      })
      .sort((a, b) => sortPolls(a, b, currentUserDepartment));
  }, [searchQuery, sourceFilter, currentUserDepartment]);

  const regularPolls = searchablePolls.filter((poll): poll is ActivePollItem => poll.pollType === "active");
  const archivedPolls = searchablePolls.filter((poll): poll is ArchivedPollItem => poll.pollType === "archived");

  const handleShowResults = (poll: ActivePoll | ClosedPoll) => {
    setSelectedPoll(poll);
    setResultsOpen(true);
  };

  const handleCloseResults = () => {
    setResultsOpen(false);
    setSelectedPoll(null);
  };

  return (
    <div className="h-full min-h-0 overflow-y-auto pr-2 chat-scrollbar">
      <div className="space-y-8 pb-6">
        <section className="px-1 pt-1">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <h1 className="text-[2.1rem] font-semibold tracking-[-0.02em] text-white">Polls</h1>
              <p className="mt-1 text-sm text-white/40">Active and archived poll posts</p>
            </div>

            <div className="flex w-full flex-col gap-3 xl:max-w-3xl xl:flex-row xl:justify-end">
              <div className="flex-1">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search poll posts"
                  className="w-full rounded-2xl border border-[rgba(129,157,255,0.14)] bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#5B7CFA]/40"
                />
              </div>

              <div className="xl:w-60">
                <select
                  value={sourceFilter}
                  onChange={(event) => setSourceFilter(event.target.value as "all" | SourceType | "archived")}
                  className="w-full appearance-none rounded-2xl border border-[rgba(129,157,255,0.14)] bg-white/[0.04] px-4 py-3 text-sm text-white outline-none focus:border-[#5B7CFA]/40"
                >
                  <option
                    value="all"
                    className="bg-[#111827]"
                  >
                    All poll posts
                  </option>
                  <option
                    value="feed"
                    className="bg-[#111827]"
                  >
                    Feed posts
                  </option>
                  <option
                    value="dm"
                    className="bg-[#111827]"
                  >
                    Direct messages
                  </option>
                  <option
                    value="group"
                    className="bg-[#111827]"
                  >
                    Private groups
                  </option>
                  <option
                    value="department"
                    className="bg-[#111827]"
                  >
                    Department channels
                  </option>
                  <option
                    value="archived"
                    className="bg-[#111827]"
                  >
                    Archived polls
                  </option>
                </select>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          {regularPolls.map((poll) => (
            <PollCard
              key={poll.id}
              poll={poll}
              onShowResults={handleShowResults}
              currentUserDepartment={currentUserDepartment}
            />
          ))}

          {archivedPolls.map((poll) => (
            <ArchivedPollCard
              key={poll.id}
              poll={poll}
            />
          ))}
        </section>

        {!regularPolls.length && !archivedPolls.length ? (
          <section className="rounded-[24px] border border-[rgba(129,157,255,0.14)] bg-white/[0.03] p-8 text-center">
            <h2 className="text-lg font-semibold text-white">No matching polls</h2>
            <p className="mt-2 text-sm text-white/50">Try a different search term or dropdown filter.</p>
          </section>
        ) : null}
      </div>

      <PollResultsModal
        open={resultsOpen}
        onClose={handleCloseResults}
        poll={selectedPoll}
      />
    </div>
  );
}
