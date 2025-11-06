import PageLayout from "../../components/PageLayout";
import { getArticleContent } from "../../../lib/content";

export default function StateOfBeing() {
  const content = getArticleContent("state-of-being.txt");

  return (
    <PageLayout title="State of Being" showBackButton>
      <div className="prose prose-gray max-w-none">
        <div className="text-gray-600 text-sm mb-8">November 6, 2025</div>
        <div className="text-gray-700 leading-relaxed space-y-6">
          {content.map((section, index) => {
            if (section.type === "paragraph") {
              return (
                <p
                  key={index}
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              );
            } else if (section.type === "bulletlist") {
              return (
                <ul key={index} className="list-disc ml-6 space-y-2">
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
