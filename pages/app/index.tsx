import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "./layout";
import { ReactElement } from "react";
import { FaCoins } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  return (
    <>
      <Head>
        <title>SpendR</title>
        <meta
          name="description"
          content="Create budget, track spending, view your performance app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="balance-card">
          <div className="balance-card-title">
            <h2>
              <span>Available</span>
              <br />
              Balance
            </h2>

            <a href="#">
              <FaCoins className="balance-icon" />
            </a>
          </div>

          {/* <!-- CARD CONTENT --> */}
          <div className="balance-card-content">
            <div className="account-info">
              <h2 id="account-balance">
                <span className="currency">KES</span>
                300k
              </h2>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

Index.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
