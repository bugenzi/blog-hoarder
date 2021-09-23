import { MikroORM } from '@mikro-orm/core';
import path from 'path';
import { __prod__ } from './constants';
// import Post from "./src/entities/Post";
import User from './src/entities/User';

export default {
  migrations: {
    path: path.join(__dirname, './migrations'), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
  },
  entities: [User],
  dbName: 'hoarderDB',
  type: 'postgresql',
  debug: !__prod__,
  password: 'malosutra123',
  synchronize: true,
} as Parameters<typeof MikroORM.init>[0];
