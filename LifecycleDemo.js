import React, { Component } from 'react';

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    console.log('Constructor: O componente está sendo criado.');
  }

  componentDidMount() {
    console.log('componentDidMount: O componente foi montado no DOM.');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: O componente foi atualizado.');
    console.log('Props Anteriores:', prevProps);
    console.log('State Anterior:', prevState);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: O componente está prestes a ser desmontado.');
  }

  render() {
    console.log('render: O componente está sendo renderizado.');
    return (
      <div>
        <h2>Ciclo de Vida do Componente</h2>
        <p>Consulte o console para ver as mensagens de log.</p>
      </div>
    );
  }
}

export default LifecycleDemo;
