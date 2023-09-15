import React from 'react';
import { useGlobalState } from './GlobalStateContext';

function Counter() {
  const { state, dispatch } = useGlobalState();

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <h2>Contador Global: {state.counter}</h2>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
}

export default Counter;
