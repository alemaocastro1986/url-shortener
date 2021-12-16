import { Router } from "express";
import { CreateUrlShortenerController } from "./controllers/CreateUrlShortenerController";
import { CreateUrlShortenerService } from "./services/CreateUrlShortenerService";
import { ExpressRequestHandler } from "./adapters/web/ExpressRequestHandler";
import { CreateUrlShortenerFactory } from "./factories/CreateUrlShortenerFactory";
import { RedirectUrlShortenerFactory } from "./factories/RedirectUrlShortenerFactory";

const routes = Router();

routes.post(
  "/shorten",
  ExpressRequestHandler(CreateUrlShortenerFactory.build())
);
routes.get(
  "/:hash",
  ExpressRequestHandler(RedirectUrlShortenerFactory.build())
);

export { routes };
