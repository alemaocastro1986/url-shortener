import mongoose from "mongoose";

export class MongooseDatabase {
  async connect(): Promise<void> {
    try {
      await mongoose.connect("mongodb://localhost:27017/shortener-url");
    } catch (err) {
      const e = err as Error;
      throw new Error(e.message);
    }
  }
}
