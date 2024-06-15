function TeamMember({ name, role }) {
  return (
    <section className="flex flex-col grow items-center text-xs text-black whitespace-nowrap max-md:mt-10">
      <div className="shrink-0 self-stretch w-full bg-indigo-200 rounded-full h-[182px]" />
      <p className="mt-5">{name}</p>
      <p className="mt-5">{role}</p>
    </section>
  );
}

export default TeamMember;
