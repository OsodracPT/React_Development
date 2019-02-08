import React, { Component } from "react";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import uuid from 'uuid';

import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Take the trash out",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Meeting with manager",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Grocerie shopping",
        completed: false
      }
    ]
  };

  // Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }
  //Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(
        todo => todo.id !== id
      )]
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header></Header>
          <AddTodo addTodo={this.addTodo}></AddTodo>
          <Todos todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo} />
        </div>
      </div>
    );
  }
}

export default App;
