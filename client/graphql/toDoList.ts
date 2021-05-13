import { gql } from "@apollo/client";

export const GET_ALL_TODO = gql`
  query {
    getAllToDo {
      id
      checked
      todo
    }
  }
`;

export const ADD_TODO = gql`
  mutation addToDo($todo: String) {
    addToDo(todo: $todo) {
      id
      checked
      todo
    }
  }
`;

export const CHECK = gql`
  mutation check($id: ID, $checked: Boolean) {
    check(id: $id, checked: $checked) {
      checked
    }
  }
`;
