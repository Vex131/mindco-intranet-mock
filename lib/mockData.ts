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

export const departments: Department[] = [
  {
    name: "HR",
    channels: {
      announcements: ["policy-updates", "leave-notices"],
      general: ["general", "team-chat"],
      discussions: ["hiring-discussion", "wellbeing"],
      privateGroups: ["hr-leads", "recruitment-panel"],
    },
  },
  {
    name: "Engineering",
    channels: {
      announcements: ["release-notes", "platform-updates"],
      general: ["general", "frontend", "backend"],
      discussions: ["architecture", "qa-discussion"],
      privateGroups: ["tech-leads", "api-review"],
    },
  },
  {
    name: "Finance",
    channels: {
      announcements: ["budget-updates", "approvals"],
      general: ["general", "team-chat"],
      discussions: ["forecasting", "monthly-close"],
      privateGroups: ["finance-leads", "payroll-review"],
    },
  },
  {
    name: "Marketing",
    channels: {
      announcements: ["campaign-launches", "brand-updates"],
      general: ["general", "content-team"],
      discussions: ["social-strategy", "creative-review"],
      privateGroups: ["marketing-leads", "campaign-ops"],
    },
  },
];

export const pinnedNotices = [
  {
    title: "Policy update review",
    meta: "HR • Requires acknowledgment",
  },
  {
    title: "Office maintenance schedule",
    meta: "Admin • Tomorrow",
  },
  {
    title: "Town hall attendance reminder",
    meta: "Leadership • Friday",
  },
];

export const activePolls = [
  {
    title: "Town hall preferred time?",
    meta: "42 votes",
  },
  {
    title: "Team lunch this Friday?",
    meta: "18 votes",
  },
  {
    title: "New onboarding format feedback?",
    meta: "27 votes",
  },
];

export const upcomingEvents = [
  "Leadership sync • 10:30 AM",
  "Recruitment review • 1:00 PM",
  "Wellness session • 4:00 PM",
  "Marketing launch prep • Tomorrow",
];

export const departmentMessages = {
  HR: [
    "New leave policy draft shared for review.",
    "Reminder: onboarding checklist updates due today.",
    "Recruitment panel meeting moved to 2:30 PM.",
  ],
  Engineering: [
    "Frontend team posted the updated dashboard mockups.",
    "Backend API review scheduled after lunch.",
    "Bug triage for sprint 14 starts at 3:00 PM.",
  ],
  Finance: [
    "Budget variance summary uploaded this morning.",
    "Monthly close preparation has started.",
    "Expense approval window ends at 5:00 PM.",
  ],
  Marketing: [
    "Campaign preview deck is ready for comments.",
    "Creative review moved to Thursday morning.",
    "Social media content plan published.",
  ],
};

export const directMessages = [
  {
    slug: "aisha",
    name: "Aisha",
    role: "Marketing Lead",
    lastMessage: "Can you review the campaign preview before 3 PM?",
    time: "2m",
    unread: 2,
    online: true,
    conversation: [
      {
        sender: "Aisha",
        text: "Can you review the campaign preview before 3 PM?",
        meta: "9:42 AM",
        mine: false,
      },
      {
        sender: "You",
        text: "Yes, I’ll take a look after the dashboard updates.",
        meta: "9:44 AM",
        mine: true,
      },
      {
        sender: "Aisha",
        text: "Perfect. I also added a few new images for the gallery section.",
        meta: "9:45 AM",
        mine: false,
      },
      {
        sender: "You",
        text: "Great, that should help make the demo feel fuller.",
        meta: "9:47 AM",
        mine: true,
      },
    ],
  },
  {
    slug: "ibrahim",
    name: "Ibrahim",
    role: "Frontend Engineer",
    lastMessage: "I pushed the updated layout adjustments.",
    time: "14m",
    unread: 0,
    online: true,
    conversation: [
      {
        sender: "Ibrahim",
        text: "I pushed the updated layout adjustments.",
        meta: "8:10 AM",
        mine: false,
      },
      {
        sender: "You",
        text: "Nice. I’ll check the spacing and sidebar widths next.",
        meta: "8:14 AM",
        mine: true,
      },
      {
        sender: "Ibrahim",
        text: "The compact version should feel better on desktop now.",
        meta: "8:16 AM",
        mine: false,
      },
    ],
  },
  {
    slug: "sara",
    name: "Sara",
    role: "HR Manager",
    lastMessage: "Please check the onboarding poll draft.",
    time: "1h",
    unread: 1,
    online: false,
    conversation: [
      {
        sender: "Sara",
        text: "Please check the onboarding poll draft.",
        meta: "Yesterday • 4:10 PM",
        mine: false,
      },
      {
        sender: "You",
        text: "I’ll review the wording and visibility options.",
        meta: "Yesterday • 4:18 PM",
        mine: true,
      },
    ],
  },
  {
    slug: "riyaz",
    name: "Riyaz",
    role: "Finance Analyst",
    lastMessage: "Budget notes are ready for review.",
    time: "3h",
    unread: 0,
    online: false,
    conversation: [
      {
        sender: "Riyaz",
        text: "Budget notes are ready for review.",
        meta: "11:00 AM",
        mine: false,
      },
      {
        sender: "You",
        text: "Thanks. I’ll go through them after lunch.",
        meta: "11:08 AM",
        mine: true,
      },
    ],
  },
  {
    slug: "fathimath",
    name: "Fathimath",
    role: "Operations Coordinator",
    lastMessage: "Let’s confirm the town hall logistics.",
    time: "Yesterday",
    unread: 0,
    online: true,
    conversation: [
      {
        sender: "Fathimath",
        text: "Let’s confirm the town hall logistics.",
        meta: "Yesterday • 10:12 AM",
        mine: false,
      },
      {
        sender: "You",
        text: "Yes, I’ll sync with HR and Marketing.",
        meta: "Yesterday • 10:20 AM",
        mine: true,
      },
    ],
  },
];

export const departmentChannelContent = {
  hr: {
    "policy-updates": {
      title: "Policy Updates",
      description: "Official HR policy announcements and employee notices.",
      posts: [
        {
          title: "Updated leave policy published",
          meta: "HR • 2 hours ago",
          body: "Employees are encouraged to review the revised annual leave and emergency leave policy by Friday.",
        },
        {
          title: "Remote work guidance refreshed",
          meta: "HR • Yesterday",
          body: "The hybrid attendance and remote work guidance has been updated for department managers.",
        },
      ],
    },
    "leave-notices": {
      title: "Leave Notices",
      description: "Leave schedules, holiday updates, and absence reminders.",
      posts: [
        {
          title: "Public holiday office closure reminder",
          meta: "HR • Today",
          body: "The office will remain closed next Monday for the national holiday.",
        },
        {
          title: "Team leave planning reminder",
          meta: "HR • This week",
          body: "Please coordinate leave requests early to avoid scheduling conflicts.",
        },
      ],
    },
    general: {
      title: "General",
      description: "General HR communication and day-to-day updates.",
      posts: [
        {
          title: "Welcome our new onboarding coordinator",
          meta: "HR Team • Today",
          body: "Please welcome Mariyam, who joins the onboarding team this week.",
        },
        {
          title: "Weekly HR sync notes uploaded",
          meta: "HR Team • Yesterday",
          body: "The latest meeting notes are now available for internal review.",
        },
      ],
    },
    "team-chat": {
      title: "Team Chat",
      description: "Internal HR team conversation and quick updates.",
      posts: [
        {
          title: "Recruitment panel moved to 2:30 PM",
          meta: "Sara • 1 hour ago",
          body: "Please adjust your calendars accordingly.",
        },
      ],
    },
    "hiring-discussion": {
      title: "Hiring Discussion",
      description: "Recruitment pipeline and candidate review discussion.",
      posts: [
        {
          title: "Engineering shortlist ready",
          meta: "Recruitment Panel • Today",
          body: "Candidate shortlist for the frontend role is ready for review.",
        },
      ],
    },
    wellbeing: {
      title: "Wellbeing",
      description: "Employee wellbeing and workplace support discussions.",
      posts: [
        {
          title: "Wellness session next Thursday",
          meta: "HR • Today",
          body: "The monthly wellness support session is scheduled for next Thursday at 4 PM.",
        },
      ],
    },
    "hr-leads": {
      title: "HR Leads",
      description: "Private coordination space for HR leads.",
      posts: [
        {
          title: "Policy approval workflow review",
          meta: "Private Group • Today",
          body: "Final review of policy publishing steps is pending leadership sign-off.",
        },
      ],
    },
    "recruitment-panel": {
      title: "Recruitment Panel",
      description: "Private hiring and interview review group.",
      posts: [
        {
          title: "Interview feedback round open",
          meta: "Private Group • Today",
          body: "Please complete scorecards for the shortlisted candidates before 5 PM.",
        },
      ],
    },
  },

  engineering: {
    "release-notes": {
      title: "Release Notes",
      description: "Engineering release summaries and updates.",
      posts: [
        {
          title: "Dashboard shell v2 deployed to mock demo",
          meta: "Engineering • Today",
          body: "The updated layout structure, compact sidebar, and route-aware submenus are now in the latest build.",
        },
        {
          title: "Responsive spacing adjustments shipped",
          meta: "Frontend Team • Yesterday",
          body: "Card density and nav sizing were reduced for a more balanced interface.",
        },
      ],
    },
    "platform-updates": {
      title: "Platform Updates",
      description: "Platform and infra changes affecting teams.",
      posts: [
        {
          title: "Search component iteration in progress",
          meta: "Platform Team • Today",
          body: "Search bar interaction and placeholder state are being refined.",
        },
      ],
    },
    general: {
      title: "General",
      description: "General engineering updates and team communication.",
      posts: [
        {
          title: "Sprint 14 standup notes available",
          meta: "Engineering • Today",
          body: "The sprint board review summary is now available for the team.",
        },
      ],
    },
    frontend: {
      title: "Frontend",
      description: "Frontend-specific conversation and UI work.",
      posts: [
        {
          title: "Compact interface pass completed",
          meta: "Ibrahim • 1 hour ago",
          body: "Sidebar widths, header density, and department channel sizing have been tightened up.",
        },
      ],
    },
    backend: {
      title: "Backend",
      description: "Backend planning, API notes, and system work.",
      posts: [
        {
          title: "Mock API data shape reviewed",
          meta: "Backend Team • Today",
          body: "The frontend mock data structure was reviewed for future API alignment.",
        },
      ],
    },
    architecture: {
      title: "Architecture",
      description: "System design and structural discussions.",
      posts: [
        {
          title: "Department/channel route model approved",
          meta: "Tech Leads • Today",
          body: "Department content will now use contextual routes for better navigation clarity.",
        },
      ],
    },
    "qa-discussion": {
      title: "QA Discussion",
      description: "Bug triage and QA coordination.",
      posts: [
        {
          title: "UI overflow issues tracked",
          meta: "QA Team • Today",
          body: "Sidebar density and responsive width issues are under review.",
        },
      ],
    },
    "tech-leads": {
      title: "Tech Leads",
      description: "Private coordination for technical leads.",
      posts: [
        {
          title: "Internal review before showcase",
          meta: "Private Group • Today",
          body: "Please review navigation coherence before the next demo walkthrough.",
        },
      ],
    },
    "api-review": {
      title: "API Review",
      description: "Private API and integration review space.",
      posts: [
        {
          title: "Future backend integration notes added",
          meta: "Private Group • Today",
          body: "Frontend route structure has been aligned with future API expectations.",
        },
      ],
    },
  },

  finance: {
    "budget-updates": {
      title: "Budget Updates",
      description: "Budgeting and financial update notices.",
      posts: [
        {
          title: "Monthly budget summary published",
          meta: "Finance • Today",
          body: "The latest budget overview is available for department leads.",
        },
      ],
    },
    approvals: {
      title: "Approvals",
      description: "Approval requests and finance workflow notices.",
      posts: [
        {
          title: "Expense approval cutoff today",
          meta: "Finance • Today",
          body: "All pending expense requests should be submitted before 5 PM.",
        },
      ],
    },
    general: {
      title: "General",
      description: "General finance team updates and notices.",
      posts: [
        {
          title: "Weekly finance sync moved",
          meta: "Finance Team • Today",
          body: "The regular sync has been moved to 11:30 AM.",
        },
      ],
    },
    "team-chat": {
      title: "Team Chat",
      description: "Daily finance coordination and internal chat.",
      posts: [
        {
          title: "Forecasting workbook shared",
          meta: "Riyaz • 2 hours ago",
          body: "The new workbook has been uploaded for internal review.",
        },
      ],
    },
    forecasting: {
      title: "Forecasting",
      description: "Forecast planning and trend discussion.",
      posts: [
        {
          title: "Q3 forecast assumptions updated",
          meta: "Finance • Today",
          body: "Assumption set B is now the recommended forecast baseline.",
        },
      ],
    },
    "monthly-close": {
      title: "Monthly Close",
      description: "Month-end close process and updates.",
      posts: [
        {
          title: "Monthly close prep has started",
          meta: "Finance • Today",
          body: "Please finalize pending entries before end of day.",
        },
      ],
    },
    "finance-leads": {
      title: "Finance Leads",
      description: "Private coordination for finance leads.",
      posts: [
        {
          title: "Approval thresholds under review",
          meta: "Private Group • Today",
          body: "Leadership requested a review of approval boundaries for Q3.",
        },
      ],
    },
    "payroll-review": {
      title: "Payroll Review",
      description: "Private payroll review and approval work.",
      posts: [
        {
          title: "Payroll review checkpoint added",
          meta: "Private Group • Today",
          body: "Please verify payroll exceptions before tomorrow morning.",
        },
      ],
    },
  },

  marketing: {
    "campaign-launches": {
      title: "Campaign Launches",
      description: "Campaign rollout and launch communication.",
      posts: [
        {
          title: "Summer campaign preview published",
          meta: "Marketing • Today",
          body: "The first visual set is now available for internal feedback.",
        },
      ],
    },
    "brand-updates": {
      title: "Brand Updates",
      description: "Brand system and messaging changes.",
      posts: [
        {
          title: "Internal brand language refresh",
          meta: "Marketing • This week",
          body: "The updated brand tone guide has been shared with the content team.",
        },
      ],
    },
    general: {
      title: "General",
      description: "General team updates and daily communication.",
      posts: [
        {
          title: "Content planning session moved",
          meta: "Marketing • Today",
          body: "The weekly content planning session now starts at 2 PM.",
        },
      ],
    },
    "content-team": {
      title: "Content Team",
      description: "Content planning and editorial coordination.",
      posts: [
        {
          title: "Editorial calendar updated",
          meta: "Aisha • Today",
          body: "The draft editorial plan has been updated for next month.",
        },
      ],
    },
    "social-strategy": {
      title: "Social Strategy",
      description: "Social planning and engagement discussion.",
      posts: [
        {
          title: "Engagement review scheduled",
          meta: "Marketing • Tomorrow",
          body: "The social team review starts tomorrow at 10 AM.",
        },
      ],
    },
    "creative-review": {
      title: "Creative Review",
      description: "Creative work review and internal feedback.",
      posts: [
        {
          title: "Creative review deck uploaded",
          meta: "Marketing • Today",
          body: "The latest internal creative review deck is now available.",
        },
      ],
    },
    "marketing-leads": {
      title: "Marketing Leads",
      description: "Private coordination for marketing leads.",
      posts: [
        {
          title: "Campaign approval notes ready",
          meta: "Private Group • Today",
          body: "Leadership feedback has been summarized for final review.",
        },
      ],
    },
    "campaign-ops": {
      title: "Campaign Ops",
      description: "Private campaign operations coordination.",
      posts: [
        {
          title: "Launch schedule lock requested",
          meta: "Private Group • Today",
          body: "Please confirm the rollout window before end of day.",
        },
      ],
    },
  },
} as const;

export const globalUtilityData = {
  pinned: [
    {
      title: "Policy update review",
      meta: "HR • Requires acknowledgment",
    },
    {
      title: "Office maintenance schedule",
      meta: "Admin • Tomorrow",
    },
    {
      title: "Town hall attendance reminder",
      meta: "Leadership • Friday",
    },
  ],
  polls: [
    {
      title: "Town hall preferred time?",
      meta: "42 votes",
    },
    {
      title: "Team lunch this Friday?",
      meta: "18 votes",
    },
    {
      title: "New onboarding format feedback?",
      meta: "27 votes",
    },
  ],
  events: [
    "Leadership sync • 10:30 AM",
    "Recruitment review • 1:00 PM",
    "Wellness session • 4:00 PM",
    "Marketing launch prep • Tomorrow",
  ],
};

export const departmentUtilityData = {
  hr: {
    pinned: [
      {title: "Leave policy requires review", meta: "Pinned by HR"},
      {title: "Onboarding checklist update", meta: "Internal notice"},
    ],
    polls: [
      {title: "Preferred onboarding session day?", meta: "12 votes"},
      {title: "Wellness session topic selection", meta: "9 votes"},
    ],
    events: ["Recruitment review • 2:30 PM", "HR policy sync • Tomorrow"],
  },
  engineering: {
    pinned: [
      {title: "Mock UI review checklist", meta: "Pinned by Tech Leads"},
      {title: "Frontend spacing pass complete", meta: "Design system update"},
    ],
    polls: [
      {title: "Preferred release review window?", meta: "21 votes"},
      {title: "Adopt compact card density?", meta: "17 votes"},
    ],
    events: ["Sprint sync • 10:00 AM", "Architecture review • 3:00 PM"],
  },
  finance: {
    pinned: [
      {title: "Expense approvals due today", meta: "Finance notice"},
      {title: "Monthly close preparation ongoing", meta: "Pinned update"},
    ],
    polls: [
      {title: "Best budget review slot?", meta: "8 votes"},
      {title: "Forecast review format?", meta: "6 votes"},
    ],
    events: ["Budget review • 11:30 AM", "Payroll checkpoint • Tomorrow"],
  },
  marketing: {
    pinned: [
      {title: "Campaign preview deck ready", meta: "Pinned by Marketing"},
      {title: "Brand language refresh shared", meta: "Internal notice"},
    ],
    polls: [
      {title: "Preferred launch review timing?", meta: "14 votes"},
      {title: "Next social theme direction?", meta: "19 votes"},
    ],
    events: ["Creative review • 2:00 PM", "Launch planning • Tomorrow"],
  },
} as const;

export const directMessageUtilityData = {
  aisha: {
    role: "Marketing Lead",
    status: "Online now",
    sharedFiles: ["campaign-preview-v2.fig", "gallery-image-list.docx", "brand-review-notes.pdf"],
    recentMedia: ["Campaign image set", "Brand visual draft", "Gallery upload preview"],
  },
  ibrahim: {
    role: "Frontend Engineer",
    status: "Online now",
    sharedFiles: ["layout-adjustments.tsx", "sidebar-density-notes.md", "dashboard-shell-review.pdf"],
    recentMedia: ["Layout comparison image", "Spacing audit screenshot", "Component density preview"],
  },
  sara: {
    role: "HR Manager",
    status: "Away",
    sharedFiles: ["onboarding-poll-draft.docx", "leave-policy-summary.pdf", "employee-checklist.xlsx"],
    recentMedia: ["HR notice visual", "Onboarding slide snapshot", "Checklist preview"],
  },
  riyaz: {
    role: "Finance Analyst",
    status: "Offline",
    sharedFiles: ["budget-summary-q3.xlsx", "expense-review-notes.pdf", "forecast-comments.docx"],
    recentMedia: ["Budget chart export", "Forecast dashboard image", "Spreadsheet snapshot"],
  },
  fathimath: {
    role: "Operations Coordinator",
    status: "Online now",
    sharedFiles: ["townhall-logistics.docx", "venue-layout.pdf", "ops-checklist.xlsx"],
    recentMedia: ["Event layout image", "Venue preview", "Checklist visual"],
  },
} as const;

export const posts = [
  {
    slug: "campaign-preview-update",
    title: "Campaign preview update",
    author: "Aisha",
    authorRole: "Marketing Lead",
    type: "post",
    department: "marketing",
    channel: "campaign-launches",
    time: "35 minutes ago",
    summary:
      "We’ve uploaded the first draft of the summer campaign preview. Feedback is welcome before the review session tomorrow.",
    content:
      "We’ve uploaded the first draft of the summer campaign preview. The current version includes the revised hero layout, updated color treatment, and a first pass on gallery imagery. Please review the overall direction before the internal review session tomorrow afternoon.",
    reactions: "18 likes",
    commentsCount: 6,
    attachment: "campaign-preview-v2.fig",
    comments: [
      {
        author: "Naavil",
        role: "Product Designer",
        text: "The hierarchy feels much stronger now. The first visual block reads much better.",
        time: "22 minutes ago",
      },
      {
        author: "Ibrahim",
        role: "Frontend Engineer",
        text: "I think the compact card treatment would fit this direction nicely.",
        time: "18 minutes ago",
      },
      {
        author: "Sara",
        role: "HR Manager",
        text: "This looks clean. The gallery section will help the demo feel fuller too.",
        time: "11 minutes ago",
      },
    ],
  },
  {
    slug: "dashboard-layout-refresh",
    title: "Dashboard layout refresh",
    author: "Ibrahim",
    authorRole: "Frontend Engineer",
    type: "post",
    department: "engineering",
    channel: "frontend",
    time: "1 hour ago",
    summary:
      "The dashboard layout mock has been updated with better hierarchy and more breathing room. Please check the latest build.",
    content:
      "The dashboard layout mock has been updated with a more compact sidebar, cleaner content spacing, and contextual secondary menus for departments and direct messages. The goal was to improve organization while reducing the feeling of density across the UI.",
    reactions: "24 likes",
    commentsCount: 9,
    attachment: "layout-adjustments.tsx",
    comments: [
      {
        author: "Naavil",
        role: "Product Designer",
        text: "The smaller nav density is definitely better. The department submenu feels more controlled now.",
        time: "47 minutes ago",
      },
      {
        author: "Aisha",
        role: "Marketing Lead",
        text: "This feels much easier to scan.",
        time: "33 minutes ago",
      },
    ],
  },
  {
    slug: "monthly-budget-summary",
    title: "Monthly budget summary",
    author: "Finance Team",
    authorRole: "Department Team",
    type: "post",
    department: "finance",
    channel: "budget-updates",
    time: "3 hours ago",
    summary: "The monthly budget summary is now available for department heads. Approval reviews begin this afternoon.",
    content:
      "The latest monthly budget summary is now available for review. Department heads should check the updated category allocations and confirm pending approval items before this afternoon’s review window closes.",
    reactions: "11 likes",
    commentsCount: 4,
    attachment: "budget-summary-q3.xlsx",
    comments: [
      {
        author: "Riyaz",
        role: "Finance Analyst",
        text: "Please focus on the updated cost allocation notes in section three.",
        time: "2 hours ago",
      },
    ],
  },
  {
    slug: "leave-policy-update",
    title: "Updated leave policy published",
    author: "HR",
    authorRole: "Official Notice",
    type: "announcement",
    department: "hr",
    channel: "policy-updates",
    time: "2 hours ago",
    summary: "Employees are encouraged to review the revised annual leave and emergency leave policy by Friday.",
    content:
      "The updated annual leave and emergency leave policy has now been published. Employees should review the revised eligibility notes, updated approval process, and clarified scheduling guidance before Friday.",
    reactions: "32 acknowledgments",
    commentsCount: 3,
    attachment: "leave-policy-summary.pdf",
    comments: [
      {
        author: "Sara",
        role: "HR Manager",
        text: "Please direct questions to HR before the weekly policy session.",
        time: "1 hour ago",
      },
    ],
  },
  {
    slug: "remote-work-guidance-refresh",
    title: "Remote work guidance refreshed",
    author: "HR",
    authorRole: "Official Notice",
    type: "announcement",
    department: "hr",
    channel: "policy-updates",
    time: "Yesterday",
    summary: "The hybrid attendance and remote work guidance has been updated for department managers.",
    content:
      "The remote work and hybrid attendance guidance has been refreshed. Department managers should review the updated scheduling notes and escalation guidelines for attendance exceptions.",
    reactions: "14 acknowledgments",
    commentsCount: 2,
    attachment: "remote-work-guidance.pdf",
    comments: [
      {
        author: "Naavil",
        role: "Product Designer",
        text: "The manager-specific clarification is much clearer now.",
        time: "Yesterday",
      },
    ],
  },
  {
    slug: "engineering-release-summary",
    title: "Dashboard shell v2 deployed to mock demo",
    author: "Engineering",
    authorRole: "Release Notes",
    type: "post",
    department: "engineering",
    channel: "release-notes",
    time: "Today",
    summary: "The updated layout structure, compact sidebar, and route-aware submenus are now in the latest build.",
    content:
      "The latest demo build now includes a compacted navigation system, contextual submenus for departments and direct messages, and improved spacing across the interface. The goal is to make the app more organized and easier to scan.",
    reactions: "16 likes",
    commentsCount: 5,
    attachment: "release-summary-v2.md",
    comments: [
      {
        author: "Ibrahim",
        role: "Frontend Engineer",
        text: "This release mainly focused on navigation and density improvements.",
        time: "Today",
      },
    ],
  },
  {
    slug: "creative-review-deck-uploaded",
    title: "Creative review deck uploaded",
    author: "Marketing",
    authorRole: "Creative Review",
    type: "post",
    department: "marketing",
    channel: "creative-review",
    time: "Today",
    summary: "The latest internal creative review deck is now available for feedback.",
    content:
      "The latest internal creative review deck has been uploaded and is ready for comments before tomorrow’s review. Focus areas include visual consistency, campaign sequencing, and mobile presentation hierarchy.",
    reactions: "13 likes",
    commentsCount: 4,
    attachment: "creative-review-deck.pdf",
    comments: [
      {
        author: "Aisha",
        role: "Marketing Lead",
        text: "Please focus on slide flow and visual consistency.",
        time: "Today",
      },
    ],
  },
];

export const notifications = [
  {
    id: 1,
    type: "comment",
    title: "Aisha commented on Campaign preview update",
    description: "The hierarchy feels much stronger now. The first visual block reads much better.",
    time: "12 minutes ago",
    unread: true,
    href: "/posts/campaign-preview-update",
  },
  {
    id: 2,
    type: "announcement",
    title: "HR published Updated leave policy",
    description: "Employees are encouraged to review the revised annual leave and emergency leave policy by Friday.",
    time: "28 minutes ago",
    unread: true,
    href: "/posts/leave-policy-update",
  },
  {
    id: 3,
    type: "message",
    title: "You received a direct message from Sara",
    description: "Please check the onboarding poll draft.",
    time: "1 hour ago",
    unread: true,
    href: "/messages/sara",
  },
  {
    id: 4,
    type: "channel",
    title: "New activity in #frontend",
    description: "Ibrahim posted Dashboard layout refresh in Engineering.",
    time: "1 hour ago",
    unread: false,
    href: "/departments/engineering/frontend",
  },
  {
    id: 5,
    type: "poll",
    title: "Poll update: Town hall preferred time?",
    description: "42 votes so far. Results are visible after voting.",
    time: "2 hours ago",
    unread: false,
    href: "/polls",
  },
  {
    id: 6,
    type: "reaction",
    title: "Naavil reacted to Dashboard layout refresh",
    description: "Your post received new engagement from the team.",
    time: "3 hours ago",
    unread: false,
    href: "/posts/dashboard-layout-refresh",
  },
  {
    id: 7,
    type: "channel",
    title: "New activity in #policy-updates",
    description: "Remote work guidance refreshed was posted in HR.",
    time: "Yesterday",
    unread: false,
    href: "/departments/hr/policy-updates",
  },
  {
    id: 8,
    type: "message",
    title: "You received a direct message from Ibrahim",
    description: "I pushed the updated layout adjustments.",
    time: "Yesterday",
    unread: false,
    href: "/messages/ibrahim",
  },
];
