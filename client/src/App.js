import React from 'react';
import './App.css';
import Home from './views/Home';
import { Router } from '@reach/router';
import Detail from './views/Detail';
import Edit from './views/Edit';


function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Detail path="/product/:id" />
        <Edit path="/product/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
