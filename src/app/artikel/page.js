import React from "react";

function artikel() {
  return (
    <main className="flex flex-col justify-center px-10 py-12 bg-pink-200 max-md:px-5">
      <section className="px-20 pt-8 pb-20 bg-pink-200 rounded-[38px] max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <aside className="flex flex-col w-[21%] max-md:ml-0 max-md:w-full">
            <div
              tabindex="0"
              role="region"
              className="shrink-0 mx-auto bg-indigo-200 h-[782px] rounded-[30px] w-[241px] max-md:mt-10"
            />
          </aside>
          <section className="flex flex-col ml-5 w-[79%] max-md:ml-0 max-md:w-full">
            <div
              tabindex="0"
              role="region"
              className="shrink-0 mx-auto max-w-full bg-indigo-200 h-[782px] rounded-[35px] w-[906px] max-md:mt-10"
            />
          </section>
        </div>
      </section>
    </main>
  );
}

export default artikel;