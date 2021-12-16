export class HttpException extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number = 400) {
    super(message);
    this.statusCode = statusCode;
    this.name = "HttpException";
    Object.setPrototypeOf(this, HttpException.prototype);
  }
}
