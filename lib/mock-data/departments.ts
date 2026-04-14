import type {Department} from "./types";

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
