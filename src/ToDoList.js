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
    this.update = this.update.bind(this);
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
  update(id, updatedTask) {
    const updatedTodos = this.state.todos.map( todo => {
      if(todo.id === id) {
        return {...todo, task: updatedTask}
      }
      return todo;
    });
    this.setState({todos: updatedTodos})
  }
  render() {
    const todos = this.state.todos.map(todo => {
      return (
        <ToDo 
          key={todo.id} 
          id={todo.id} 
          task={todo.task} 
          removeToDo={this.remove}
          updateTodo={this.update}
        />
      );
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