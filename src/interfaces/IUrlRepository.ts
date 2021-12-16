import { Url } from "../entities/url.entity";
import { StoreUrlDTO } from "./dtos/StoreUrlDTO";

export interface IUrlRepository {
  findByOriginUrl(originalUrl: string): Promise<Url | null>;
  findByHash(hash: string): Promise<Url | null>;
  store(data: StoreUrlDTO): Promise<Url>;
}
