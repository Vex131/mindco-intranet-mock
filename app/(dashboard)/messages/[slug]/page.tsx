import {messageThreads} from "@/lib/mock-data";
import EmptyState from "@/components/ui/EmptyState";
import MessageComposer from "@/components/messages/MessageComposer";

type MessagePageProps = {
  params: Promise<{slug: string}>;
};

type ThreadMessage = (typeof messageThreads)[number]["messages"][number] & {
  startsGroup: boolean;
};

function ReplyPreview({replyTo, isMine}: {replyTo: NonNullable<ThreadMessage["replyTo"]>; isMine: boolean}) {
  return (
    <div
      className={`mb-3 rounded-2xl border px-3 py-2 ${
        isMine ? "border-white/10 bg-black/20" : "border-white/10 bg-black/20"
      }`}
    >
      <p className="text-[11px] font-medium text-white/55">Replying to {replyTo.sender}</p>
      <p className="mt-1 truncate text-[12px] text-white/60">{replyTo.text}</p>
    </div>
  );
}

function BubbleHeader({
  senderName,
  avatarLabel,
  time,
  isMine,
}: {
  senderName: string;
  avatarLabel: string;
  time: string;
  isMine: boolean;
}) {
  return (
    <div className="mb-3 flex items-center gap-3">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold ${
          isMine ? "bg-white/10 text-white" : "bg-white/10 text-white"
        }`}
      >
        {avatarLabel}
      </div>

      <div className="min-w-0">
        <p className="text-sm font-semibold text-white">{senderName}</p>
        <p className="text-[11px] text-white/40">{time}</p>
      </div>
    </div>
  );
}

function MessageBody({message}: {message: ThreadMessage}) {
  if (message.type === "text" && message.text) {
    return <p className="text-[15px] leading-7 text-white/88">{message.text}</p>;
  }

  if (message.type === "poll" && message.poll) {
    return (
      <div>
        <p className="text-sm font-medium text-white">{message.poll.question}</p>

        <div className="mt-3 space-y-2">
          {message.poll.options.map((option) => (
            <div
              key={option.label}
              className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm text-white/80"
            >
              {option.label} · {option.votes} votes
            </div>
          ))}
        </div>

        <p className="mt-3 text-xs text-white/40">{message.poll.totalVotes} total votes</p>
      </div>
    );
  }

  if (message.type === "file" && message.file) {
    return (
      <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-sm">📄</div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-white">{message.file.name}</p>
            <p className="mt-1 text-xs text-white/45">{message.file.size}</p>
          </div>
        </div>
      </div>
    );
  }

  if (message.type === "link" && message.link) {
    return (
      <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
        <p className="text-sm font-medium text-white">{message.link.title}</p>
        <p className="mt-1 text-xs text-white/45">{message.link.url}</p>
      </div>
    );
  }

  return null;
}

function MessageBubble({message}: {message: ThreadMessage}) {
  const isMine = message.mine;
  const senderName = isMine ? "You" : message.sender;
  const avatarLabel = senderName.charAt(0);

  return (
    <div className={`flex ${isMine ? "justify-end" : "justify-start"}`}>
      <div
        className={`rounded-[24px] border px-4 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.18)] ${
          isMine ? "border-white/10 bg-[#202020]" : "border-white/10 bg-[#171717]"
        } max-w-[680px] min-w-[280px]`}
      >
        <BubbleHeader
          senderName={senderName}
          avatarLabel={avatarLabel}
          time={message.time}
          isMine={isMine}
        />

        {message.replyTo ? (
          <ReplyPreview
            replyTo={message.replyTo}
            isMine={isMine}
          />
        ) : null}

        <MessageBody message={message} />

        <div className="mt-4 flex justify-end">
          <button className="rounded-lg border border-white/10 bg-black/20 px-2.5 py-1 text-[11px] text-white/55 transition hover:text-white">
            Reply
          </button>
        </div>
      </div>
    </div>
  );
}

export default async function MessageThreadPage({params}: MessagePageProps) {
  const {slug} = await params;

  const activeChat = messageThreads.find((thread) => thread.slug === slug);

  if (!activeChat) {
    return (
      <div className="h-full min-h-0 overflow-y-auto pr-2 chat-scrollbar">
        <div className="space-y-8 pb-6">
          <EmptyState
            title="Conversation not found"
            description="This message thread could not be found. Try selecting a different conversation from the sidebar."
          />
        </div>
      </div>
    );
  }

  const messages: ThreadMessage[] = activeChat.messages.map((message, index, allMessages) => {
    const previous = allMessages[index - 1];

    const startsGroup =
      !previous ||
      previous.sender !== message.sender ||
      previous.mine !== message.mine ||
      message.replyTo !== undefined ||
      previous.type !== "text";

    return {
      ...message,
      startsGroup,
    };
  });

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-[18px] border border-white/10 bg-[#18191c]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">
            {activeChat.avatarLabel ?? activeChat.name.charAt(0)}
          </div>

          <div>
            <p className="text-sm font-semibold text-white">{activeChat.name}</p>
            <p className="text-xs text-white/45">
              {activeChat.type === "group"
                ? activeChat.subtitle
                : activeChat.online
                  ? "Online now"
                  : activeChat.subtitle}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 text-sm text-white/45">
          <button className="rounded-xl px-3 py-2 transition hover:bg-white/5 hover:text-white">Search</button>
          <button className="rounded-xl px-3 py-2 transition hover:bg-white/5 hover:text-white">Files</button>
          <button className="rounded-xl px-3 py-2 transition hover:bg-white/5 hover:text-white">More</button>
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4 chat-scrollbar">
        <div className="space-y-4">
          {messages.map((message) => (
            <MessageBubble
              key={message.id}
              message={message}
            />
          ))}
        </div>
      </div>

      <MessageComposer placeholder={`Message ${activeChat.name}`} />
    </div>
  );
}
