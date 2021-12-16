import { RedirectUrlShortenerController } from "../controllers/RedirectUrlShortenerController";
import { IController } from "../interfaces/IController";
import { RedirectUrlShortenerService } from "../services/RedirectUrlShortenerService";
import { UrlRepository } from "../adapters/data/mongo/UrlRepository";
import { UrlModel } from "../infra/databases/mongo/schemas/url.schema";

export class RedirectUrlShortenerFactory {
  static build(): IController {
    const repository = new UrlRepository(UrlModel);
    const service = new RedirectUrlShortenerService(repository);
    return new RedirectUrlShortenerController(service);
  }
}
