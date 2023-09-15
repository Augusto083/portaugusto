import React, { Component } from 'react';

class ConditionalRenderingDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false, // Define a condição de login
    };
  }

  toggleLogin = () => {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn,
    }));
  }

  render() {
    const { isLoggedIn } = this.state;

    return (
      <div>
        <h2>Renderização Condicional</h2>
        <button onClick={this.toggleLogin}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
        {isLoggedIn ? <p>Usuário está logado.</p> : <p>Usuário não está logado.</p>}
      </div>
    );
  }
}

export default ConditionalRenderingDemo;
