import React from 'react';
import './App.css';
import Pokedex from './components/Pokedex';
import { Container } from '@material-ui/core';

function App() {
  return (
    <Container className="App">
        <Pokedex></Pokedex>
s    </Container>
  );
}

export default App;
