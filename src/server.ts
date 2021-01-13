import express, { Application, Request, Response, NextFunction } from "express";
import routes from "routes";

export default function createServer() {
  const app: Application = express();

  app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("Hello world!");
  });

  app.use(routes);

  return app;
}
