"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

type DepartmentChannelsProps = {
  departmentName: string;
  channels: {
    announcements: string[];
    general: string[];
    discussions: string[];
    privateGroups: string[];
  };
};

function ChannelSection({
  title,
  items,
  departmentSlug,
  pathname,
}: {
  title: string;
  items: string[];
  departmentSlug: string;
  pathname: string;
}) {
  return (
    <div>
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/35">{title}</p>

      <div className="space-y-1">
        {items.map((item) => {
          const href = `/departments/${departmentSlug}/${item}`;
          const active = pathname === href;

          return (
            <Link
              key={item}
              href={href}
              className={`block w-full rounded-xl px-3 py-2 text-left text-[14px] leading-5 transition ${
                active ? "mindco-pill text-white" : "text-white/65 hover:bg-white/[0.06] hover:text-white"
              }`}
            >
              # {item}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default function DepartmentChannels({departmentName, channels}: DepartmentChannelsProps) {
  const pathname = usePathname();
  const departmentSlug = departmentName.toLowerCase();

  return (
    <aside className="w-56 border-r border-[rgba(129,157,255,0.12)] mindco-sidebar px-4 py-5">
      <div className="mb-5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-[#2EC4B6]">Department</p>
        <h2 className="mt-1.5 text-[18px] font-semibold text-white">{departmentName}</h2>
      </div>

      <div className="space-y-6">
        <ChannelSection
          title="Announcements"
          items={channels.announcements}
          departmentSlug={departmentSlug}
          pathname={pathname}
        />
        <ChannelSection
          title="General"
          items={channels.general}
          departmentSlug={departmentSlug}
          pathname={pathname}
        />
        <ChannelSection
          title="Discussions"
          items={channels.discussions}
          departmentSlug={departmentSlug}
          pathname={pathname}
        />
        <ChannelSection
          title="Private Groups"
          items={channels.privateGroups}
          departmentSlug={departmentSlug}
          pathname={pathname}
        />
      </div>
    </aside>
  );
}
