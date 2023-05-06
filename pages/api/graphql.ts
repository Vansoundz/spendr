import resolvers from "@/lib/api/graphql/resolvers";
import typeDefs from "@/lib/api/graphql/schema";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: true,
  },
};

export default startServerAndCreateNextHandler(apolloServer);
