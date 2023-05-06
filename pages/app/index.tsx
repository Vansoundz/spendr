import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "./layout";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>SpendR</title>
        <meta
          name="description"
          content="Create budget, track spending, view your performance app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>INDEX</main>
    </Layout>
  );
}
