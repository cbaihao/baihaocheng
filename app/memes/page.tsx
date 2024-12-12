import Image from "next/image";

export default function Memes() {
  return (
    <main>
      <section>
        <h1 className="text-2xl font-bold mb-8">Memes</h1>
        <div className="space-y-4">
          <p>I always have trouble finding a meme that I saw a while ago.</p>
          <div className="relative w-full h-[500px]">
            <Image
              src="/meme_3.jpg"
              alt="Crypto meme"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="relative w-full h-[500px]">
            <Image
              src="/meme_2.jpg"
              alt="Crypto meme"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
}
