import { Request, Response } from "express";
import { IController } from "../../interfaces/IController";
import { HttpException } from "../../shared/errors/HttpExeception";
export const ExpressRequestHandler = (controller: IController) => {
  return async (request: Request, response: Response) => {
    try {
      const data = {
        body: request.body,
        params: request.params,
      };

      const result = await controller.handle(data);

      if (result.status === 307) {
        return response.status(result.status).redirect(result.data);
      }
      return response.status(result.status).json(result.data);
    } catch (err) {
      if (err instanceof HttpException) {
        return response.status(err.statusCode).json({
          error: err.message,
        });
      }

      const e = err as Error;

      return response.status(500).json({ error: e.message });
    }
  };
};
