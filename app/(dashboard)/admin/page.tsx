"use client";

import {useRole} from "@/components/providers/RoleProvider";

export default function AdminPage() {
  const {role} = useRole();

  if (role !== "Admin") {
    return (
      <div className="h-full min-h-0 overflow-y-auto pr-2 chat-scrollbar">
        <div className="space-y-8 pb-6">
          <section className="rounded-[24px] mindco-panel p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-[#FF3B3F]">Restricted</p>
            <h1 className="mt-3 text-3xl font-semibold text-white">Admin access required</h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">
              This area is only visible to administrators. Switch the user type to Admin to view the full admin workspace
              mock.
            </p>
          </section>
        </div>
      </div>
    );
  }

  const statCards = [
    {label: "Total Users", value: "248"},
    {label: "Departments", value: "12"},
    {label: "Pending Reports", value: "7"},
    {label: "Active Polls", value: "9"},
  ];

  const permissions = [
    "Manage users and roles",
    "Create and publish official announcements",
    "Moderate posts and comments",
    "Manage departments and channels",
    "Review reports and flagged content",
    "Create and close polls",
    "Pin important notices",
    "View admin activity logs",
  ];

  const pendingActions = [
    "Review 3 flagged comments from the Engineering feed",
    "Approve HR policy notice for publishing",
    "Update role assignment for two department leads",
    "Archive expired office maintenance notice",
  ];

  const users = [
    {name: "Sara", role: "HR Manager", status: "Active"},
    {name: "Ibrahim", role: "Frontend Engineer", status: "Active"},
    {name: "Aisha", role: "Marketing Lead", status: "Pending Review"},
    {name: "Riyaz", role: "Finance Analyst", status: "Suspended"},
  ];

  return (
    <div className="h-full min-h-0 overflow-y-auto pr-2 chat-scrollbar">
      <div className="space-y-8 pb-6">
      <section className="rounded-[24px] mindco-panel p-6">
        <p className="text-sm uppercase tracking-[0.2em] text-[#FF3B3F]">Administration</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Admin Control Center</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">
          Manage users, moderate content, publish official communication, oversee departments, and monitor workplace
          activity.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {statCards.map((item) => (
          <div
            key={item.label}
            className="rounded-[24px] mindco-panel p-5"
          >
            <p className="text-2xl font-semibold text-white">{item.value}</p>
            <p className="mt-2 text-sm text-white/50">{item.label}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[28px] mindco-panel p-6">
          <h2 className="text-lg font-semibold text-white">Admin Permissions</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {permissions.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[rgba(255,255,255,0.035)] p-4"
              >
                <p className="text-sm text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] mindco-panel p-6">
          <h2 className="text-lg font-semibold text-white">Pending Actions</h2>
          <div className="mt-5 space-y-3">
            {pendingActions.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[rgba(255,255,255,0.035)] p-4"
              >
                <p className="text-sm text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-[28px] mindco-panel p-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-lg font-semibold text-white">User Management</h2>
          <button className="rounded-2xl border border-[rgba(129,157,255,0.14)] bg-white/[0.04] px-4 py-2 text-sm text-white/70">
            Add User
          </button>
        </div>

        <div className="mt-5 overflow-hidden rounded-3xl border border-white/10">
          <div className="grid grid-cols-3 bg-white/5 px-5 py-3 text-xs uppercase tracking-[0.18em] text-white/35">
            <p>User</p>
            <p>Role</p>
            <p>Status</p>
          </div>

          <div className="divide-y divide-white/10">
            {users.map((user) => (
              <div
                key={user.name}
                className="grid grid-cols-3 px-5 py-4 text-sm text-white/75"
              >
                <p>{user.name}</p>
                <p>{user.role}</p>
                <p>{user.status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-[28px] mindco-panel p-6">
          <h2 className="text-lg font-semibold text-white">Moderation Tools</h2>
          <div className="mt-5 space-y-3">
            {[
              "Review flagged posts",
              "Remove inappropriate content",
              "Mute or suspend users",
              "Lock comments on official notices",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[rgba(255,255,255,0.035)] p-4"
              >
                <p className="text-sm text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] mindco-panel p-6">
          <h2 className="text-lg font-semibold text-white">Publishing Controls</h2>
          <div className="mt-5 space-y-3">
            {[
              "Publish official company announcements",
              "Pin urgent notices",
              "Create company-wide polls",
              "Schedule visibility for important updates",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[rgba(255,255,255,0.035)] p-4"
              >
                <p className="text-sm text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
