import { ResolversType, TodoType } from "./types";
import { typeDefs } from "./grafql/schema";
import { resolvers } from "./grafql/resolver";
import { sequelize } from "./database/db";
const { ApolloServer, gql } = require("apollo-server");
const models = require("./database/models");
const server = new ApolloServer({ typeDefs, resolvers });

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    server.listen().then(({ url }: { url: number }) => {
      console.log(`🚀  Server ready at ${url}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
