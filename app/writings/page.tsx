import PageLayout from "../components/PageLayout";

export default function Writings() {
  const articles = [
    {
      title: "AI token arbitrage",
      date: "August 10, 2025",
      slug: "ai-token-arbitrage",
    },
    {
      title: "Accumulating Time",
      date: "July 24, 2025",
      slug: "accumulating-time",
    },
    {
      title: "Wanting, Being, and the Paradox",
      date: "July 22, 2025",
      slug: "embody-what-you-seek",
    },
    {
      title: "The opposite of hindsight",
      date: "July 14, 2025",
      slug: "the-opposite-of-hindsight",
    },
    {
      title: "History is made by those who failed well",
      date: "June 30, 2025",
      slug: "history-is-made-by-those-who-failed-well",
    },
  ];

  return (
    <PageLayout title="Drafts">
      <ul className="space-y-2 list-none">
        {articles.map((article) => (
          <li key={article.slug} className="flex items-start">
            <span className="text-gray-600 mr-2">-</span>
            <a
              href={`/writings/${article.slug}`}
              className="text-gray-600 hover:text-black underline"
            >
              {article.title} - {article.date}
            </a>
          </li>
        ))}
      </ul>
    </PageLayout>
  );
}
