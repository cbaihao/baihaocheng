export default function Home() {
  return (
    <main>
      <section id="about">
        <h1 className="text-2xl font-bold mb-8">About</h1>

        <div className="space-y-4">
          <p>
            Hi! I'm Baihao ("by-how"). I am interested in engineering, crypto,
            and building useful products. I spent most of my time writing codes
            and researching about blockchain, by which I mean looking at prices
            chart.{" "}
          </p>

          <p>
            I am currently an engineer at{" "}
            <a
              href="https://www.circle.com/"
              className="text-gray-600 hover:text-black underline"
            >
              Circle
            </a>
            , where I focus on improving{" "}
            <a
              href="https://usdc.cool/"
              className="text-gray-600 hover:text-black underline"
            >
              USDC
            </a>{" "}
            liquidity and simplifying onramp and offramp. Prev. I was an
            engineer at{" "}
            <a
              href="https://www.coinbase.com/"
              className="text-gray-600 hover:text-black underline"
            >
              Coinbase
            </a>{" "}
            on the wallet team and product lead at Himalaya, an acq. ed-tech
            startup.
          </p>

          <p>
            During my time at UC Berkeley, I cofounded{" "}
            <a
              href="https://decode.build/"
              className="text-gray-600 hover:text-black underline"
            >
              DECODE
            </a>
            , an annual tech conference in UC Berkeley and Stanford. We've
            hosted founders from Zoom, Databricks, Tesla, Brex, and etc. I also
            taught a course on startup under{" "}
            <a
              href="https://scet.berkeley.edu/"
              className="text-gray-600 hover:text-black underline"
            >
              SCET
            </a>{" "}
            , although I knew absolutely nothing about it.
          </p>

          <p>
            I'm making this website because I realized AI can create one for me,
            so why not!
          </p>
        </div>
      </section>
    </main>
  );
}
