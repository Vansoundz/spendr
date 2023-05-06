import { User } from "@/lib/models";
import "@/styles/globals.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  gql,
  useQuery,
} from "@apollo/client";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import { UserProvider, useUser } from "@auth0/nextjs-auth0/client";
import Loading from "@/lib/ui/components/shared/Loading";
import Link from "next/link";

const GET_USER = gql`
  query Query($id: ID!) {
    user(id: $id) {
      nickname
      name
      email
      logins_count
    }
  }
`;

const client = new ApolloClient({
  uri: "/api/graphql",
  cache: new InMemoryCache(),
});

const UserDataLoader: FC<PropsWithChildren> = ({ children }) => {
  const { user, error, isLoading } = useUser();

  const router = useRouter();

  const {
    loading,
    data,
    error: err,
  } = useQuery<{ user: User }>(GET_USER, {
    variables: {
      id: user?.sub,
    },
    skip: !user,
  });

  useEffect(() => {
    if (data) {
      router.push("app");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (isLoading || loading) return <Loading />;

  if (error) {
    return <>{error?.message || err?.message}</>;
  }

  return <>{user ? children : <Link href="/api/auth/login">Login</Link>}</>;
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <UserDataLoader>
          <Component {...pageProps} />
        </UserDataLoader>
      </UserProvider>
    </ApolloProvider>
  );
}
