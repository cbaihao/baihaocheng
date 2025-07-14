import Link from "next/link";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Sample article data - in a real app, this would come from a CMS or database
const articles = {
  "building-personal-website-nextjs": {
    title: "Building a Personal Website with Next.js",
    date: "2024-01-15",
    content: `
      <p>Building a personal website is one of the best ways to showcase your work and share your thoughts with the world. In this article, I'll walk you through the process of creating a modern, responsive website using Next.js.</p>
      
      <h2>Why Next.js?</h2>
      <p>Next.js offers several advantages for building personal websites:</p>
      <ul>
        <li>Server-side rendering for better performance</li>
        <li>Built-in routing system</li>
        <li>Excellent developer experience</li>
        <li>Easy deployment with Vercel</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>The first step is to create a new Next.js project. You can do this by running:</p>
      <pre><code>npx create-next-app@latest my-website</code></pre>
      
      <p>This will set up a new Next.js project with all the necessary dependencies and configuration.</p>
      
      <h2>Conclusion</h2>
      <p>Building a personal website with Next.js is a rewarding experience that allows you to showcase your skills and personality. With its modern features and excellent performance, Next.js is an excellent choice for developers looking to create a professional web presence.</p>
    `,
  },
  "exploring-ascii-art-web-development": {
    title: "Exploring ASCII Art in Web Development",
    date: "2024-01-10",
    content: `
      <p>ASCII art has been around since the early days of computing, but it's experiencing a renaissance in modern web development. This article explores how to integrate ASCII art into your web projects.</p>
      
      <h2>What is ASCII Art?</h2>
      <p>ASCII art is a form of text-based art that uses printable characters to create images. It was originally developed as a way to create visual content using only text characters.</p>
      
      <h2>Modern Applications</h2>
      <p>Today, ASCII art can be used in various ways:</p>
      <ul>
        <li>Terminal-style interfaces</li>
        <li>Retro gaming aesthetics</li>
        <li>Console logging for debugging</li>
        <li>Unique visual elements in web design</li>
      </ul>
      
      <h2>Implementation</h2>
      <p>There are several libraries and tools available for generating ASCII art programmatically. Three.js, for example, includes an ASCII effect that can convert 3D scenes into ASCII representations.</p>
      
      <p>This technique opens up exciting possibilities for creating unique, eye-catching web experiences that stand out from the crowd.</p>
    `,
  },
  "future-web3-blockchain": {
    title: "The Future of Web3 and Blockchain",
    date: "2024-01-05",
    content: `
      <p>Web3 and blockchain technologies are reshaping the digital landscape. As we move forward, these technologies promise to create a more decentralized, user-controlled internet.</p>
      
      <h2>Key Developments</h2>
      <p>Several key developments are driving the Web3 revolution:</p>
      <ul>
        <li>Decentralized finance (DeFi) platforms</li>
        <li>Non-fungible tokens (NFTs)</li>
        <li>Decentralized autonomous organizations (DAOs)</li>
        <li>Layer 2 scaling solutions</li>
      </ul>
      
      <h2>Challenges and Opportunities</h2>
      <p>While Web3 presents exciting opportunities, it also faces significant challenges including scalability, user experience, and regulatory uncertainty. However, the potential for creating a more open and equitable internet continues to drive innovation in this space.</p>
      
      <h2>Looking Ahead</h2>
      <p>The future of Web3 will likely involve greater integration with traditional web technologies, improved user experiences, and more practical applications that solve real-world problems.</p>
    `,
  },
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles[slug as keyof typeof articles];

  if (!article) {
    return (
      <main>
        <section>
          <h1 className="text-2xl font-bold mb-8">Article Not Found</h1>
          <p>The article you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/writings"
            className="text-gray-600 hover:text-black underline"
          >
            ← Back to Writing
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section>
        <div className="mb-8">
          <Link
            href="/writings"
            className="text-gray-600 hover:text-black underline text-sm"
          >
            ← Back to Writing
          </Link>
        </div>

        <article>
          <header className="mb-8">
            <h1 className="text-2xl font-bold mb-4">{article.title}</h1>
            <p className="text-gray-600">{article.date}</p>
          </header>

          <div
            className="prose prose-gray max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>
      </section>
    </main>
  );
}
