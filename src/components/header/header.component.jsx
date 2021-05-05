import React, { useState } from "react";
import { Menu, Layout } from "antd";
import { Link } from "react-router-dom";

import "./header.component.css";

function Header() {
  const [currentMenu, setCurrentMenu] = useState("home");

  return (
    <Layout.Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        onClick={(e) => setCurrentMenu(e.key)}
        defaultSelectedKeys={[currentMenu]}
      >
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="todo-list">
          <Link to="/todo-list">Todo List</Link>
        </Menu.Item>
      </Menu>
    </Layout.Header>
  );
}

export default Header;
