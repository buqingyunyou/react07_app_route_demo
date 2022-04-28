import "./App.css";
import React from "react";
import {
  BrowserRouter,
  Switch,
  Redirect,
  Route,
  NavLink,
} from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <h2>
          react-router练习路由切换，必须重新刷新页面才能更新路由组件的问题
        </h2>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/home">Home</NavLink>
        <Switch>
          <Route path="/about" component={About}></Route>
          <Route path="/home" component={Home}></Route>
          <Redirect to="/home"></Redirect>
        </Switch>
      </BrowserRouter>
    );
  }
}
