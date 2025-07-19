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
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [tooltip, setTooltip] = useState<{
    show: boolean;
    x: number;
    y: number;
    content: string;
  }>({ show: false, x: 0, y: 0, content: "" });

  useEffect(() => {
    const loadContributions = async () => {
      try {
        const response = await fetch("/contributions.json");
        const data: ContributionData = await response.json();

        const processedData: ContributionDay[] = [];
        const yearData = data[selectedYear.toString()] || {};

        // Generate full year (52 weeks starting from first Sunday of year)
        const startOfYear = new Date(selectedYear, 0, 1);
        const firstSunday = new Date(startOfYear);
        const dayOfWeek = startOfYear.getDay();
        firstSunday.setDate(startOfYear.getDate() - dayOfWeek);

        for (let week = 0; week < 52; week++) {
          for (let day = 0; day < 7; day++) {
            const currentDate = new Date(firstSunday);
            currentDate.setDate(firstSunday.getDate() + week * 7 + day);
            const dateStr = currentDate.toISOString().split("T")[0];

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
        }

        setContributions(processedData);
      } catch (error) {
        console.error("Failed to load contributions:", error);
      } finally {
        setLoading(false);
      }
    };

    loadContributions();
  }, [selectedYear]);

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

  const formatTooltipDate = (dateStr: string): string => {
    const date = new Date(dateStr);
    const month = date.toLocaleDateString("en-US", { month: "long" });
    const day = date.getDate();

    // Add ordinal suffix (1st, 2nd, 3rd, etc.)
    const getOrdinalSuffix = (day: number): string => {
      if (day >= 11 && day <= 13) return "th";
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    return `${month} ${day}${getOrdinalSuffix(day)}`;
  };

  const handleMouseEnter = (event: React.MouseEvent, day: ContributionDay) => {
    const count = day.count;
    const dateStr = formatTooltipDate(day.date);
    const content = `${count} contribution${
      count !== 1 ? "s" : ""
    } on ${dateStr}`;

    setTooltip({
      show: true,
      x: event.clientX,
      y: event.clientY - 40,
      content,
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ show: false, x: 0, y: 0, content: "" });
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

  const availableYears = [2024, 2025]; // Add years as you add data

  // Generate month labels for the selected year (Jan-Dec)
  const getMonthLabels = (): Array<{ weekIndex: number; label: string }> => {
    const monthLabels: Array<{ weekIndex: number; label: string }> = [];

    // Calculate approximate week positions for each month
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    monthNames.forEach((monthName, monthIndex) => {
      // More accurate week calculation based on actual month positions
      const monthStart = new Date(selectedYear, monthIndex, 1);
      const yearStart = new Date(selectedYear, 0, 1);
      const firstSunday = new Date(yearStart);
      firstSunday.setDate(yearStart.getDate() - yearStart.getDay());

      const daysDiff = Math.floor(
        (monthStart.getTime() - firstSunday.getTime()) / (1000 * 60 * 60 * 24)
      );
      const weekIndex = Math.floor(daysDiff / 7);

      if (weekIndex >= 0 && weekIndex < 52) {
        monthLabels.push({
          weekIndex,
          label: monthName,
        });
      }
    });

    return monthLabels;
  };

  const monthLabels = getMonthLabels();

  return (
    <div className="space-y-4">
      {/* Year Selector */}
      <div className="flex justify-end">
        <div className="flex gap-2">
          {availableYears.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                selectedYear === year
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* Contribution Tracker */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-900">
            {totalContributions} contributions in {selectedYear}
          </h3>
        </div>

        {/* Contribution Grid with month labels */}
        <div className="overflow-x-auto">
          <div className="relative">
            {/* Month labels */}
            <div className="relative mb-2 text-xs text-gray-600 ml-8 h-4">
              {monthLabels.map((month) => (
                <div
                  key={`${month.weekIndex}-${month.label}`}
                  className="absolute"
                  style={{ left: `${month.weekIndex * 14}px` }}
                >
                  {month.label}
                </div>
              ))}
            </div>

            <div className="flex">
              {/* Day labels */}
              <div
                className="flex flex-col text-xs text-gray-600 mr-2 justify-around"
                style={{ height: "76px" }}
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
                        className={`w-2.5 h-2.5 rounded-sm ${getColorClass(
                          day.level
                        )} hover:ring-2 hover:ring-gray-300 cursor-pointer transition-all`}
                        onMouseEnter={(e) => handleMouseEnter(e, day)}
                        onMouseLeave={handleMouseLeave}
                      />
                    ))}
                  </div>
                ))}
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
                className={`w-2.5 h-2.5 rounded-sm ${getColorClass(level)}`}
              />
            ))}
          </div>
          <span>More</span>
        </div>
      </div>

      {/* Custom Tooltip */}
      {tooltip.show && (
        <div
          className="fixed z-50 px-2 py-1 text-xs text-white bg-black rounded shadow-md pointer-events-none"
          style={{
            left: `${tooltip.x}px`,
            top: `${tooltip.y}px`,
            transform: "translateX(-50%)",
          }}
        >
          {tooltip.content}
        </div>
      )}
    </div>
  );
}
