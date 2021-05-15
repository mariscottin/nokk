import React from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Eficiencia from './components/Eficiencia';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Eficiencia />
    </div>
  );
}

export default App;


