import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import Header from "@/lib/ui/components/shared/Header";

const Layout: FC<PropsWithChildren> = ({ children }) => {
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
        <Header />
        {/* <p>
          Layout <Link href="/api/auth/logout">Logout</Link>
        </p>
        <p>{user?.nickname}</p>
        <p>
          <Image
            src={user?.picture!}
            alt={user?.nickname!}
            width={100}
            height={100}
          />
        </p> */}
        <section id="app-container">{children}</section>
      </main>
    </>
  );
};

export default Layout;
