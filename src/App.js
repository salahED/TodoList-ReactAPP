import React, { Component } from "react";
import Todos from "./todos";
import AddTodo from "./AddForm";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./About";
class App extends Component {
  state = {
    todos: [
      { id: 1, content: "complet react course" },
      { id: 2, content: "finish redux" }
    ]
  };
  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    });
  };
  addTodo = todo => {
    todo.id = this.state.todos.length + 1;
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    });
  };
  render() {
    return (
      <BrowserRouter>
        <div className="todo-app container">
          <Route exact path="/">
            <a className="left" href="/about">
              About
            </a>
            <h1 className="center blue-text">My to do List</h1>
            <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
            <AddTodo addTodo={this.addTodo} />
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
