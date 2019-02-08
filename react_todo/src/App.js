import React, { Component } from "react";
import Todos from "./components/Todos";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take the trash out",
        completed: false
      },
      {
        id: 2,
        title: "Meeting with manager",
        completed: false
      },
      {
        id: 3,
        title: "Grocerie shopping",
        completed: false
      }
    ]
  };
  markComplete = (id) => {
    console.log(id);
  }

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
