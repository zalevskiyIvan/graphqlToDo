import Todo from "../database/models";
import { ResolversType } from "../types";

export const resolvers: ResolversType = {
  Query: {
    getAllToDo: async () => await Todo.findAll(),
    getToDo: async (parents: null, { id }) => await Todo.findOne({ where: id }),
  },
  Mutation: {
    addToDo: async (
      parents: null,
      args: { todo: string; checked: boolean }
    ) => {
      const todo = await Todo.create({ ...args });
      return todo;
    },
    check: async (parents: null, { id, checked }) => {
      const todo: any = await Todo.update({ checked }, { where: { id } });
    },
  },
};
