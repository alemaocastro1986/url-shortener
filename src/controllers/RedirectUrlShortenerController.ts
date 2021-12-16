import { IService } from "../interfaces/IService";
import {
  IController,
  IRequestData,
  IResponseData,
} from "../interfaces/IController";
export class RedirectUrlShortenerController implements IController {
  constructor(protected service: IService) {}

  async handle({ params }: IRequestData): Promise<IResponseData> {
    const { hash } = params;
    const result = await this.service.exec({ hash });

    return {
      status: 307,
      data: result.originalUrl,
    };
  }
}
