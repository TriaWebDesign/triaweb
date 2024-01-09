"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { tag: "Home", href: "/" },
  { tag: "About", href: "/about" },
  { tag: "Gallery", href: "/gallery" },
  { tag: "Contact", href: "/contact" },
];

export default function Navbar() {
  const currentPath = usePathname();

  return (
    <nav className="fixed w-full flex items-center justify-between px-7 py-3 backdrop-blur-md bg-black/70">
      <div className="flex items-center gap-8">
        <div>
          <Image src="/logo.png" width={45} height={45} alt="logo" />
        </div>
        <div className="flex gap-4 text-white">
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className={`${
                currentPath === link.href ? "text-zinc-300" : "text-zinc-400"
              } hover:text-zinc-500 transition-colors`}
            >
              {link.tag}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <button className="bg-sky-500 text-slate-100 px-4 py-1 rounded-md">
          Hire Us
        </button>
      </div>
    </nav>
  );
}
