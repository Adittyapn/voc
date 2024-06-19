import TeamMember from "@/components/TeamMember";
import React from "react";

function AboutPage() {
  return (
    <main className="flex flex-col justify-center px-10 bg-pink-200 max-md:px-5 min-h-screen">
      <div className="flex justify-center items-center px-16 bg-pink-200 rounded-[38px] max-md:px-5 max-md:max-w-full">
        <article className="flex flex-col mt-36 mb-52 max-w-full w-[722px] max-md:my-10">
          <h1 className="self-center text-2xl font-bold text-black">
            TEAM KAMI
          </h1>
          <section className="mt-24 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <TeamMember name="Daffa Dwi Haykal" role="Front-End" github="https://github.com/dffdwi" linkedin="https://www.linkedin.com/in/daffadwihaykal/" />
              <TeamMember name="Aditya Pratama Nugraha" role="Back-End" github="https://github.com/Adittyapn" linkedin="https://linkedin.com/in/user2" />
              <TeamMember name="Muhammad Alfitrotillah" role="Manager Project" github="https://github.com/alfitrotillahm" linkedin="https://linkedin.com/in/user3" />
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}

export default AboutPage;
