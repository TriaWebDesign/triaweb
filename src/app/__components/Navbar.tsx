import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="flex z-50 items-center px-9 justify-between text-white w-full h-32 fixed">
      <div className="p-1.5 ">
        <p className="text-3xl flex items-center gap-1 font-Michroma">
          TRIA{" "}
          <span className="text-sm text-[#6BA2D3] font-Urbanist font-thin">
            <i>Web Design Studio</i>
          </span>
        </p>
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
