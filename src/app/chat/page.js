"use client"

import * as React from "react";
import { useState } from "react";

function PsychiatristList() {
  const psychiatrists = ["Psikiater 1", "Psikiater 2", "Psikiater 3"];
  return (
    <aside className="flex flex-col items-start pt-12 pr-20 pb-20 pl-6 mx-auto w-full text-base text-black bg-indigo-200 rounded-[30px] max-md:px-5 max-md:mt-9">
      {psychiatrists.map((name, index) => (
        <div key={index} className="flex gap-3.5 mt-7 first:mt-0">
          <div className="shrink-0 rounded-full bg-neutral-500 h-[39px] w-[39px]" />
          <div className="my-auto">{name}</div>
        </div>
      ))}
    </aside>
  );
}

function Consultation() {
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message submitted: ", message);
    setMessage(""); // Clear the input after submission
  };

  return (
    <section className="flex flex-col px-9 pt-12 pb-7 w-full bg-indigo-200 rounded-[35px] max-md:px-5 max-md:mt-9 max-md:max-w-full">
      <h2 className="self-start ml-5 text-2xl font-medium text-black max-md:ml-2.5">
        Konsultasi
      </h2>
      <hr className="shrink-0 mt-6 mr-7 ml-4 max-w-full h-px bg-black border border-black border-solid w-[801px] max-md:mr-2.5" />
      <div className="flex gap-3.5 mt-[601px] max-md:flex-wrap max-md:mt-10">
        <form onSubmit={handleSubmit} className="flex w-full">
          <input
            type="text"
            value={message}
            onChange={handleInputChange}
            className="flex-grow max-w-full bg-white h-[58px] rounded-[30px] px-4"
            placeholder="Type your message"
          />
          <button
            type="submit"
            className="shrink-0 bg-white rounded-full h-[58px] w-[58px] ml-3 flex items-center justify-center"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

function ChatPage() {
  return (
    <div className="flex flex-col justify-center px-12 py-12 bg-pink-200 max-md:px-5">
      <div className="px-20 pt-2.5 pb-20 bg-pink-200 rounded-[38px] max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[21%] max-md:ml-0 max-md:w-full">
            <PsychiatristList />
          </div>
          <div className="flex flex-col ml-5 w-[79%] max-md:ml-0 max-md:w-full">
            <Consultation />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
