"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex justify-end gap-6 text-[14px]">
        <li>
          <Link
            href="/ideas"
            className={`text-gray-600 hover:text-black ${
              pathname === "/ideas" ? "underline underline-offset-4" : ""
            }`}
          >
            Ideas
          </Link>
        </li>
        <li>
          <Link
            href="/writings"
            className={`text-gray-600 hover:text-black ${
              pathname === "/writings" || pathname.startsWith("/writings/")
                ? "underline underline-offset-4"
                : ""
            }`}
          >
            Notes to self
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`text-gray-600 hover:text-black ${
              pathname === "/about" ? "underline underline-offset-4" : ""
            }`}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
