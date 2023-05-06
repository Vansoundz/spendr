import Head from "next/head";
import { Inter } from "next/font/google";
import { FC, PropsWithChildren } from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { user, error, isLoading } = useUser();

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
        <p>
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
        </p>
        {children}
      </main>
    </>
  );
};

export default Layout;
