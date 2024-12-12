export default function Home() {
  return (
    <main>
      <section id="about">
        <h1 className="text-2xl font-bold mb-8">About</h1>

        <div className="space-y-4">
          <p>
            Hi! I&apos;m Baihao (&quot;by-how&quot;). I am interested in
            engineering, crypto, and building useful products. I spent most of
            my time writing codes and researching about blockchain, aka looking
            at prices chart.{" "}
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
            liquidity and simplifying onramp and offramp. Previously, I was an
            engineer at{" "}
            <a
              href="https://www.coinbase.com/"
              className="text-gray-600 hover:text-black underline"
            >
              Coinbase
            </a>{" "}
            on the wallet team and product lead at Himalaya (acq.).
          </p>

          <p>
            During my time at UC Berkeley, I cofounded{" "}
            <a
              href="https://decode.build/"
              className="text-gray-600 hover:text-black underline"
            >
              DECODE
            </a>
            , an annual tech conference spanning UC Berkeley and Stanford.
            We&apos;ve hosted founders from Zoom, Databricks, Tesla, Brex, etc.
            I also taught the first startup DeCal under{" "}
            <a
              href="https://scet.berkeley.edu/"
              className="text-gray-600 hover:text-black underline"
            >
              SCET
            </a>{" "}
            .
          </p>

          <p>Making this website for fun.</p>
        </div>
      </section>
    </main>
  );
}
