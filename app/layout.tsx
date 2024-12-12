import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Baihao Cheng",
  description: "About me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-[14px]`}>
        <div className="max-w-[650px] mx-auto px-8 py-8">
          <nav>
            <ul className="flex justify-end gap-6 mb-12 text-[14px]">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-black underline underline-offset-4"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
          {children}
          <footer className="mt-16 pt-16 border-t border-gray-200 text-[14px] text-gray-600">
            <div className="mb-24">
              <a
                href="https://x.com/cbaihao"
                className="text-gray-600 hover:text-black underline underline-offset-4"
              >
                Twitter
              </a>
              <span className="mx-2">·</span>
              <a
                href="https://www.linkedin.com/in/james-baihao-cheng/"
                className="text-gray-600 hover:text-black underline underline-offset-4"
              >
                LinkedIn
              </a>
              <span className="mx-2">·</span>
              <a
                href="mailto:baihaocheng98@gmail.com"
                className="text-gray-600 hover:text-black underline underline-offset-4"
              >
                baihaocheng98@gmail.com
              </a>
            </div>
            <div className="flex justify-between items-center text-gray-600 text-[10px]">
              <p>CC BY-NC 4.0 2024 © Baihao Cheng.</p>
              <p>Created by AI.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
