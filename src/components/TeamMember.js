import { FaGithub, FaLinkedin } from "react-icons/fa";

function TeamMember({ name, role, github, linkedin }) {
  return (
    <section className="flex flex-col grow items-center text-xs text-black whitespace-nowrap max-md:mt-10">
      <div className="shrink-0 self-stretch w-full bg-indigo-200 rounded-full h-[182px]" />
      <p className="mt-5">{name}</p>
      <p className="mt-5">{role}</p>
      <div className="flex mt-2 space-x-3">
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FaGithub size={20} />
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={20} />
        </a>
      </div>
    </section>
  );
}

export default TeamMember;
