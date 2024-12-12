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
            href="/trading"
            className={`text-gray-600 hover:text-black ${
              pathname === "/trading" ? "underline underline-offset-4" : ""
            }`}
          >
            Trading
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
