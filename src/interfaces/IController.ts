import { Request, Response } from "express";

export type IRequestData<TBody = any, TParams = any> = {
  body: TBody;
  params: TParams;
};

export type IResponseData = {
  status: number;
  data: any;
};

export interface IController<TBody = any, TParams = any> {
  handle(data: IRequestData<TBody, TParams>): Promise<IResponseData>;
}
