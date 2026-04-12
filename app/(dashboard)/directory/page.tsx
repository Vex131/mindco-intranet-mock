export default function DirectoryPage() {
  const people = [
    {name: "Naavil", role: "Product Designer", dept: "Design"},
    {name: "Aisha", role: "Marketing Lead", dept: "Marketing"},
    {name: "Ibrahim", role: "Frontend Engineer", dept: "Engineering"},
    {name: "Sara", role: "HR Manager", dept: "HR"},
    {name: "Riyaz", role: "Finance Analyst", dept: "Finance"},
    {name: "Fathimath", role: "Operations Coordinator", dept: "Operations"},
  ];

  return (
    <div className="space-y-8">
      <section className="rounded-[24px] border border-white/10 bg-[#1A1A1A] p-6">
        <p className="text-sm uppercase tracking-[0.2em] text-[#3FA7D6]">People</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Directory</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">
          Browse employees, roles, departments, and key workplace contacts.
        </p>
      </section>

      <section className="rounded-[28px] border border-white/10 bg-[#1A1A1A] p-6">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {people.map((person) => (
            <article
              key={person.name}
              className="rounded-3xl border border-white/10 bg-black/20 p-5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#3FA7D6] font-semibold text-white">
                {person.name.charAt(0)}
              </div>
              <p className="mt-4 text-lg font-semibold text-white">{person.name}</p>
              <p className="mt-1 text-sm text-white/60">{person.role}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/35">{person.dept}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
