"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex justify-end gap-6 mb-12 text-[14px]">
        <li>
          <Link
            href="/memes"
            className={`text-gray-600 hover:text-black ${
              pathname === "/memes" ? "underline underline-offset-4" : ""
            }`}
          >
            Memes
          </Link>
        </li>
        <li>
          <Link
            href="/crypto"
            className={`text-gray-600 hover:text-black ${
              pathname === "/crypto" ? "underline underline-offset-4" : ""
            }`}
          >
            Crypto
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className={`text-gray-600 hover:text-black ${
              pathname === "/" ? "underline underline-offset-4" : ""
            }`}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
