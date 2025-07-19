"use client";

import { useState } from "react";
import PageLayout from "../components/PageLayout";
import ContributionTracker from "../components/ContributionTracker";

interface Idea {
  id: string;
  title: string;
  description: string;
  date: string;
}

export default function Ideas() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const ideas: Idea[] = [
    {
      id: "idea-1",
      title:
        "AI Accountability Buddy: Your conversational accountability partner",
      description:
        "Imagine your AI conversations coming to life, moving beyond just text to help you reach your goals. This service turns your chats with AI into actionable, time-bound plans for what you want to achieve, whether it's for work or personal growth.\n\nIt then becomes your dedicated partner, sending light, helpful follow-up emails as often as you like—weekly, monthly, or as needed. These emails are quick check-ins, and you can simply reply to them with updates on your progress. All your replies are saved and shown on a personal dashboard, giving you a clear look at how you're doing. It can also send you helpful information related to your goal, like a daily newsletter made just for you. Plus, you can change your plans anytime, just by talking to it.",
      date: "7/19/25",
    },
  ];

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <PageLayout title="Ideas">
      <div className="space-y-8">
        <ul className="space-y-2 list-none">
          {ideas.map((idea) => (
            <li key={idea.id}>
              <div className="flex items-start">
                <span
                  className={`text-gray-600 mr-2 inline-block transition-transform duration-500 ease-in-out ${
                    expandedId === idea.id ? "rotate-90" : "rotate-0"
                  }`}
                >
                  {expandedId === idea.id ? "+" : "–"}
                </span>
                <button
                  onClick={() => toggleExpanded(idea.id)}
                  className="text-gray-600 hover:text-black underline text-left focus:outline-none"
                >
                  {idea.title} - {idea.date}
                </button>
              </div>
              {expandedId === idea.id && (
                <div className="ml-6 mt-4 mb-4 text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                  {idea.description}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* GitHub-style Progress Tracker */}
        <div>
          <h2 className="text-xl font-medium text-gray-900 mb-4">
            Progress Tracker
          </h2>
          <ContributionTracker />
        </div>
      </div>
    </PageLayout>
  );
}
