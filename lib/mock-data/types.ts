export type UserRole = "Employee" | "Admin";

export type Department = {
  name: string;
  channels: {
    announcements: string[];
    general: string[];
    discussions: string[];
    privateGroups: string[];
  };
};

export type ChatType = "dm" | "group";

export type MessageContentType = "text" | "poll" | "file" | "link" | "system";

export type SourceType = "feed" | "dm" | "group" | "department";
export type VoteVisibility = "public" | "anonymous";

export type PollVoter = {
  id: string;
  name: string;
};

export type PollOptionItem = {
  label: string;
  votes: number;
  percent: number;
  voters?: PollVoter[];
};

export type EmbeddedPoll = {
  question: string;
  totalVotes: number;
  voteVisibility: VoteVisibility;
  sourceType: SourceType;
  sourceName: string;
  options: PollOptionItem[];
};

export type ChatMessage = {
  id: string;
  sender: string;
  mine: boolean;
  time: string;
  type: MessageContentType;
  text?: string;
  file?: {
    name: string;
    size: string;
  };
  link?: {
    title: string;
    url: string;
  };
  poll?: EmbeddedPoll;
  replyTo?: {
    sender: string;
    text: string;
  };
};

export type ChatMember = {
  slug: string;
  name: string;
  role: string;
  online?: boolean;
};

export type ChatThread = {
  slug: string;
  type: ChatType;
  name: string;
  subtitle: string;
  avatarLabel?: string;
  online?: boolean;
  unread: number;
  time: string;
  lastMessage: string;
  members?: ChatMember[];
  messages: ChatMessage[];
};

export type ActivePoll = {
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
  voteVisibility: VoteVisibility;
  options: PollOptionItem[];
};

export type ClosedPoll = {
  id: number;
  title: string;
  meta: string;
  totalVotes: number;
  sourceType: SourceType;
  sourceName: string;
  voteVisibility: VoteVisibility;
  options: PollOptionItem[];
};
