import { Model } from "mongoose";
import { Url } from "../../../entities/url.entity";
import { StoreUrlDTO } from "../../../interfaces/dtos/StoreUrlDTO";
import { IUrlRepository } from "../../../interfaces/IUrlRepository";

export class UrlRepository implements IUrlRepository {
  constructor(private model: Model<Url>) {}

  async findByOriginUrl(originalUrl: string) {
    const url = await this.model.findOne({
      originalUrl,
    });

    if (!url) {
      return null;
    }

    return url;
  }

  async findByHash(hash: string): Promise<Url | null> {
    const url = await this.model.findOne({
      hash,
    });

    if (!url) {
      return null;
    }

    return url;
  }

  async store(data: StoreUrlDTO) {
    const newUrl = await this.model.create(data);
    return newUrl;
  }
}
