import { useMutation, useQuery } from "@apollo/client";
import Checkbox from "antd/lib/checkbox/Checkbox";
import { Button, Form, Input } from "antd";
import { useEffect, useState } from "react";
import { toDoType } from "../common/types";
import { ADD_TODO, CHECK, GET_ALL_TODO } from "../graphql/toDoList";
import "antd/dist/antd.css";

type TodoType = { todo: string; checked: boolean; id: number };

export default function Home() {
  const { data, loading, error } = useQuery(GET_ALL_TODO);

  const [check] = useMutation(CHECK, {
    refetchQueries: [{ query: GET_ALL_TODO }],
  });
  const [addToDo] = useMutation(ADD_TODO, {
    refetchQueries: [{ query: GET_ALL_TODO }],
  });
  const addTodo = (v: any) => {
    v.checked = v.checked ? true : false;
    addToDo({ variables: { todo: v.todo, checked: v.checked } });
  };
  const checkToDo = (id: number, checked: boolean) => {
    check({
      variables: {
        id,
        checked,
      },
    });
  };
  return (
    <div>
      <h1>ToDo List</h1>
      <div>
        {data?.getAllToDo?.map((i: TodoType) => {
          return (
            <ul>
              <li>
                {i.todo}
                <Checkbox
                  onClick={() => checkToDo(i.id, !i.checked)}
                  checked={i.checked}
                />
              </li>
            </ul>
          );
        })}
        <Form onFinish={addTodo}>
          <Form.Item name="todo">
            <Input placeholder="todo" style={{ width: 200 }} />
          </Form.Item>
          <Button htmlType="submit">submit</Button>
        </Form>
      </div>
    </div>
  );
}
