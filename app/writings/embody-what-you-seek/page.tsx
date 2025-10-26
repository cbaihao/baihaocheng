import PageLayout from "../../components/PageLayout";
import { getArticleContent } from "../../../lib/content";

export default function EmbodyWhatYouSeek() {
  const content = getArticleContent("wanting-being-paradox.txt");

  return (
    <PageLayout title="Wanting, being, and the paradox" showBackButton>
      <div className="prose prose-gray max-w-none">
        <div className="text-gray-600 text-sm mb-8">July 22, 2025</div>
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
            }
            return null;
          })}
        </div>
      </div>
    </PageLayout>
  );
}
