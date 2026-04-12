import {redirect} from "next/navigation";
import {departments} from "@/lib/mockData";

type DepartmentPageProps = {
  params: Promise<{department: string}>;
};

export default async function DepartmentPage({params}: DepartmentPageProps) {
  const {department} = await params;

  const matchedDepartment = departments.find((dept) => dept.name.toLowerCase() === department);

  if (!matchedDepartment) {
    return (
      <div className="rounded-[24px] border border-white/10 bg-[#1A1A1A] p-6">
        <h1 className="text-2xl font-semibold text-white">Department not found</h1>
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
