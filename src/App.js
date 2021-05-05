import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.less";

import Header from "./components/header/header.component";
import Home from "./pages/home/home.page";
import About from "./pages/about/about.page";
import Todo from "./pages/todo/todo.page";

function App() {
  return (
    <Router>
      <Layout className="layout">
        <Header />
        <Layout.Content style={{ padding: "50px" }}>
          <div className="site-layout-content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/todo-list">
                <Todo />
              </Route>
            </Switch>
          </div>
        </Layout.Content>
        <Layout.Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Layout.Footer>
      </Layout>
    </Router>
  );
}

export default App;
