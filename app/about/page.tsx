import PageLayout from "../components/PageLayout";

export default function About() {
  return (
    <PageLayout title="About">
      <p>Hey there, I&apos;m Baihao (&quot;by-how&quot;).</p>

      <p>
        My core drive is to build useful things—especially at the cutting edge
        of engineering, crypto, and AI. I spend my days deep in code, exploring
        new paradigms.
      </p>

      <p>
        Professionally, I&apos;m an engineer at{" "}
        <a
          href="https://www.circle.com/"
          className="text-gray-600 hover:text-black underline"
        >
          Circle
        </a>
        , where I work on improving{" "}
        <a
          href="https://usdc.cool/"
          className="text-gray-600 hover:text-black underline"
        >
          USDC
        </a>{" "}
        liquidity and simplifying on-ramps and off-ramps. Before this, I was an
        engineer on the Wallet team at{" "}
        <a
          href="https://www.coinbase.com/"
          className="text-gray-600 hover:text-black underline"
        >
          Coinbase
        </a>{" "}
        and a product lead at Himalaya (acquired).
      </p>

      <p>
        During college, I co-founded{" "}
        <a
          href="https://decode.build/"
          className="text-gray-600 hover:text-black underline"
        >
          DECODE
        </a>{" "}
        at UC Berkeley, an annual tech conference that hosted founders from
        Zoom, Databricks, and Tesla. I also taught UC Berkeley&apos;s first
        startup DeCal under{" "}
        <a
          href="https://scet.berkeley.edu/"
          className="text-gray-600 hover:text-black underline"
        >
          SCET
        </a>
        .
      </p>

      <p>
        This website is my digital lab—a space to share thoughts, document
        attempts, and connect with fellow builders and thinkers.
      </p>
    </PageLayout>
  );
}
