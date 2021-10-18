import 'reflect-metadata'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import Redis from 'ioredis'
import session from 'express-session'
import connectRedis from 'connect-redis'
import cors from 'cors'
import { createConnection } from 'typeorm'
import dotenv from 'dotenv'
import path from 'path'
import UserResolver from './src/resolver/user'
import { MyContext } from './types'
import TestResolver from './src/resolver/test'
import { __prod__ } from './constants'
import User from './src/entities/User'
import Blog from './src/entities/Blog'
import BlogResolver from './src/resolver/blog'
// dotenv.config()
const intializeServer = async () => {
  dotenv.config()
  const PORT = process.env.PORT || '4000'
  const conn = await createConnection({
    type: 'postgres',
    url: process.env.DB_URL,
    logging: true,
    synchronize: true,
    entities: [User, Blog],
    migrations: [path.join(__dirname, './migrations/*')],
  })

  // await conn.runMigrations()

  const app = express()
  const maxAge = 1000 * 60 * 60 * 24 * 365 * 10
  const RedisStore = connectRedis(session)
  const redisClient = new Redis()
  app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }))
  app.use(
    session({
      name: 'qid',
      store: new RedisStore({
        client: redisClient,
        disableTouch: false,
      }),
      cookie: {
        maxAge: Number(process.env.SESSION_AGE) || maxAge,
        httpOnly: true,
        sameSite: 'lax',
        secure: __prod__,
      },
      saveUninitialized: false,
      secret: process.env.SESSION_SECRET,
      resave: false,
    })
  )
  const apollo = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, TestResolver, BlogResolver],
      validate: false,
    }),
    context: ({ req, res }): MyContext => ({
      req,
      res,
      orm: conn,
      redis: redisClient,
    }),
  })
  await apollo.start()
  // super cool method that integrates cors body parser and playground for you
  apollo.applyMiddleware({ app, cors: false })
  app.listen(PORT || 4000, () => console.log('server started at 4000'))
}

intializeServer()
