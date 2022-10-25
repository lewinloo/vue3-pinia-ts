export interface IBaseResponse<T = unknown> {
  code: number;
  success: boolean;
  message: string;
  data?: T;
}
