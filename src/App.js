import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Todo from "./component/layout/Todo";
import About from "./component/layout/About";
import Navbar from "./component/layout/Navbar";
import Dashboard from "./component/dashboard/Dashboard";
import ProjectDetails from "./component/project/ProjectDetails";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/project/:id" component={ProjectDetails} />

            <Route path="/todo">
              <Todo />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
