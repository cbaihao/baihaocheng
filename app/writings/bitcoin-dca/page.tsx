import PageLayout from "../../components/PageLayout";
import { getArticleContent } from "../../../lib/content";

export default function BitcoinDCA() {
  const content = getArticleContent("bitcoin-dca.txt");

  return (
    <PageLayout
      title="The math behind bitcoin dollar cost averaging"
      showBackButton
    >
      <div className="prose prose-gray max-w-none">
        <div className="text-gray-600 text-sm mb-8">October 23, 2025</div>
        <div className="text-gray-700 leading-relaxed">
          {content.map((section, index) => {
            if (section.type === "paragraph") {
              return (
                <p
                  key={index}
                  className="mb-4"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              );
            } else if (section.type === "bulletlist") {
              return (
                <ul key={index} className="list-disc ml-6 space-y-1 mb-4">
                  {section.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  ))}
                </ul>
              );
            } else if (section.type === "subtitle") {
              return (
                <p key={index} className="font-bold mb-8 mt-8">
                  {section.content}
                </p>
              );
            }
            return null;
          })}
        </div>
      </div>
    </PageLayout>
  );
}
