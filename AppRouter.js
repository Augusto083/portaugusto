import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home'; // Crie este componente
import About from './About'; // Crie este componente

const AppRouter = () => {
  return (
    <Router>
      
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      
    </Router>
  );
};

export default AppRouter;
