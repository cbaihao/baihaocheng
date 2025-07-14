"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Navigation from "./Navigation";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (isHomePage) {
      document.body.classList.add("home-page");
    } else {
      document.body.classList.remove("home-page");
    }

    return () => {
      document.body.classList.remove("home-page");
    };
  }, [isHomePage]);

  if (isHomePage) {
    return (
      <>
        <div className="fixed top-0 right-0 z-20 p-8">
          <Navigation />
        </div>
        {children}
        <div className="fixed bottom-0 left-0 z-20 p-8">
          <footer className="text-[14px] text-gray-600">
            <div className="mb-4">
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
            <div className="text-gray-600 text-[10px]">
              <p>CC BY-NC 4.0 2024 © Baihao Cheng.</p>
            </div>
          </footer>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="fixed top-0 right-0 z-20 p-8">
        <Navigation />
      </div>
      <div className="min-h-screen flex flex-col">
        <div className="max-w-[650px] ml-8 px-8 py-8 mt-20 flex-grow">
          {children}
        </div>
        <div className="p-8">
          <footer className="text-[14px] text-gray-600">
            <div className="mb-4">
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
            <div className="text-gray-600 text-[10px]">
              <p>CC BY-NC 4.0 2024 © Baihao Cheng.</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
