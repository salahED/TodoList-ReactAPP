import React, { Component } from "react";
import Todos from "../Todos/todos";
import AddTodo from "../Todos/AddForm";
class Todo extends Component {
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
      <div>
        <h4 className="top-left blue-text">My List : </h4>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}
export default Todo;
