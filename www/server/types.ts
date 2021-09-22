import { Connection, EntityManager, IDatabaseDriver } from "@mikro-orm/core";
import { Request, Response } from "express";

export type MyContext = {
  em: EntityManager<IDatabaseDriver<Connection>>;
  req: Request;
  res: Response;
};

// ----- Helps with the fixing anyoing bug with req

// declare module "express-session" {
//   interface Session {
//     userId: number;
//   }
// }
