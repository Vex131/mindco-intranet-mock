"use client";

import {usePathname} from "next/navigation";
import {departmentUtilityData, directMessageUtilityData, globalUtilityData} from "@/lib/mockData";

function Card({title, children}: {title: string; children: React.ReactNode}) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-4">
      <p className="text-sm font-semibold text-white">{title}</p>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default function UtilityPanel() {
  const pathname = usePathname();

  const isDepartment = pathname.startsWith("/departments/");
  const isMessages = pathname.startsWith("/messages/");

  if (isMessages) {
    const slug = pathname.split("/")[2];
    const data = directMessageUtilityData[slug as keyof typeof directMessageUtilityData];

    if (!data) {
      return <aside className="w-80 border-l border-white/10 bg-[#121212] p-5" />;
    }

    return (
      <aside className="w-80 border-l border-white/10 bg-[#121212] p-5">
        <div className="space-y-5">
          <Card title="Contact Details">
            <div className="space-y-3 text-sm text-white/70">
              <p>
                <span className="text-white">Role:</span> {data.role}
              </p>
              <p>
                <span className="text-white">Status:</span> {data.status}
              </p>
            </div>
          </Card>

          <Card title="Shared Files">
            <div className="space-y-3">
              {data.sharedFiles.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-black/20 p-3"
                >
                  <p className="text-sm text-white">{item}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Recent Media">
            <div className="space-y-3">
              {data.recentMedia.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-black/20 p-3"
                >
                  <p className="text-sm text-white">{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </aside>
    );
  }

  if (isDepartment) {
    const departmentSlug = pathname.split("/")[2];
    const data = departmentUtilityData[departmentSlug as keyof typeof departmentUtilityData];

    if (!data) {
      return <aside className="w-80 border-l border-white/10 bg-[#121212] p-5" />;
    }

    return (
      <aside className="w-80 border-l border-white/10 bg-[#121212] p-5">
        <div className="space-y-5">
          <Card title="Pinned Notices">
            <div className="space-y-3">
              {data.pinned.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-black/20 p-3"
                >
                  <p className="text-sm text-white">{item.title}</p>
                  <p className="mt-1 text-xs text-white/45">{item.meta}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Active Polls">
            <div className="space-y-3">
              {data.polls.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-black/20 p-3"
                >
                  <p className="text-sm text-white">{item.title}</p>
                  <p className="mt-1 text-xs text-white/45">{item.meta}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Upcoming">
            <div className="space-y-3 text-sm text-white/70">
              {data.events.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </Card>
        </div>
      </aside>
    );
  }

  return (
    <aside className="w-80 border-l border-white/10 bg-[#121212] p-5">
      <div className="space-y-5">
        <Card title="Pinned Notices">
          <div className="space-y-3">
            {globalUtilityData.pinned.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-black/20 p-3"
              >
                <p className="text-sm text-white">{item.title}</p>
                <p className="mt-1 text-xs text-white/45">{item.meta}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Active Polls">
          <div className="space-y-3">
            {globalUtilityData.polls.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-black/20 p-3"
              >
                <p className="text-sm text-white">{item.title}</p>
                <p className="mt-1 text-xs text-white/45">{item.meta}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Upcoming">
          <div className="space-y-3 text-sm text-white/70">
            {globalUtilityData.events.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </Card>
      </div>
    </aside>
  );
}
