import Head from "next/head";
import { Header } from "./components/header";

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
    </>
  );
}
