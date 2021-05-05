import React, { useState } from "react";
import { Col, Row } from "antd";

import "./todo.page.css";

import TodoForm from "./todo.form";
import TodoList from "./todo.list";

function Todo() {
  const [todoList, setTodoList] = useState([]);

  return (
    <Row>
      <Col span={24}>
        <h1>Todo List</h1>
        <Row>
          <Col span={8}>
            <TodoForm todoList={todoList} setTodoList={setTodoList} />
          </Col>
          <Col span={16}>
            <TodoList todoList={todoList} setTodoList={setTodoList} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Todo;
