import type {ActivePoll, ClosedPoll} from "./types";

export const activePolls: ActivePoll[] = [
  {
    id: 1,
    title: "What time should the Q2 town hall start?",
    description:
      "HR is finalizing the all-hands schedule for next Thursday. Vote for the time that works best for your team.",
    status: "Closing soon",
    totalVotes: 9,
    closesIn: "Closes today • 5:00 PM",
    author: "HR",
    sourceType: "feed",
    sourceName: "HR Announcements",
    voteVisibility: "public",
    options: [
      {
        label: "9:00 AM",
        votes: 3,
        percent: 33,
        voters: [
          {id: "u1", name: "Aisha"},
          {id: "u2", name: "Ibrahim"},
          {id: "u3", name: "Riyaz"},
        ],
      },
      {
        label: "11:00 AM",
        votes: 4,
        percent: 44,
        voters: [
          {id: "u4", name: "Sara"},
          {id: "u5", name: "Fathimath"},
          {id: "u6", name: "Alex Jordan"},
          {id: "u7", name: "Sana Rafi"},
        ],
      },
      {
        label: "2:00 PM",
        votes: 2,
        percent: 22,
        voters: [
          {id: "u8", name: "Naavil"},
          {id: "u9", name: "Ameen"},
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Who can attend the Friday team lunch?",
    description: "This is a planning poll, so voter names are visible to help finalize the booking.",
    status: "Open",
    totalVotes: 4,
    closesIn: "2 days left",
    author: "Sara",
    sourceType: "dm",
    sourceName: "Direct Message",
    voteVisibility: "public",
    options: [
      {
        label: "Attending",
        votes: 2,
        percent: 50,
        voters: [
          {id: "u8", name: "Naavil"},
          {id: "u4", name: "Sara"},
        ],
      },
      {
        label: "Not attending",
        votes: 1,
        percent: 25,
        voters: [{id: "u10", name: "Riyaz"}],
      },
      {
        label: "Not sure yet",
        votes: 1,
        percent: 25,
        voters: [{id: "u11", name: "Aisha"}],
      },
    ],
  },
  {
    id: 3,
    title: "Who should represent the group in the planning committee?",
    description: "This vote is anonymous because it is selecting a representative role.",
    status: "Open",
    totalVotes: 10,
    closesIn: "4 days left",
    author: "Sana Rafi",
    sourceType: "group",
    sourceName: "Private Group",
    voteVisibility: "anonymous",
    options: [
      {label: "Alex Jordan", votes: 5, percent: 50},
      {label: "Sana Rafi", votes: 3, percent: 30},
      {label: "Ibrahim", votes: 2, percent: 20},
    ],
  },
  {
    id: 4,
    title: "Preferred release review window?",
    description: "Engineering leads are aligning on a review window for the next release cycle.",
    status: "Open",
    totalVotes: 6,
    closesIn: "1 day left",
    author: "Engineering Leads",
    sourceType: "department",
    sourceName: "Engineering",
    voteVisibility: "public",
    options: [
      {
        label: "Tuesday morning",
        votes: 2,
        percent: 33,
        voters: [
          {id: "u12", name: "Ibrahim"},
          {id: "u13", name: "Alex Jordan"},
        ],
      },
      {
        label: "Wednesday afternoon",
        votes: 3,
        percent: 50,
        voters: [
          {id: "u14", name: "Riyaz"},
          {id: "u15", name: "Fathimath"},
          {id: "u16", name: "Aisha"},
        ],
      },
      {
        label: "Friday morning",
        votes: 1,
        percent: 17,
        voters: [{id: "u17", name: "Naavil"}],
      },
    ],
  },
];

export const closedPolls: ClosedPoll[] = [
  {
    id: 5,
    title: "Which retro format should we use next sprint?",
    meta: "Closed yesterday • 5 votes",
    totalVotes: 5,
    sourceType: "department",
    sourceName: "Engineering",
    voteVisibility: "public",
    options: [
      {
        label: "Roundtable",
        votes: 2,
        percent: 40,
        voters: [
          {id: "u12", name: "Ibrahim"},
          {id: "u18", name: "Alex Jordan"},
        ],
      },
      {
        label: "Silent notes",
        votes: 2,
        percent: 40,
        voters: [
          {id: "u14", name: "Riyaz"},
          {id: "u17", name: "Naavil"},
        ],
      },
      {
        label: "Start / Stop / Continue",
        votes: 1,
        percent: 20,
        voters: [{id: "u16", name: "Aisha"}],
      },
    ],
  },
  {
    id: 6,
    title: "Best topic for the next wellness session?",
    meta: "Closed 2 days ago • 8 votes",
    totalVotes: 8,
    sourceType: "group",
    sourceName: "Private Group",
    voteVisibility: "anonymous",
    options: [
      {label: "Stress management", votes: 4, percent: 50},
      {label: "Ergonomics at work", votes: 2, percent: 25},
      {label: "Sleep and recovery", votes: 2, percent: 25},
    ],
  },
];
