import { model, Schema } from "mongoose";
import { Url } from "../../../../entities/url.entity";

const schema = new Schema<Url>({
  hash: { type: String, required: true, unique: true },
  originalUrl: { type: String, required: true },
  shortUrl: { type: String, required: true, unique: true },
  expirationDate: { type: Number, required: false, default: 0 },
});

export const UrlModel = model<Url>("Url", schema);
