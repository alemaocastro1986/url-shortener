import "dotenv/config";

import express, { NextFunction, Request, Response } from "express";

import { MongooseDatabase } from "./infra/databases/mongo/MongoDatabase";
import { routes } from "./routes";
import { app } from "./settings";

const database = new MongooseDatabase();

const server = express();

server.use(express.json());

server.use("/api", routes);

server.use(
  (err: any, request: Request, response: Response, next: NextFunction) => {
    return response.status(400).json({
      message: "Ops!!",
    });
  }
);

database
  .connect()
  .then(() => {
    server.listen(app.port, () => {
      console.log(`Server is running on ${app.host}:${app.port}`);
    });
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
