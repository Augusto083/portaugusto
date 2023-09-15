import React, { createContext, useContext, useReducer } from 'react';

// Defina um estado inicial
const initialState = {
  counter: 0,
};

// Crie um contexto
const GlobalStateContext = createContext();

// Defina um provedor para o contexto
export function GlobalStateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
}

// Crie um hook personalizado para usar o contexto
export function useGlobalState() {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState deve ser usado dentro de um GlobalStateProvider');
  }
  return context;
}

// Defina um reducer para atualizar o estado global
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}
