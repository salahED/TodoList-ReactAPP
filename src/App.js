import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Todo from "./component/layout/Todo";
import About from "./component/layout/About";
import Navbar from "./component/layout/Navbar";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="todo-app container">
          <Route exact path="/">
            <Navbar />
          </Route>
          <Route exact path="/todo">
            <Todo />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
