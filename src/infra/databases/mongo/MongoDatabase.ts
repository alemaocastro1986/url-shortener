import mongoose from "mongoose";
import { databases } from "../../../settings";

export class MongooseDatabase {
  async connect(): Promise<void> {
    try {
      await mongoose.connect(databases.mongoUri);
    } catch (err) {
      const e = err as Error;
      throw new Error(e.message);
    }
  }
}
