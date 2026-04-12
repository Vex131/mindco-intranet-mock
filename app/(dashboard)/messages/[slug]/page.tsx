import {directMessages} from "@/lib/mockData";
import EmptyState from "@/components/ui/EmptyState";

type MessagePageProps = {
  params: Promise<{slug: string}>;
};

export default async function MessageThreadPage({params}: MessagePageProps) {
  const {slug} = await params;

  const activeChat = directMessages.find((person) => person.slug === slug);

  if (!activeChat) {
    return (
      <EmptyState
        title="Conversation not found"
        description="This direct message thread could not be found. Try selecting a different conversation from the messages sidebar."
      />
    );
  }

  return (
    <div className="space-y-6">
      <section className="rounded-[24px] border border-white/10 bg-[#1A1A1A] p-6">
        <p className="text-sm uppercase tracking-[0.2em] text-[#2EC4B6]">Communication</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Direct Messages</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">
          View direct conversations, recent messages, and private workplace chats.
        </p>
      </section>

      <section className="rounded-[24px] border border-white/10 bg-[#1A1A1A] p-6">
        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <div className="relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3FA7D6] text-sm font-medium text-white">
              {activeChat.name.charAt(0)}
            </div>
            {activeChat.online ? (
              <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border border-[#1A1A1A] bg-[#2EC4B6]" />
            ) : null}
          </div>

          <div>
            <p className="text-sm font-medium text-white">{activeChat.name}</p>
            <p className="text-xs text-white/45">{activeChat.role}</p>
          </div>
        </div>

        <div className="space-y-4 py-5">
          {activeChat.conversation.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.mine ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[70%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                  message.mine ? "bg-[#3FA7D6]/20 text-white" : "bg-black/20 text-white/85"
                }`}
              >
                <p>{message.text}</p>
                <p className="mt-2 text-[11px] text-white/40">{message.meta}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-4">
          <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/35">
            Write a message...
          </div>
        </div>
      </section>
    </div>
  );
}
