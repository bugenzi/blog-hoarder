// // express boilerplate typescript

// import express from 'express';
// import  bodyParser from 'body-parser';
import 'reflect-metadata';
import { MikroORM } from 'mikro-orm';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import mikroOrmConfig from './mikro-orm.config';
import UserResolver from './src/resolver/user';
import { MyContext } from './types';
import TestResolver from './src/resolver/test';

const intializeServer = async () => {
  const orm = await MikroORM.init(mikroOrmConfig);
  await orm.getMigrator().up();
  const app = express();

  const apollo = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, TestResolver],
      validate: false,
    }),
    context: ({ req, res }): MyContext => ({ req, res, em: orm.em }),
  });
  await apollo.start();
  // super cool method that integrates cors body parser and playground for you
  apollo.applyMiddleware({ app });
  app.listen(4000, () => console.log('server started at 4000'));
};

intializeServer();
