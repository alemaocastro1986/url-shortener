import shortid from "shortid";
import { IService } from "../interfaces/IService";
import { IUrlRepository } from "../interfaces/IUrlRepository";
import { app } from "../settings";
import { InvalidDateException } from "../shared/errors/InvalidDateException";
import { isBefore, isValidDate } from "../shared/validations/date";
import { CreateUrlShortenerInput } from "./ports/CreateUrlShortenerInput";
import { CreateUrlShortenerOutput } from "./ports/CreateUrlShortenerOutput";

export class CreateUrlShortenerService implements IService {
  constructor(protected urlRepository: IUrlRepository) {}
  async exec({
    originalUrl,
    expirationDate,
  }: CreateUrlShortenerInput): Promise<CreateUrlShortenerOutput> {
    const hash = shortid.generate();
    const { host, port } = app;
    const shortUrl = `${host}:${port}/api/${hash}`;

    const existsOriginalUrl = await this.urlRepository.findByOriginUrl(
      originalUrl
    );

    if (existsOriginalUrl) {
      return existsOriginalUrl;
    }

    if (expirationDate && !isValidDate(expirationDate)) {
      throw new InvalidDateException("Invalid date format, must be a number");
    }

    if (expirationDate && isBefore(new Date(expirationDate), new Date())) {
      throw new InvalidDateException(
        "Expiration date is less than current date"
      );
    }

    const newUrl = await this.urlRepository.store({
      hash,
      shortUrl,
      originalUrl,
      expirationDate,
    });

    return newUrl;
  }
}
