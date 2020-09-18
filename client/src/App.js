import React from 'react';
import './App.css';
import Home from './views/Home';
import { Router } from '@reach/router';
import Detail from './views/Detail';


function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Detail path="/product/:id" />

      </Router>
    </div>
  );
}

export default App;
