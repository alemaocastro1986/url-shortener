import { CreateUrlShortenerService } from "../services/CreateUrlShortenerService";
import { IController } from "../interfaces/IController";
import { CreateUrlShortenerController } from "../controllers/CreateUrlShortenerController";
import { UrlRepository } from "../adapters/data/mongo/UrlRepository";
import { UrlModel } from "../infra/databases/mongo/schemas/url.schema";

export class CreateUrlShortenerFactory {
  static build(): IController {
    const repository = new UrlRepository(UrlModel);
    const service = new CreateUrlShortenerService(repository);
    return new CreateUrlShortenerController(service);
  }
}
