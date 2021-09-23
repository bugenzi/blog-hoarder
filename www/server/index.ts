import 'reflect-metadata';
import { MikroORM } from 'mikro-orm';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import redis from 'redis';
import session from 'express-session';
import connectRedis from 'connect-redis';
import mikroOrmConfig from './mikro-orm.config';
import UserResolver from './src/resolver/user';
import { MyContext } from './types';
import TestResolver from './src/resolver/test';
import { __prod__ } from './constants';

const intializeServer = async () => {
  const orm = await MikroORM.init(mikroOrmConfig);
  await orm.getMigrator().up();

  const app = express();

  const RedisStore = connectRedis(session);
  const redisClient = redis.createClient();

  app.use(
    session({
      name: 'qid',
      store: new RedisStore({
        client: redisClient,
        disableTouch: false,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
        httpOnly: true,
        sameSite: 'lax',
        secure: __prod__,
      },
      saveUninitialized: false,
      secret: 'salamasalamagolemasalama',
      resave: false,
    })
  );
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
