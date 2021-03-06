/* eslint-disable no-unused-vars */
import { Request, Response } from 'express'
import { Redis } from 'ioredis'
import { Connection } from 'typeorm'

export type MyContext = {
  req: Request
  res: Response
  orm: Connection
  redis: Redis
}

// ----- Helps with the fixing anyoing bug with req and sessions

declare module 'express-session' {
  interface Session {
    userId: number
  }
}
