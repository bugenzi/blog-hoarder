// // express boilerplate typescript

// import express from 'express';
// import  bodyParser from 'body-parser';
import "reflect-metadata";
import { MikroORM } from "mikro-orm";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import mikroOrmConfig from "./mikro-orm.config";
import UserResolver from "./src/resolver/user";

const intializeServer = async () => {
  const orm = await MikroORM.init(mikroOrmConfig);
  await orm.getMigrator().up();
  const app = express();

  const schema = await buildSchema({
    resolvers: [UserResolver],
    validate: false,
  });
  const apollo = new ApolloServer({ schema });
  await apollo.start();
  apollo.applyMiddleware({ app });
  app.listen(4000, () => console.log("server started at 4000"));
};

intializeServer();
