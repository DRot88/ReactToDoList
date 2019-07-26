import React, { Component } from 'react';
import ToDo from './ToDo';
import NewToDoForm from './NewToDoForm'

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
  }
  create(newToDo) {
    this.setState({
      todos: [...this.state.todos, newToDo]
    });
  }
  remove(id) {
    this.setState({
      todos: this.state.todos.filter(td => td.id !== id)
    });
  }
  render() {
    const todos = this.state.todos.map(todo => {
      return <ToDo key={todo.id} id={todo.id} task={todo.task} removeToDo={this.remove}/>
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