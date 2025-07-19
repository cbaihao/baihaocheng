"use client";

import { useState, useEffect } from "react";

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface ContributionData {
  [year: string]: {
    [date: string]: number;
  };
}

export default function ContributionTracker() {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContributions = async () => {
      try {
        const response = await fetch("/contributions.json");
        const data: ContributionData = await response.json();

        const processedData: ContributionDay[] = [];
        const today = new Date();
        const currentYear = today.getFullYear().toString();
        const yearData = data[currentYear] || {};

        // Generate last 365 days
        for (let i = 364; i >= 0; i--) {
          const date = new Date(today);
          date.setDate(date.getDate() - i);
          const dateStr = date.toISOString().split("T")[0];

          const count = yearData[dateStr] || 0;
          const level =
            count === 0
              ? 0
              : count <= 2
              ? 1
              : count <= 4
              ? 2
              : count <= 6
              ? 3
              : 4;

          processedData.push({
            date: dateStr,
            count,
            level,
          });
        }

        setContributions(processedData);
      } catch (error) {
        console.error("Failed to load contributions:", error);
      } finally {
        setLoading(false);
      }
    };

    loadContributions();
  }, []);

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-20 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  const getColorClass = (level: number): string => {
    switch (level) {
      case 0:
        return "bg-gray-100";
      case 1:
        return "bg-green-200";
      case 2:
        return "bg-green-300";
      case 3:
        return "bg-green-500";
      case 4:
        return "bg-green-700";
      default:
        return "bg-gray-100";
    }
  };

  const formatDate = (dateStr: string): string => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Group contributions by weeks starting from Sunday
  const generateWeeksData = () => {
    const weeks: ContributionDay[][] = [];
    const startDate = new Date(contributions[0]?.date);

    // Find the Sunday of the first week
    const firstSunday = new Date(startDate);
    firstSunday.setDate(startDate.getDate() - startDate.getDay());

    let currentWeek: ContributionDay[] = [];

    for (let week = 0; week < 53; week++) {
      currentWeek = [];

      for (let day = 0; day < 7; day++) {
        const currentDate = new Date(firstSunday);
        currentDate.setDate(firstSunday.getDate() + week * 7 + day);
        const dateStr = currentDate.toISOString().split("T")[0];

        // Find contribution for this date
        const contribution = contributions.find((c) => c.date === dateStr);

        if (contribution) {
          currentWeek.push(contribution);
        } else {
          currentWeek.push({
            date: dateStr,
            count: 0,
            level: 0,
          });
        }
      }

      weeks.push(currentWeek);
    }

    return weeks;
  };

  const weeklyData = generateWeeksData();
  const totalContributions = contributions.reduce(
    (sum, day) => sum + day.count,
    0
  );
  const currentYear = new Date().getFullYear();

  // Generate month labels
  const getMonthLabels = () => {
    const months = [];
    const today = new Date();

    for (let i = 11; i >= 0; i--) {
      const date = new Date(today);
      date.setMonth(date.getMonth() - i);
      months.push(date.toLocaleDateString("en-US", { month: "short" }));
    }

    return months;
  };

  const monthLabels = getMonthLabels();

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <div className="mb-4">
        <h3 className="text-lg font-medium text-gray-900">
          {totalContributions} contributions in the last year
        </h3>
      </div>

      {/* Contribution Grid with month labels and year */}
      <div className="overflow-x-auto">
        <div className="relative">
          {/* Month labels */}
          <div className="flex mb-2 text-xs text-gray-600 ml-8">
            {monthLabels.map((month, index) => (
              <div
                key={month}
                className="flex-1 text-left"
                style={{ minWidth: "26px" }}
              >
                {index % 3 === 0 ? month : ""}
              </div>
            ))}
          </div>

          <div className="flex">
            {/* Day labels */}
            <div
              className="flex flex-col text-xs text-gray-600 mr-2 justify-around"
              style={{ height: "91px" }}
            >
              <div>Mon</div>
              <div>Wed</div>
              <div>Fri</div>
            </div>

            {/* Grid */}
            <div className="grid grid-flow-col gap-1 min-w-max">
              {weeklyData.slice(0, 52).map((week, weekIndex) => (
                <div key={weekIndex} className="grid grid-rows-7 gap-1">
                  {week.map((day, dayIndex) => (
                    <div
                      key={`${day.date}-${dayIndex}`}
                      className={`w-3 h-3 rounded-sm ${getColorClass(
                        day.level
                      )} hover:ring-2 hover:ring-gray-300 cursor-pointer transition-all`}
                      title={`${formatDate(day.date)}: ${
                        day.count
                      } contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>

            {/* Year label */}
            <div className="ml-4 text-sm text-gray-600 flex items-center">
              {currentYear}
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between mt-4 text-xs text-gray-600">
        <span>Less</span>
        <div className="flex gap-1">
          {[0, 1, 2, 3, 4].map((level) => (
            <div
              key={level}
              className={`w-3 h-3 rounded-sm ${getColorClass(level)}`}
            />
          ))}
        </div>
        <span>More</span>
      </div>
    </div>
  );
}
