import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [], // Array para armazenar as tarefas
      newTask: '', // Tarefa a ser adicionada
    };
  }

  handleTaskChange = (e) => {
    this.setState({ newTask: e.target.value });
  };

  addTask = () => {
    if (this.state.newTask.trim() !== '') {
      this.setState((prevState) => ({
        tasks: [...prevState.tasks, prevState.newTask],
        newTask: '',
      }));
    }
  };

  removeTask = (index) => {
    const newTasks = [...this.state.tasks];
    newTasks.splice(index, 1);
    this.setState({ tasks: newTasks });
  };

  render() {
    return (
      <div>
        <h2>Lista de Tarefas</h2>
        <div>
          <input
            type="text"
            placeholder="Adicione uma tarefa"
            value={this.state.newTask}
            onChange={this.handleTaskChange}
          />
          <button onClick={this.addTask}>Adicionar</button>
        </div>
        <ul>
          {this.state.tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => this.removeTask(index)}>Remover</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
