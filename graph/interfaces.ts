
export interface IBaseDbSchema {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface ITransaction extends IBaseDbSchema {
  from: string;
  to: string;
  type: string;
  state: string;
}

export interface IUserSchema extends IBaseDbSchema {
  name: string;
  email: string;
}

export interface AdjacenyList {
  node: IUserSchema;
  weight: number;
}
