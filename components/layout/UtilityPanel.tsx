"use client";

import {usePathname} from "next/navigation";
import {departmentUtilityData, globalUtilityData, messageThreads, messageUtilityData} from "@/lib/mock-data";

function PanelShell({children}: {children?: React.ReactNode}) {
  return (
    <aside className="h-full w-80 overflow-y-auto border-l border-[rgba(129,157,255,0.12)] mindco-sidebar p-5 hide-scrollbar">
      <div className="space-y-4">{children}</div>
    </aside>
  );
}

function SectionCard({title, children}: {title: string; children: React.ReactNode}) {
  return (
    <section className="rounded-[24px] mindco-panel-soft p-4">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/35">{title}</p>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function ItemCard({title, meta}: {title: string; meta?: string}) {
  return (
    <div className="rounded-2xl mindco-panel-soft p-3 transition hover:bg-white/[0.04]">
      <p className="text-sm text-white">{title}</p>
      {meta ? <p className="mt-1 text-xs text-white/45">{meta}</p> : null}
    </div>
  );
}

function HeaderCard({label, name, avatarLabel}: {label: string; name: string; avatarLabel: string}) {
  return (
    <section className="rounded-[28px] mindco-panel p-5">
      <div className="flex flex-col items-center text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[rgba(129,157,255,0.16)] bg-white/[0.05] text-xl font-semibold text-white">
          {avatarLabel}
        </div>

        <h3 className="mt-4 text-2xl font-semibold text-white">{name}</h3>
        <p className="mt-1 text-sm text-white/45">{label}</p>
      </div>
    </section>
  );
}

export default function UtilityPanel() {
  const pathname = usePathname();

  const isDepartment = pathname.startsWith("/departments/");
  const isMessages = pathname.startsWith("/messages/");

  if (isMessages) {
    const slug = pathname.split("/")[2];
    const thread = messageThreads.find((item) => item.slug === slug);
    const data = messageUtilityData[slug as keyof typeof messageUtilityData];

    if (!thread || !data) {
      return <PanelShell />;
    }

    if (data.type === "group") {
      return (
        <PanelShell>
          <HeaderCard
            label={data.label}
            name={thread.name}
            avatarLabel={thread.avatarLabel ?? thread.name.slice(0, 2)}
          />

          <SectionCard title="Members">
            <div className="space-y-3">
              {data.members.map((member) => (
                <div
                  key={member.name}
                  className="flex items-center justify-between rounded-2xl bg-white/[0.04] px-3 py-2.5"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-medium text-white">
                      {member.name.charAt(0)}
                    </div>

                    <div>
                      <p className="text-sm text-white">{member.name}</p>
                      <p className="text-xs text-white/45">{member.role}</p>
                    </div>
                  </div>

                  {member.online ? <span className="h-2.5 w-2.5 rounded-full bg-[#4ce0b3]" /> : null}
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Media">
            <div className="grid grid-cols-3 gap-2">
              {data.media.map((item) => (
                <div
                  key={item}
                  className="aspect-square rounded-2xl border border-white/10 bg-white/[0.04] p-2 text-[10px] leading-4 text-white/60"
                >
                  {item}
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Links">
            <div className="space-y-3">
              {data.links.map((item) => (
                <ItemCard
                  key={item.label}
                  title={item.label}
                  meta={item.href}
                />
              ))}
            </div>
          </SectionCard>
        </PanelShell>
      );
    }

    return (
      <PanelShell>
        <HeaderCard
          label={data.role}
          name={thread.name}
          avatarLabel={thread.avatarLabel ?? thread.name.charAt(0)}
        />

        <SectionCard title="Contact Details">
          <div className="space-y-3">
            <ItemCard title={`Role: ${data.role}`} />
            <ItemCard title={`Status: ${data.status}`} />
          </div>
        </SectionCard>

        <SectionCard title="Shared Files">
          <div className="space-y-3">
            {data.sharedFiles.map((item) => (
              <ItemCard
                key={item}
                title={item}
              />
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Recent Media">
          <div className="space-y-3">
            {data.recentMedia.map((item) => (
              <ItemCard
                key={item}
                title={item}
              />
            ))}
          </div>
        </SectionCard>
      </PanelShell>
    );
  }

  if (isDepartment) {
    const departmentSlug = pathname.split("/")[2];
    const data = departmentUtilityData[departmentSlug as keyof typeof departmentUtilityData];

    if (!data) {
      return <PanelShell />;
    }

    return (
      <PanelShell>
        <SectionCard title="Pinned Notices">
          <div className="space-y-3">
            {data.pinned.map((item) => (
              <ItemCard
                key={item.title}
                title={item.title}
                meta={item.meta}
              />
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Active Polls">
          <div className="space-y-3">
            {data.polls.map((item) => (
              <ItemCard
                key={item.title}
                title={item.title}
                meta={item.meta}
              />
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Upcoming">
          <div className="space-y-3">
            {data.events.map((item) => (
              <ItemCard
                key={item}
                title={item}
              />
            ))}
          </div>
        </SectionCard>
      </PanelShell>
    );
  }

  return (
    <PanelShell>
      <SectionCard title="Pinned Notices">
        <div className="space-y-3">
          {globalUtilityData.pinned.map((item) => (
            <ItemCard
              key={item.title}
              title={item.title}
              meta={item.meta}
            />
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Active Polls">
        <div className="space-y-3">
          {globalUtilityData.polls.map((item) => (
            <ItemCard
              key={item.title}
              title={item.title}
              meta={item.meta}
            />
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Upcoming">
        <div className="space-y-3">
          {globalUtilityData.events.map((item) => (
            <ItemCard
              key={item}
              title={item}
            />
          ))}
        </div>
      </SectionCard>
    </PanelShell>
  );
}
