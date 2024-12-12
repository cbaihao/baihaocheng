export default function Trading() {
  return (
    <main>
      <section>
        <h1 className="text-2xl font-bold mb-8">Crypto</h1>
        <div className="space-y-4">
          <p className="text-gray-500 italic">Last updated: 2024/12/12</p>
          <p>Not financial advice. DYOR.</p>
          <p>
            I inevitably spent a lot of time looking at price chart being in
            this industry. If you want to learn about crypto trading, checkout
            these resources:
          </p>
          <p>
            <a
              href="https://www.youtube.com/watch?v=q7BVTJol0IA&list=PLvkpxFSTppmnQ7A5DP386zEKU0Tv_fatm"
              className="text-gray-600 hover:text-black underline"
            >
              CryptoCred Technical Analysis Series
            </a>{" "}
            - A comprehensive overview to the world of technical analysis.
          </p>
          <p>
            <a
              href="https://www.coinglass.com/pro/futures/LiquidationHeatMap"
              className="text-gray-600 hover:text-black underline"
            >
              BTC Liquidation Heatmap
            </a>{" "}
            - Price usually tab into liquidation zone, causing short squeeze or
            long liquidation. This fuels price volatility.
          </p>
          <p>
            <a
              href="https://www.youtube.com/@stackersatoshi"
              className="text-gray-600 hover:text-black underline"
            >
              Satoshi Stackers
            </a>{" "}
            - So far I find this channel helpful for keeping up with the latest
            market updates.
          </p>
          <p>
            <a
              href="https://www.lynalden.com/money-printing/"
              className="text-gray-600 hover:text-black underline"
            >
              Lyn Alden
            </a>{" "}
            - Understand quantitative tightening (QT) and quantitative easing
            (QE) and how they affect volatile asset prices.
          </p>
          <p>
            <a
              href="https://x.com/GCRClassic"
              className="text-gray-600 hover:text-black underline"
            >
              GCR Classic
            </a>{" "}
            - Probably nothing.
          </p>
          <p>
            <a
              href="https://www.youtube.com/@CoinBureau"
              className="text-gray-600 hover:text-black underline"
            >
              Coin Bureau
            </a>{" "}
            - It&apos;s a cliché to recommend this one, but if a project makes
            it to this channel, it&apos;s likely not a rug pull.
          </p>
        </div>
      </section>
    </main>
  );
}
