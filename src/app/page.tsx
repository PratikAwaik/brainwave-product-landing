import Head from "next/head";
import { Header } from "./components/header";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Brainwave - Product</title>
        <meta name="description" content="Description of your landing page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        {/* Hero section */}
        <section className="w-full h-[calc(100vh-72px)] flex items-center flex-col justify-center gap-y-20">
          <Image
            src="/images/airpod.webp"
            alt="Airpods"
            width={356}
            height={300}
          />
          <div className="flex flex-col gap-y-8 justify-center items-center max-w-4xl">
            <p className="text-theme-red text-xs font-bold uppercase">
              Non-stop music for long time
            </p>
            <h1 className="font-bold text-6xl">Sound, that sounds better!</h1>
            <h3 className="text-xl text-center opacity-70">
              With lots of unique blocks, you can easily build a page without
              coding. <br /> Build your next consultancy website within few
              minutes.
            </h3>
            <Button>Buy now - Starting at $99</Button>
            <Link href={"#"} className="uppercase font-bold text-xs">
              Watch in action
            </Link>
          </div>
        </section>
        {/* Hero section end */}

        {/* listen music anytime */}
        <section className="w-full h-screen flex items-center bg-theme-gray">
          <div className="w-2/5 h-full relative">
            <Image
              src="/images/runner.webp"
              alt="A male athlete running"
              fill
              objectFit="cover"
            />
          </div>
          <div className="w-3/5 flex items-center justify-center">
            <div className="max-w-xl m-auto flex flex-col items-start gap-y-20">
              <div className="flex flex-col gap-y-6">
                <h2 className="font-bold text-5xl">
                  Listen music <br />
                  anytime, anywhere.
                </h2>
                <p className="text-lg">
                  We share common trends and strategies for <br /> improving
                  your rental income.
                </p>
              </div>
              <div className="flex items-center justify-between gap-x-4">
                <div className="flex items-start gap-x-6">
                  <div className="relative shrink-0">
                    <Image
                      src="/images/earbuds.svg"
                      alt="Earbuds"
                      width={42}
                      height={40}
                    />
                    <div className="absolute bg-primary opacity-30 w-10 h-10 rounded-full top-3 -right-3" />
                  </div>
                  <div className="flex flex-col gap-y-4">
                    <h3 className="font-bold text-xl">Comfortable Buds</h3>
                    <p className="text-base opacity-70">
                      With lots of unique blocks, you can easily build a page
                      without coding.{" "}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-x-6">
                  <div className="relative shrink-0">
                    <Image
                      src="/images/soundwave.svg"
                      alt="Soundwave"
                      width={42}
                      height={40}
                    />
                    <div className="absolute bg-theme-red opacity-30 w-9 h-9 rounded-full top-3 -right-1" />
                  </div>
                  <div className="flex flex-col gap-y-4">
                    <h3 className="font-bold text-xl">Powerful Bass</h3>
                    <p className="text-base opacity-70">
                      With lots of unique blocks, you can easily build a page
                      without coding.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* listen music anytime end */}

        {/* comfortable buds */}
        <section className="w-full h-screen flex items-center bg-primary text-white ">
          <div className="w-3/5 h-full flex items-center justify-center">
            <div className="max-w-md m-auto flex flex-col items-start gap-y-20">
              <div className="flex flex-col gap-y-6">
                <h2 className="font-bold text-5xl">
                  Comfortable buds <br />
                  with better sound.
                </h2>
                <p className="text-lg opacity-65">
                  We share common trends and strategies for <br /> improving
                  your rental income.
                </p>
              </div>
              <div className="flex items-start gap-x-4">
                <Image
                  src="/images/reviewer-pic.svg"
                  alt="Rhoda Brady profile picture"
                  width={54}
                  height={54}
                  className="shrink-0"
                />
                <div className="flex flex-col gap-y-4">
                  <p className="text-xl">
                    “You made it so simple. My new site is so much faster and
                    easier to work with than my old site.”
                  </p>
                  <p className="font-bold text-sm">Rhoda Brady</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/5 h-full relative">
            <Image
              src="/images/happy-man.webp"
              alt="Man excited wearing earbuds and looking at his laptop"
              fill
              objectFit="cover"
            />
          </div>
        </section>
        {/* comfortable buds end */}

        {/* trendy designs */}
        <section className="w-full h-screen flex items-center justify-center bg-theme-midnight text-white relative">
          <div className="flex flex-col gap-y-20 items-center">
            <div className="flex flex-col gap-y-10 items-center">
              <h2 className="font-bold text-5xl text-center">
                Trendy designs with <br /> better sound quality.
              </h2>
              <p className="text-lg opacity-65 text-center">
                We share common trends and strategies for <br /> improving your
                rental income.
              </p>
            </div>
            <div className="relative w-full h-80">
              <Image
                src="/images/left-earbud.webp"
                alt="Left earbud"
                width={214}
                height={306}
                className="absolute top-0 left-[10%]"
              />
              <Image
                src="/images/right-earbud.webp"
                alt="Right earbud"
                width={214}
                height={306}
                className="absolute top-1/3 left-1/2"
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 h-2/3 w-full">
            <div className="relative h-full w-full">
              <Image src="/images/music-wave.webp" alt="Music wave" fill />
            </div>
          </div>
        </section>
        {/* trendy designs end */}

        {/* products */}
        <section className="w-full h-screen flex items-center justify-center">
          <div className="flex flex-col gap-y-20 items-center">
            <div className="flex flex-col gap-y-6">
              <h2 className="font-bold text-5xl">Get your airpod now.</h2>
              <p className="text-lg opacity-70 text-center">
                We share common trends and strategies for <br /> improving your
                rental income.
              </p>
            </div>
            <div className="flex items-center gap-x-40">
              {products.map((product, index) => (
                <div key={index} className="flex flex-col gap-y-8 items-center">
                  <Image
                    src={product.imageSrc}
                    alt={product.name}
                    width={220}
                    height={150}
                  />
                  <h3 className="font-bold text-xl">{product.name}</h3>
                  <p className="opacity-70 text-center max-w-64">
                    {product.description}
                  </p>
                  <Button>Buy now - ${product.price}</Button>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* products end */}

        <section className="w-full h-screen flex items-center justify-center relative">
          <Image
            src="/images/all-earphones.webp"
            alt="All earphones display"
            fill
            objectFit="cover"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

const products = [
  {
    imageSrc: "/images/products/midnight-green.webp",
    name: "Midnight Green",
    description: "AirPods (2nd gen) iPhone Colors with Wireless Charging Case",
    price: 99,
  },
  {
    imageSrc: "/images/products/silver.webp",
    name: "Silver",
    description: "AirPods (2nd gen) iPhone Colors with Wireless Charging Case",
    price: 99,
  },
  {
    imageSrc: "/images/products/gold.webp",
    name: "Gold",
    description: "AirPods (2nd gen) iPhone Colors with Wireless Charging Case",
    price: 99,
  },
];
