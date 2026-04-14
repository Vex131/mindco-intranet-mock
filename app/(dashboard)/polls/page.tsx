"use client";

import {useState} from "react";
import type {ActivePoll, ClosedPoll, PollOptionItem, SourceType, VoteVisibility} from "@/lib/mock-data";
import {activePolls, closedPolls} from "@/lib/mock-data";

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

function VoteVisibilityBadge({voteVisibility}: {voteVisibility: VoteVisibility}) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/65">
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
      <div className="w-full max-w-2xl rounded-[28px] border border-white/10 bg-[#171717] p-6 shadow-2xl">
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
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70 hover:bg-white/10"
          >
            Close
          </button>
        </div>

        <div className="mt-6 space-y-4">
          {poll.options.map((option) => (
            <div
              key={option.label}
              className="rounded-2xl border border-white/10 bg-black/20 p-4"
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
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/65"
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

function PollCard({poll, onShowResults}: {poll: ActivePoll; onShowResults: (poll: ActivePoll) => void}) {
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
            <VoteVisibilityBadge voteVisibility={poll.voteVisibility} />
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

        {poll.voteVisibility === "public" ? (
          <button
            onClick={() => onShowResults(poll)}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/75 transition hover:bg-white/10"
          >
            Show voters
          </button>
        ) : null}

        <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/75 transition hover:bg-white/10">
          Share
        </button>
      </div>
    </article>
  );
}

function ClosedPollCard({poll, onShowResults}: {poll: ClosedPoll; onShowResults: (poll: ClosedPoll) => void}) {
  return (
    <article className="rounded-2xl border border-white/10 bg-black/20 p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge status="Closed" />
          <SourceBadge
            sourceType={poll.sourceType}
            sourceName={poll.sourceName}
          />
          <VoteVisibilityBadge voteVisibility={poll.voteVisibility} />
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

      <div className="mt-5 border-t border-white/10 pt-4">
        {poll.voteVisibility === "public" ? (
          <button
            onClick={() => onShowResults(poll)}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/75 hover:bg-white/10"
          >
            Show voters
          </button>
        ) : null}
      </div>
    </article>
  );
}

export default function PollsPage() {
  const featuredPoll = activePolls.find((poll) => poll.highlighted);
  const regularPolls = activePolls.filter((poll) => !poll.highlighted);

  const [selectedPoll, setSelectedPoll] = useState<ActivePoll | ClosedPoll | null>(null);
  const [resultsOpen, setResultsOpen] = useState(false);

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

        {featuredPoll ? (
          <PollCard
            poll={featuredPoll}
            onShowResults={handleShowResults}
          />
        ) : null}

        <section className="space-y-5">
          {regularPolls.map((poll) => (
            <PollCard
              key={poll.id}
              poll={poll}
              onShowResults={handleShowResults}
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
              <ClosedPollCard
                key={poll.id}
                poll={poll}
                onShowResults={handleShowResults}
              />
            ))}
          </div>
        </section>
      </div>

      <PollResultsModal
        open={resultsOpen}
        onClose={handleCloseResults}
        poll={selectedPoll}
      />
    </div>
  );
}
