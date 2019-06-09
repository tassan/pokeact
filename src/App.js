import React, { Component } from 'react';
import './App.css';
import Pokedex from './components/Pokedex';
import Details from './components/Details';
import { Container } from '@material-ui/core';


class App extends Component {
  render () {
    return (
      <Container className="App" maxWidth="lg">
        <Pokedex></Pokedex>
        {/* <Details id={50}></Details> */}
      </Container>

    );
  }
}

// function App() {
//   return (
//     <main>
//       <Container className="App">
//         <Pokedex></Pokedex>
//       </Container>
//     </main>    
//   );
// }

export default App;
