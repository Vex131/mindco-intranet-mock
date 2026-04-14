import {redirect} from "next/navigation";
import {departments} from "@/lib/mock-data";

type DepartmentPageProps = {
  params: Promise<{department: string}>;
};

export default async function DepartmentPage({params}: DepartmentPageProps) {
  const {department} = await params;

  const matchedDepartment = departments.find((dept) => dept.name.toLowerCase() === department);

  if (!matchedDepartment) {
    return (
      <div className="h-full min-h-0 overflow-y-auto pr-2 chat-scrollbar">
        <div className="space-y-8 pb-6">
          <div className="rounded-[24px] mindco-panel p-6">
            <h1 className="text-2xl font-semibold text-white">Department not found</h1>
          </div>
        </div>
      </div>
    );
  }

  const firstChannel =
    matchedDepartment.channels.announcements[0] ??
    matchedDepartment.channels.general[0] ??
    matchedDepartment.channels.discussions[0] ??
    matchedDepartment.channels.privateGroups[0];

  redirect(`/departments/${department}/${firstChannel}`);
}
