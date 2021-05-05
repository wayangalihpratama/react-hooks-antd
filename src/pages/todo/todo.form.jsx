import React, { useRef } from "react";
import { Button, Form, Input } from "antd";

function TodoForm({ todoList, setTodoList }) {
  const reset = useRef();

  const handleSubmit = (values) => {
    setTodoList([
      ...todoList,
      {
        id: Math.floor(Math.random() * 1000),
        todo: values.todo,
        isDone: false,
      },
    ]);
    reset.current.click();
  };

  return (
    <Form name="todo-form" layout="inline" onFinish={handleSubmit}>
      <Form.Item name="todo" rules={[{ required: true, message: "Required!" }]}>
        <Input type="text" placeholder="Add a todo..." />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Todo
        </Button>
        <button type="reset" ref={reset} style={{ display: "none" }}>
          reset
        </button>
      </Form.Item>
    </Form>
  );
}

export default TodoForm;
