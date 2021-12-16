import { Either, Left } from "../shared/utils/either";

export interface IService<TInput = any> {
  exec(data: TInput): Promise<any>;
}
