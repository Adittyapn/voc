"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-10 flex flex-col items-center px-20 pt-4 pb-4 bg-pink-200 max-md:px-5 max-md:max-w-full ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="flex gap-5 justify-between self-start max-w-full text-xs text-pink-200 whitespace-nowrap w-screen max-md:flex-wrap">
        <Link href="/">
          <img
            src="../../assets/Logo-VOC-1.png"
            className="shrink-0 max-w-full aspect-[2.08] w-[109px]"
            alt="Logo"
          />
        </Link>
        <ul className="flex gap-8 justify-between px-7 py-2 my-auto bg-violet-500 rounded-[30px] max-md:px-5">
          <li className="hover:scale-110">
            <Link href="/">Beranda</Link>
          </li>
          <li className="hover:scale-110">
            <Link href="/artikel">Artikel</Link>
          </li>
          <li className="hover:scale-110">
            <Link href="/about">Team</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Header;
