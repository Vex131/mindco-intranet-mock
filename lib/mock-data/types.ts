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
  poll?: {
    question: string;
    options: {label: string; votes: number}[];
    totalVotes: number;
  };
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
