import Testimoni from "@/components/Testimoni";
import React from "react";

export default function LandingPage() {
  return (
    <section className="flex flex-col justify-center px-4 sm:px-10 bg-pink-200">
      <article className="flex flex-col items-center px-4 md:px-20 pt-6 pb-20 bg-pink-200 max-w-full">
        <header className="mt-10 max-w-full w-[865px] md:mt-0">
          <div className="flex flex-col md:flex-row md:items-center md:gap-5">
            <div className="flex flex-col w-full md:w-[71%]">
              <h1 className="text-center md:text-left text-2xl md:text-2xl font-bold text-violet-700 md:max-w-full">
                Terhubung, didukung, dan dilindungi,
                <br />
                karena Anda tidak pernah sendirian.
              </h1>
            </div>
            <aside className="flex justify-center md:justify-start w-full md:w-[29%]">
              <img
                src="../../assets/Logo-VOC-gambar-1.png"
                className="w-full max-w-xs md:max-w-none aspect-[1.04] mt-6 md:mt-0"
                alt="Logo"
              />
            </aside>
          </div>
        </header>
        <div className="justify-center items-center px-6 py-6 mt-16 max-w-full text-2xl font-bold text-center text-pink-200 bg-violet-700 rounded-[60.5px] w-[377px] md:px-16 md:mt-10 hover:scale-110 duration-200">
          <button>Mari Konsultasi</button>
        </div>
        <section className="px-4 sm:px-10 py-10 md:py-20 bg-pink-200 max-w-full">
          <article className="max-w-[906px] mx-auto">
            <Testimoni />
          </article>
        </section>
      </article>
    </section>
  );
}
