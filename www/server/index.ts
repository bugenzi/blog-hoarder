import 'reflect-metadata'
// import { MikroORM } from 'mikro-orm'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import redis from 'redis'
import session from 'express-session'
import connectRedis from 'connect-redis'
import cors from 'cors'
// import mikroOrmConfig from './mikro-orm.config'
import { createConnection } from 'typeorm'
import UserResolver from './src/resolver/user'
import { MyContext } from './types'
import TestResolver from './src/resolver/test'
import { __prod__ } from './constants'
import User from './src/entities/User'

const intializeServer = async () => {
  const conn = await createConnection({
    type: 'postgres',
    url: 'postgresql://postgres:malosutra123@localhost:5432/hoarderDb2',
    logging: true,
    synchronize: true,
    entities: [User],
  })
  const app = express()

  const RedisStore = connectRedis(session)
  const redisClient = redis.createClient()
  app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))
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
  )
  const apollo = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, TestResolver],
      validate: false,
    }),
    context: ({ req, res }): MyContext => ({
      req,
      res,
      orm: conn,
    }),
  })
  await apollo.start()
  // super cool method that integrates cors body parser and playground for you
  apollo.applyMiddleware({ app, cors: false })
  app.listen(4000, () => console.log('server started at 4000'))
}

intializeServer()
