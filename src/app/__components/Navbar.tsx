"use client";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
function Navbar() {
  const [changeColor, setChangeColor] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handlePageChange = () => {
    const pathname = window.location.pathname;
    console.log(pathname);

    if (pathname === "/about") {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };
  useEffect(() => {
    window.addEventListener("popstate", handlePageChange);
    handlePageChange();

    return () => window.removeEventListener("popstate", handlePageChange);
  }, [handlePageChange]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 500) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className="flex z-50 items-center px-9 justify-between text-white w-full h-32 fixed"
      style={{
        backgroundColor: scrolled ? "#23252b" : "transparent",
        height: "80px",
      }}
    >
      <div className="p-1.5 ">
        <Link href="/">
          <p className="text-3xl flex items-center gap-1 font-Michroma">
            TRIA{" "}
            <span className="text-sm text-[#6BA2D3] font-Urbanist font-thin">
              <i>Web Design Studio</i>
            </span>
          </p>
        </Link>
      </div>
      <div className="flex items-center justify-around w-6/12 text-sm font-Urbanist font-thin">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
        <Link className="bg-[#6BA2D3] px-6 py-2 rounded-xl" href="/hireus">
          Hire Us
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
