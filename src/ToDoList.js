import React, { Component } from 'react';
import ToDo from './ToDo';
import NewToDoForm from './NewToDoForm'

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{task: "Walk the Fish"},{ task: "Groom the Chickens"}]
    };
    this.create = this.create.bind(this);
  }
  create(newToDo) {
    this.setState({
      todos: [...this.state.todos, newToDo]
    });
  }
  render() {
    const todos = this.state.todos.map(todo => {
      return <ToDo task={todo.task}/>
    })
    return (
      <div>
        <h1>Todo List!</h1>
        <NewToDoForm createToDo={this.create}/>
        <ul>{todos}</ul>
      </div>
    )
  }
}

export default ToDoList