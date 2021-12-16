import { Request, Response } from "express";
import { IService } from "../interfaces/IService";
import { CreateUrlShortenerService } from "../services/CreateUrlShortenerService";
import { CreateUrlShortenerInput } from "../services/ports/CreateUrlShortenerInput";
import {
  IController,
  IRequestData,
  IResponseData,
} from "../interfaces/IController";

export class CreateUrlShortenerController
  implements IController<CreateUrlShortenerInput>
{
  protected service: IService<CreateUrlShortenerInput>;
  constructor(_service: IService<CreateUrlShortenerInput>) {
    this.service = _service;
  }
  async handle({
    body,
  }: IRequestData<CreateUrlShortenerInput>): Promise<IResponseData> {
    const result = await this.service.exec({
      originalUrl: body.originalUrl,
      expirationDate: body.expirationDate,
    });

    return {
      status: 201,
      data: result,
    };
  }
}
