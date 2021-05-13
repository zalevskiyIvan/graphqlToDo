import { ApolloServer, gql } from "apollo-server";

export const typeDefs = gql`
  type ToDo {
    todo: String
    checked: Boolean
    id: ID
  }
  type Query {
    getAllToDo: [ToDo]
    getToDo(id: ID): ToDo
  }
  type Mutation {
    addToDo(todo: String): ToDo
    check(id: ID, checked: Boolean): ToDo
  }
`;
