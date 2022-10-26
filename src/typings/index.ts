export interface IBaseResponse<T = unknown> {
  code: number;
  success: boolean;
  message: string;
  data?: T;
}

export interface IMenuItem {
  id: number;
  createAt?: Date;
  updateAt?: Date;
  name: string;
  title: string;
  icon?: string;
  path: string;
  redirect?: string;
  componentFilePath: string;
  sort: number;
  enable: boolean;
  hidden: boolean;
  keepAlive: boolean;
  breadcrumb: boolean;
  parentId: number;
  children?: IMenuItem[];
}
