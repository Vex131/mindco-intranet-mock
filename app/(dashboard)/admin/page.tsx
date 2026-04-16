"use client";

import {useMemo, useState} from "react";
import {useRole} from "@/components/providers/RoleProvider";

type Tone = "critical" | "warning" | "info" | "success" | "neutral";

type QueueItem = {
  title: string;
  meta: string;
  owner: string;
  priority: Tone;
  action: string;
};

type UserAccessItem = {
  name: string;
  role: string;
  department: string;
  status: string;
  risk: string;
};

type ApprovalVisibility = "Company-wide" | "Department";

type ApprovalItem = {
  title: string;
  kind: "Announcement" | "Poll";
  audience: ApprovalVisibility;
  department?: string;
  createdBy: string;
  reason: string;
};

type LogItem = {
  time: string;
  event: string;
  actor: string;
  detail: string;
};

type ReportItem = {
  subject: string;
  category: string;
  reporter: string;
  severity: Tone;
  status: string;
};

type PermissionItem = {
  role: string;
  members: number;
  access: string[];
};

type SettingsItem = {
  title: string;
  description: string;
  value: string;
};

type AdminSectionKey =
  | "overview"
  | "moderation"
  | "users"
  | "approvals"
  | "permissions"
  | "reports"
  | "logs"
  | "settings";

const adminStats = [
  {label: "Open moderation cases", value: "14", detail: "+4 since morning", tone: "critical" as Tone},
  {label: "Pending approvals", value: "9", detail: "3 high priority", tone: "warning" as Tone},
  {label: "Users needing review", value: "6", detail: "Role or status change", tone: "info" as Tone},
  {label: "Resolved today", value: "28", detail: "92% within SLA", tone: "success" as Tone},
];

const moderationQueue: QueueItem[] = [
  {
    title: "Flagged harassment comments in Engineering launch thread",
    meta: "3 comments • Feed moderation",
    owner: "Assigned to Community Admin",
    priority: "critical",
    action: "Review thread",
  },
  {
    title: "Multiple reports on anonymous poll misuse",
    meta: "Polls • 2 linked reports",
    owner: "Assigned to HR Ops",
    priority: "warning",
    action: "Audit poll",
  },
  {
    title: "Profile banner contains unapproved external branding",
    meta: "Directory profile • Design team",
    owner: "Assigned to Brand Admin",
    priority: "info",
    action: "Request change",
  },
  {
    title: "Potential spam invites in Marketing private group",
    meta: "Messages • 11 unusual invites",
    owner: "Assigned to Security Admin",
    priority: "warning",
    action: "Inspect activity",
  },
];

const userAccess: UserAccessItem[] = [
  {name: "Sara Ahmed", role: "HR Manager", department: "HR", status: "Active", risk: "Low"},
  {
    name: "Ibrahim Haleem",
    role: "Department Lead",
    department: "Engineering",
    status: "Role change pending",
    risk: "Medium",
  },
  {name: "Aisha Latheef", role: "Employee", department: "Marketing", status: "Pending activation", risk: "Low"},
  {name: "Riyaz Nashid", role: "Finance Analyst", department: "Finance", status: "Restricted", risk: "High"},
  {name: "Nadheeha Shareef", role: "Moderator", department: "Operations", status: "Active", risk: "Low"},
  {name: "Yumna Rasheed", role: "Content Admin", department: "Communications", status: "Suspended", risk: "High"},
];

const approvals: ApprovalItem[] = [
  {
    title: "Updated leave carry-forward policy",
    kind: "Announcement",
    audience: "Company-wide",
    createdBy: "People Ops",
    reason: "Needs final HR verification before being published to all employees.",
  },
  {
    title: "Office network maintenance notice",
    kind: "Announcement",
    audience: "Company-wide",
    createdBy: "IT Support",
    reason: "Requires final confirmation of downtime wording and distribution scope.",
  },
  {
    title: "Wellness week participation poll",
    kind: "Poll",
    audience: "Department",
    department: "HR",
    createdBy: "HR Team",
    reason: "Needs a final check on audience targeting and poll response settings before release.",
  },
  {
    title: "Q2 all-hands reminder banner",
    kind: "Announcement",
    audience: "Company-wide",
    createdBy: "Admin Office",
    reason: "Waiting for final wording approval and homepage placement confirmation.",
  },
  {
    title: "Engineering retrospective participation poll",
    kind: "Poll",
    audience: "Department",
    department: "Engineering",
    createdBy: "Engineering Lead",
    reason: "Needs approval to confirm this should only be visible to Engineering staff.",
  },
  {
    title: "Finance compliance briefing notice",
    kind: "Announcement",
    audience: "Department",
    department: "Finance",
    createdBy: "Finance Manager",
    reason: "Requires verification of department scope and final compliance wording.",
  },
];

const reports: ReportItem[] = [
  {
    subject: "Anonymous reply abuse in policy discussion",
    category: "Harassment",
    reporter: "3 employees",
    severity: "critical",
    status: "Escalated",
  },
  {
    subject: "Repeated off-topic posting in Finance space",
    category: "Spam",
    reporter: "Finance Moderator",
    severity: "warning",
    status: "Open",
  },
  {
    subject: "Inappropriate meme upload in gallery",
    category: "Media violation",
    reporter: "HR Reviewer",
    severity: "warning",
    status: "Under review",
  },
  {
    subject: "Fake profile impersonating department head",
    category: "Account misuse",
    reporter: "Security Admin",
    severity: "critical",
    status: "Restricted",
  },
];

const permissions: PermissionItem[] = [
  {
    role: "Admin",
    members: 4,
    access: ["Full workspace control", "Role assignment", "Audit export", "Global moderation"],
  },
  {
    role: "Moderator",
    members: 11,
    access: ["Review reports", "Hide content", "Lock comments", "Escalate cases"],
  },
  {
    role: "HR Manager",
    members: 7,
    access: ["Post official notices", "Publish polls", "Review employee reports"],
  },
  {
    role: "Department Lead",
    members: 15,
    access: ["Manage team channels", "Approve local posts", "Pin updates"],
  },
];

const settingsItems: SettingsItem[] = [
  {
    title: "Content approval mode",
    description: "Require approval before official notices go live.",
    value: "Enabled",
  },
  {
    title: "Anonymous poll visibility",
    description: "Only HR and Admin can view named responses on protected polls.",
    value: "Restricted",
  },
  {
    title: "External media uploads",
    description: "Control whether users can upload external banners and assets.",
    value: "Limited",
  },
  {
    title: "Audit retention",
    description: "Store moderation and admin actions for compliance review.",
    value: "180 days",
  },
];

const activityLog: LogItem[] = [
  {
    time: "09:42",
    event: "Comment thread locked",
    actor: "Nadheeha Shareef",
    detail: "Locked replies on the benefits FAQ announcement after repeated duplicate questions.",
  },
  {
    time: "09:18",
    event: "Role updated",
    actor: "Sara Ahmed",
    detail: "Granted Department Lead permissions for Ibrahim Haleem pending final admin confirmation.",
  },
  {
    time: "08:57",
    event: "Notice approved",
    actor: "System Admin",
    detail: "Approved network maintenance notice for scheduled release tomorrow morning.",
  },
  {
    time: "08:21",
    event: "User restricted",
    actor: "Security Admin",
    detail: "Applied temporary messaging restriction after suspected bulk invite abuse.",
  },
  {
    time: "07:54",
    event: "Media upload removed",
    actor: "Brand Admin",
    detail: "Removed non-compliant promotional artwork from the gallery queue.",
  },
];

const adminMenu: {key: AdminSectionKey; label: string; hint: string}[] = [
  {key: "overview", label: "Overview", hint: "Summary and actions"},
  {key: "moderation", label: "Moderation", hint: "Cases and content review"},
  {key: "users", label: "Users", hint: "Access and enforcement"},
  {key: "approvals", label: "Approvals", hint: "Publishing pipeline"},
  {key: "permissions", label: "Roles & permissions", hint: "Access rules"},
  {key: "reports", label: "Reports", hint: "Incidents and escalations"},
  {key: "logs", label: "Audit logs", hint: "Admin activity trail"},
  {key: "settings", label: "Settings", hint: "Platform controls"},
];

function toneClasses(tone: Tone) {
  switch (tone) {
    case "critical":
      return "border-[#ff6b7a]/30 bg-[#ff6b7a]/10 text-[#ffb3bf]";
    case "warning":
      return "border-[#ffb86b]/30 bg-[#ffb86b]/10 text-[#ffd6a4]";
    case "success":
      return "border-[#4ce0b3]/30 bg-[#4ce0b3]/10 text-[#9ff1d8]";
    case "info":
      return "border-[#7c6cff]/30 bg-[#7c6cff]/10 text-[#c8c1ff]";
    default:
      return "border-white/10 bg-white/5 text-white/70";
  }
}

function StatusPill({label, tone}: {label: string; tone: Tone}) {
  return <span className={`rounded-full border px-3 py-1 text-[11px] font-medium ${toneClasses(tone)}`}>{label}</span>;
}

function RiskText({risk}: {risk: string}) {
  return (
    <span className={risk === "High" ? "text-[#ffb3bf]" : risk === "Medium" ? "text-[#ffd6a4]" : "text-[#9ff1d8]"}>
      {risk}
    </span>
  );
}

function SectionCard({title, description, actionLabel}: {title: string; description?: string; actionLabel?: string}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/[0.035] p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-sm font-medium text-white">{title}</h3>
          {description ? <p className="mt-2 text-sm leading-6 text-white/55">{description}</p> : null}
        </div>
        {actionLabel ? (
          <button className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-white/75">
            {actionLabel}
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default function AdminPage() {
  const {role} = useRole();
  const [activeSection, setActiveSection] = useState<AdminSectionKey>("overview");

  const currentSectionMeta = useMemo(() => adminMenu.find((item) => item.key === activeSection), [activeSection]);

  if (role !== "Admin") {
    return (
      <div className="h-full min-h-0 overflow-y-auto pr-2 chat-scrollbar">
        <div className="space-y-8 pb-6">
          <section className="rounded-[24px] mindco-panel p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-[#FF7D90]">Restricted</p>
            <h1 className="mt-3 text-3xl font-semibold text-white">Admin access required</h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">
              This workspace is only available to administrators. Switch the account type to Admin to review the full
              mock control center, moderation tools, user controls, publishing menus, permissions, and audit workflows.
            </p>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full min-h-0 overflow-y-auto pr-2 chat-scrollbar">
      <div className="grid min-h-full gap-6 pb-6 xl:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="rounded-[28px] mindco-panel p-4 lg:p-5 xl:sticky xl:top-0 xl:h-fit">
          <div className="rounded-[24px] border border-white/10 bg-white/[0.035] p-4">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#ffb3bf]">Admin workspace</p>
            <h2 className="mt-2 text-lg font-semibold text-white">Control panel</h2>
            <p className="mt-2 text-sm leading-6 text-white/55">
              Centralized mock interface for moderation, user governance, publishing, and compliance.
            </p>
          </div>
          <nav className="mt-4 space-y-2">
            {adminMenu.map((item) => {
              const isActive = item.key === activeSection;

              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActiveSection(item.key)}
                  className={`w-full rounded-[22px] border px-4 py-3 text-left transition ${
                    isActive
                      ? "border-[#7c6cff]/30 bg-[#7c6cff]/10"
                      : "border-white/10 bg-white/[0.03] hover:bg-white/[0.05]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className={`text-sm font-medium ${isActive ? "text-white" : "text-white/80"}`}>
                      {item.label}
                    </span>
                    {isActive ? (
                      <span className="rounded-full border border-[#7c6cff]/30 bg-[#7c6cff]/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.14em] text-[#c8c1ff]">
                        Open
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1 text-xs text-white/45">{item.hint}</p>
                </button>
              );
            })}
          </nav>
        </aside>

        <main className="space-y-6">
          <section className="rounded-[28px] mindco-panel p-6 lg:p-7">
            <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-[#ff6b7a]/30 bg-[#ff6b7a]/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[#ffb3bf]">
                    Administration
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/50">
                    {currentSectionMeta?.label}
                  </span>
                </div>

                <h1 className="mt-4 text-3xl font-semibold text-white lg:text-4xl">
                  Admin controls and moderation panel
                </h1>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60">
                  Manage internal safety, access control, publishing workflows, reports, and policy enforcement from a
                  structured admin interface built for mock workplace operations.
                </p>
              </div>
            </div>
          </section>

          {activeSection === "overview" ? (
            <>
              <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {adminStats.map((item) => (
                  <article
                    key={item.label}
                    className="rounded-[24px] mindco-panel p-5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-2xl font-semibold text-white">{item.value}</p>
                        <p className="mt-2 text-sm text-white/55">{item.label}</p>
                      </div>
                      <StatusPill
                        label={
                          item.tone === "critical"
                            ? "Urgent"
                            : item.tone === "warning"
                              ? "Attention"
                              : item.tone === "success"
                                ? "Healthy"
                                : "Active"
                        }
                        tone={item.tone}
                      />
                    </div>
                    <p className="mt-4 text-xs uppercase tracking-[0.18em] text-white/35">{item.detail}</p>
                  </article>
                ))}
              </section>

              <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-[28px] mindco-panel p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h2 className="text-lg font-semibold text-white">Priority moderation queue</h2>
                      <p className="mt-1 text-sm text-white/50">Items needing direct admin attention.</p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/55">
                      14 active
                    </span>
                  </div>

                  <div className="mt-5 space-y-4">
                    {moderationQueue.slice(0, 3).map((item) => (
                      <article
                        key={item.title}
                        className="rounded-[24px] border border-white/10 bg-white/[0.035] p-4"
                      >
                        <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <StatusPill
                                label={
                                  item.priority === "critical"
                                    ? "Critical"
                                    : item.priority === "warning"
                                      ? "High priority"
                                      : "Under review"
                                }
                                tone={item.priority}
                              />
                              <span className="text-xs uppercase tracking-[0.16em] text-white/35">{item.meta}</span>
                            </div>
                            <h3 className="mt-3 text-sm font-medium text-white">{item.title}</h3>
                            <p className="mt-2 text-sm text-white/50">{item.owner}</p>
                          </div>
                          <button className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/75">
                            {item.action}
                          </button>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="rounded-[28px] mindco-panel p-6">
                  <h2 className="text-lg font-semibold text-white">Today’s admin focus</h2>
                  <p className="mt-1 text-sm text-white/50">
                    Key items needing follow-up across moderation, publishing, and access control.
                  </p>

                  <div className="mt-5 space-y-4">
                    <div className="rounded-[24px] border border-white/10 bg-white/[0.035] p-4">
                      <p className="text-sm font-medium text-white">2 critical moderation escalations</p>
                      <p className="mt-2 text-sm leading-6 text-white/55">
                        Harassment reports and account misuse cases should be reviewed before the next internal update
                        cycle.
                      </p>
                    </div>

                    <div className="rounded-[24px] border border-white/10 bg-white/[0.035] p-4">
                      <p className="text-sm font-medium text-white">3 approvals waiting for release confirmation</p>
                      <p className="mt-2 text-sm leading-6 text-white/55">
                        HR and IT notices are prepared, but still need final approval before publishing.
                      </p>
                    </div>

                    <div className="rounded-[24px] border border-white/10 bg-white/[0.035] p-4">
                      <p className="text-sm font-medium text-white">1 high-risk account restriction under review</p>
                      <p className="mt-2 text-sm leading-6 text-white/55">
                        A restricted user case requires final admin confirmation and audit note completion.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </>
          ) : null}

          {activeSection === "moderation" ? (
            <section className="rounded-[28px] mindco-panel p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-white">Moderation queue</h2>
                  <p className="mt-1 text-sm text-white/50">
                    Reported content, behavior issues, and admin review actions.
                  </p>
                </div>
                <button className="rounded-2xl mindco-button px-4 py-3 text-sm font-medium text-white">
                  Bulk review
                </button>
              </div>

              <div className="mt-5 space-y-4">
                {moderationQueue.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[24px] border border-white/10 bg-white/[0.035] p-4"
                  >
                    <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <StatusPill
                            label={
                              item.priority === "critical"
                                ? "Critical"
                                : item.priority === "warning"
                                  ? "High priority"
                                  : "Under review"
                            }
                            tone={item.priority}
                          />
                          <span className="text-xs uppercase tracking-[0.16em] text-white/35">{item.meta}</span>
                        </div>
                        <h3 className="mt-3 text-base font-medium text-white">{item.title}</h3>
                        <p className="mt-2 text-sm text-white/55">{item.owner}</p>
                      </div>

                      <div className="grid gap-2 sm:grid-cols-3">
                        <button className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/75">
                          {item.action}
                        </button>
                        <button className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/75">
                          Hide content
                        </button>
                        <button className="rounded-2xl border border-[#ff6b7a]/20 bg-[#ff6b7a]/10 px-4 py-2 text-sm text-[#ffb3bf]">
                          Escalate
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          {activeSection === "users" ? (
            <section className="rounded-[28px] mindco-panel p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-white">User management</h2>
                  <p className="mt-1 text-sm text-white/50">
                    Review activations, restrictions, role changes, and trust risk.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button className="rounded-2xl mindco-button px-4 py-3 text-sm font-medium text-white">
                    Add user
                  </button>
                  <button className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/75">
                    Invite batch
                  </button>
                </div>
              </div>

              <div className="mt-5 overflow-hidden rounded-[24px] border border-white/10">
                <div className="grid grid-cols-[1.2fr_1fr_0.9fr_1fr_0.7fr_1fr] gap-4 bg-white/5 px-5 py-3 text-[11px] uppercase tracking-[0.18em] text-white/35">
                  <p>User</p>
                  <p>Role</p>
                  <p>Department</p>
                  <p>Status</p>
                  <p>Risk</p>
                  <p>Actions</p>
                </div>

                <div className="divide-y divide-white/10">
                  {userAccess.map((user) => (
                    <div
                      key={user.name}
                      className="grid grid-cols-[1.2fr_1fr_0.9fr_1fr_0.7fr_1fr] gap-4 px-5 py-4 text-sm text-white/75"
                    >
                      <p className="font-medium text-white">{user.name}</p>
                      <p>{user.role}</p>
                      <p>{user.department}</p>
                      <p>{user.status}</p>
                      <p>
                        <RiskText risk={user.risk} />
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <button className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/75">
                          View
                        </button>
                        <button className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/75">
                          Edit
                        </button>
                        <button className="rounded-xl border border-[#ff6b7a]/20 bg-[#ff6b7a]/10 px-3 py-1.5 text-xs text-[#ffb3bf]">
                          Restrict
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ) : null}

          {activeSection === "approvals" ? (
            <section className="rounded-[28px] mindco-panel p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-white">Publishing approvals</h2>
                  <p className="mt-1 text-sm text-white/50">
                    Review polls and announcements awaiting release, scope confirmation, and final approval.
                  </p>
                </div>
                <button className="rounded-2xl mindco-button px-4 py-3 text-sm font-medium text-white">
                  Create notice
                </button>
              </div>

              <div className="mt-5 space-y-4">
                {approvals.map((item) => (
                  <article
                    key={item.title}
                    className="group rounded-[24px] border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05]"
                  >
                    <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-white/75">
                            {item.kind}
                          </span>

                          <span className="rounded-full border border-[#7c6cff]/25 bg-[#7c6cff]/10 px-3 py-1 text-[11px] font-medium text-[#c8c1ff]">
                            {item.audience}
                          </span>

                          {item.audience === "Department" && item.department ? (
                            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-white/65">
                              {item.department}
                            </span>
                          ) : null}
                        </div>

                        <h3 className="mt-3 text-base font-medium leading-7 text-white">{item.title}</h3>

                        <div className="mt-3 grid gap-2 text-sm text-white/55 sm:grid-cols-2">
                          <p>
                            <span className="text-white/35">Created by:</span> {item.createdBy}
                          </p>
                          <p>
                            <span className="text-white/35">Audience:</span>{" "}
                            {item.audience === "Department" && item.department
                              ? `${item.department} only`
                              : "All employees"}
                          </p>
                        </div>

                        <div className="mt-4 overflow-hidden max-h-0 border-t border-transparent pt-0 opacity-0 transition-all duration-300 group-hover:max-h-32 group-hover:border-white/10 group-hover:pt-4 group-hover:opacity-100">
                          <p className="text-[11px] uppercase tracking-[0.16em] text-white/35">Reason</p>
                          <p className="mt-2 text-sm leading-6 text-white/58">{item.reason}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 xl:justify-end">
                        <button className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/75">
                          Preview
                        </button>
                        <button className="rounded-2xl border border-[#4ce0b3]/20 bg-[#4ce0b3]/10 px-4 py-2 text-sm text-[#9ff1d8]">
                          Approve
                        </button>
                        <button className="rounded-2xl border border-[#ff6b7a]/20 bg-[#ff6b7a]/10 px-4 py-2 text-sm text-[#ffb3bf]">
                          Reject
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          {activeSection === "permissions" ? (
            <section className="rounded-[28px] mindco-panel p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-white">Roles and permissions</h2>
                  <p className="mt-1 text-sm text-white/50">
                    Review who can moderate, publish, manage users, and access sensitive tools.
                  </p>
                </div>
                <button className="rounded-2xl mindco-button px-4 py-3 text-sm font-medium text-white">
                  Edit permission rules
                </button>
              </div>

              <div className="mt-5 grid gap-4 xl:grid-cols-2">
                {permissions.map((item) => (
                  <article
                    key={item.role}
                    className="rounded-[24px] border border-white/10 bg-white/[0.035] p-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-base font-medium text-white">{item.role}</h3>
                        <p className="mt-1 text-sm text-white/50">{item.members} members assigned</p>
                      </div>
                      <button className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/75">
                        Edit role
                      </button>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.access.map((access) => (
                        <span
                          key={access}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/65"
                        >
                          {access}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          {activeSection === "reports" ? (
            <section className="rounded-[28px] mindco-panel p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-white">Incident reports</h2>
                  <p className="mt-1 text-sm text-white/50">
                    Employee-submitted issues, escalations, impersonation, abuse, and safety concerns.
                  </p>
                </div>
                <button className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/75">
                  Export cases
                </button>
              </div>

              <div className="mt-5 space-y-4">
                {reports.map((item) => (
                  <article
                    key={item.subject}
                    className="rounded-[24px] border border-white/10 bg-white/[0.035] p-4"
                  >
                    <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <StatusPill
                            label={item.severity === "critical" ? "Critical" : "Needs review"}
                            tone={item.severity}
                          />
                          <span className="text-xs uppercase tracking-[0.16em] text-white/35">{item.category}</span>
                        </div>
                        <h3 className="mt-3 text-base font-medium text-white">{item.subject}</h3>
                        <p className="mt-2 text-sm text-white/55">Reported by {item.reporter}</p>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/65">
                          {item.status}
                        </span>
                        <button className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/75">
                          Open case
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          {activeSection === "logs" ? (
            <section className="rounded-[28px] mindco-panel p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-white">Audit log</h2>
                  <p className="mt-1 text-sm text-white/50">
                    Trace recent admin actions for accountability and compliance review.
                  </p>
                </div>
                <button className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/75">
                  Download log
                </button>
              </div>

              <div className="mt-5 space-y-4">
                {activityLog.map((log) => (
                  <article
                    key={`${log.time}-${log.event}`}
                    className="rounded-[24px] border border-white/10 bg-white/[0.035] p-4"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-sm font-medium text-white">{log.event}</p>
                      <span className="text-xs uppercase tracking-[0.16em] text-white/35">{log.time}</span>
                    </div>
                    <p className="mt-2 text-sm text-white/60">{log.actor}</p>
                    <p className="mt-2 text-sm leading-6 text-white/50">{log.detail}</p>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          {activeSection === "settings" ? (
            <section className="rounded-[28px] mindco-panel p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-white">Platform settings</h2>
                  <p className="mt-1 text-sm text-white/50">
                    Mock controls for approval rules, upload policies, audit retention, and visibility.
                  </p>
                </div>
                <button className="rounded-2xl mindco-button px-4 py-3 text-sm font-medium text-white">
                  Save changes
                </button>
              </div>

              <div className="mt-5 grid gap-4 xl:grid-cols-2">
                {settingsItems.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[24px] border border-white/10 bg-white/[0.035] p-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-sm font-medium text-white">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-white/55">{item.description}</p>
                      </div>
                      <span className="rounded-full border border-[#7c6cff]/30 bg-[#7c6cff]/10 px-3 py-1 text-xs text-[#c8c1ff]">
                        {item.value}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ) : null}
        </main>
      </div>
    </div>
  );
}
