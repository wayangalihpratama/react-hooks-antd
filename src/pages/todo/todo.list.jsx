import React, { useState, useRef } from "react";
import { Button, Input, List, Tooltip, Form, Typography } from "antd";
import { CheckOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";

function TodoList({ todoList, setTodoList }) {
  const { Text } = Typography;
  const [isEdit, setIsEdit] = useState(null);
  const btnUpdate = useRef();

  const handleOnUpdateTodo = (e, item) => {
    const updatedList = todoList.map((list) => {
      if (list.id === item.id) list.todo = e.todo;
      return list;
    });
    setTodoList(updatedList);
    setIsEdit(null);
  };

  const handleOnCompleteTodo = (item) => {
    const updatedList = todoList.map((list) => {
      if (list.id === item.id) list.isDone = true;
      return list;
    });
    setTodoList(updatedList);
  };

  const handleOnDeleteTodo = (item) => {
    const updatedList = todoList.filter((list) => list.id !== item.id);
    setTodoList(updatedList);
  };

  return (
    <List
      bordered
      header={<h2>What to do ?</h2>}
      dataSource={todoList}
      renderItem={(item) => {
        if (isEdit === item.id) {
          return (
            <List.Item
              key={item.id}
              actions={[
                <Button
                  key="update"
                  type="primary"
                  onClick={(e) => btnUpdate.current.click()}
                >
                  Update Todo
                </Button>,
              ]}
            >
              <Form
                initialValues={{ todo: item.todo }}
                layout="inline"
                onFinish={(e) => handleOnUpdateTodo(e, item)}
              >
                <Form.Item name="todo">
                  <Input type="text" />
                </Form.Item>
                <Form.Item>
                  <button ref={btnUpdate} style={{ display: "none" }}>
                    Submit
                  </button>
                </Form.Item>
              </Form>
            </List.Item>
          );
        }
        if (isEdit !== item.id) {
          return (
            <List.Item
              key={item.id}
              actions={[
                <Tooltip title="complete">
                  <Button
                    disabled={item.isDone}
                    key="complete"
                    type="primary"
                    shape="circle"
                    icon={<CheckOutlined />}
                    onClick={(e) => handleOnCompleteTodo(item)}
                  ></Button>
                </Tooltip>,
                <Tooltip title="edit">
                  <Button
                    disabled={item.isDone}
                    key="edit"
                    ghost
                    type="primary"
                    shape="circle"
                    icon={<EditOutlined />}
                    onClick={(e) => setIsEdit(item.id)}
                  ></Button>
                </Tooltip>,
                <Tooltip title="delete">
                  <Button
                    key="delete"
                    ghost
                    type="danger"
                    shape="circle"
                    icon={<DeleteOutlined />}
                    onClick={(e) => handleOnDeleteTodo(item)}
                  ></Button>
                </Tooltip>,
              ]}
            >
              {item.isDone && (
                <Text delete type="success">
                  {item.todo}
                </Text>
              )}
              {!item.isDone && <Text>{item.todo}</Text>}
            </List.Item>
          );
        }
      }}
    />
  );
}

export default TodoList;
