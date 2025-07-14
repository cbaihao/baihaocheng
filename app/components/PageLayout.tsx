interface PageLayoutProps {
  title: string;
  children?: React.ReactNode;
}

export default function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <main className="w-full">
      <section className="w-full">
        <h1
          className="text-2xl font-bold mb-8 m-0 p-0 leading-tight block relative"
          style={{
            margin: 0,
            padding: 0,
            fontSize: "1.5rem",
            fontWeight: 700,
            marginBottom: "2rem",
            lineHeight: 1.25,
          }}
        >
          {title}
        </h1>

        <div className="space-y-4 relative">{children}</div>
      </section>
    </main>
  );
}
