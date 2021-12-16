import { IService } from "../interfaces/IService";
import { RedirectUrlShortenerInput } from "./ports/RedirectUrlShortenerInput";
import { IUrlRepository } from "../interfaces/IUrlRepository";
import { Url } from "../entities/url.entity";
import { NotFoundException } from "../shared/errors/NotFoundException";
import { isBefore } from "../shared/validations/date";
import { ExpirationUrlLinkException } from "../shared/errors/ExpirationUrlLinkException";

export class RedirectUrlShortenerService
  implements IService<RedirectUrlShortenerInput>
{
  constructor(protected urlrepository: IUrlRepository) {}

  async exec({ hash }: RedirectUrlShortenerInput): Promise<Url> {
    const existsUrl = await this.urlrepository.findByHash(hash);
    if (!existsUrl) {
      throw new NotFoundException("Hash not found");
    }

    if (
      existsUrl.expirationDate &&
      isBefore(new Date(existsUrl.expirationDate), new Date())
    ) {
      throw new ExpirationUrlLinkException();
    }
    return existsUrl;
  }
}
