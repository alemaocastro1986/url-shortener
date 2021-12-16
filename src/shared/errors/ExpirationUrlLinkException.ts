import { HttpException } from "./HttpExeception";
export class ExpirationUrlLinkException extends HttpException {
  constructor() {
    super(`Your link has expired!`, 400);
  }
}
