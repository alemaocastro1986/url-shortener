import { HttpException } from "./HttpExeception";
export class InvalidDateException extends HttpException {
  constructor(message: string) {
    super(message, 422);
  }
}
