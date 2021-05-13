import { Model, WhereOptions } from "sequelize/types";

export type TodoType = { todo: string; checked: boolean; id: number };

type QueryType = {
  getAllToDo: () => Promise<Model<any, any>[]>;
  getToDo: (
    parents: null,
    { id }: { id: WhereOptions<any> | undefined }
  ) => Promise<Model<TodoType> | null>;
};

type MutationType = {
  addToDo: (
    parents: null,
    args: { todo: string; checked: boolean; id: number }
  ) => Promise<Model<TodoType>>;
  check: (
    parents: null,
    { id, checked }: { id: WhereOptions<any>; checked: boolean }
  ) => Promise<void>;
};

export type ResolversType = {
  Query: QueryType;
  Mutation: MutationType;
};
