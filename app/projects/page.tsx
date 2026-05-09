"use client";

import { useState } from "react";
import PageLayout from "../components/PageLayout";

const projects: {
  name: string;
  date: string;
  categories: string[];
  description: React.ReactNode;
}[] = [
  {
    name: "Circle Payment Network",
    date: "2025–2026",
    categories: ["Stablecoin", "Payment"],
    description: (
      <>
        Built the first version of{" "}
        <a
          href="https://www.circle.com/cpn"
          className="text-gray-600 hover:text-black underline"
        >
          Circle Payment Network (CPN)
        </a>{" "}
        with a great team at Circle. It lets you send USDC to anyone and have
        them receive their local currency — paying an employee abroad, sending
        money back home. Funds settle at blockchain speed, at a competitive
        rate, without extra KYC requirements. CPN reached $3.4B in annualized
        transaction volume within 6 months of launch.
      </>
    ),
  },
  {
    name: "LegalCrypto.ai",
    date: "2025",
    categories: ["Crypto"],
    description: (
      <>
        Figuring out crypto regulations typically means $500–$1,000/hour in
        legal fees and weeks of waiting.{" "}
        <a
          href="https://legalcrypto.ai/"
          className="text-gray-600 hover:text-black underline"
        >
          LegalCrypto.ai
        </a>{" "}
        gives crypto founders an AI-generated compliance roadmap instantly:
        what licenses you need, what risks apply to your specific business
        model, what it&apos;ll cost — delivered as an investor-ready PDF.
      </>
    ),
  },
  {
    name: "USDC Access Network",
    date: "2023–2024",
    categories: ["Stablecoin", "Payment"],
    description:
      "In March 2023, SVB collapsed and USDC briefly traded at $0.90 on some DEXs over the weekend. I became a founding member on Circle's newly formed liquidity team. The goal is to keep USDC pegged at $1 under any market condition — expanding banking network, deepening CEX liquidity, and building onramp/offramp rails. USDC Access is Circle's first retail-facing onramp product: it maintains the regulatory bar that set Circle apart while users get a trusted and unified experience for onramp.",
  },
  {
    name: "Coinbase Wallet Social",
    date: "2022",
    categories: ["Crypto", "Wallet"],
    description:
      <>Transform Coinbase wallet from single player to multi-player.<br />Now becomes Base.</>,
  },
  {
    name: "Himalaya Mentor-In-Pocket",
    date: "2021",
    categories: ["Consumer"],
    description:
      "The insight: all fields are pushed forward by people, and we learn fastest from their stories. After listening to hundreds of podcasts, we built an audio product that puts a mentor in your pocket — curated stories from founders, investors, and operators. Grew from zero to $500K ARR and 1M signups. The mentor feature became the most popular in the app.",
  },
  {
    name: "DECODE Innovation",
    date: "2019",
    categories: ["Nonprofit", "Conference"],
    description: (
      <>
        Co-founded{" "}
        <a
          href="https://www.decode.build/"
          className="text-gray-600 hover:text-black underline"
        >
          UC Berkeley&apos;s annual tech and entrepreneurship conference
        </a>
        . Hosted Eric Yuan (Zoom CEO), Michael Seibel (YC CEO), Astro Teller
        (Google X CEO), Steve Jurvetson (Founders Fund, Tesla board), and
        Aparna Chennapragada (Robinhood CPO) across 4 events with 2,000+ total
        attendees. Also launched two student-run courses counting toward
        Berkeley&apos;s Entrepreneurship certificate.
      </>
    ),
  },
];


export default function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <PageLayout title="Projects">
      <ul className="list-none">
        {projects.map((project, i) => {
          const isOpen = openIndex === i;
          return (
            <li key={project.name} className="border-b border-gray-100">
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between py-3 cursor-pointer text-left"
              >
                <span className="flex items-center gap-3 min-w-0">
                  <span className="text-gray-600 shrink-0">{project.name}</span>
                  <span className="flex items-center gap-1.5 flex-wrap">
                    {project.categories.map((cat) => (
                      <span
                        key={cat}
                        className="text-xs text-gray-500 bg-gray-100 border border-gray-500 px-1.5 py-0.5 rounded"
                      >
                        {cat}
                      </span>
                    ))}
                  </span>
                </span>
                <span className="flex items-center gap-4 text-gray-400 text-sm shrink-0 ml-4">
                  <span>{project.date}</span>
                  <span
                    className="inline-block transition-transform duration-200"
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    +
                  </span>
                </span>
              </button>
              {isOpen && (
                <p className="pb-3 text-gray-600">{project.description}</p>
              )}
            </li>
          );
        })}
      </ul>
    </PageLayout>
  );
}
