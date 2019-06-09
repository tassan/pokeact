import React, { Component } from 'react';
import Pokemon from './Pokemon';
import { Grid, Grow } from '@material-ui/core';

class Pokedex extends Component {
    static displayName = Pokedex.name;

    constructor (props) {
        super(props);
        this.state = { pokemons: [], loading: true };
       // img src = //cdn.bulbagarden.net/upload/d/d4/770MS.png
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
            .then(response => response.json())
            .then(data => {
                this.setState({ pokemons: data, loading: false });
            });
    }

    static renderPokedex (pokemons) {
        return (
          <Grid container spacing={0}>
              {pokemons.results.map(pkm => 
                <Grid item xs={3} >
                  <Grow>
                    <Pokemon pokemonName={pkm.name}></Pokemon>
                  </Grow>
                </Grid>
                )}
          </Grid>
          
        );
      }
    
      render () {
        let contents = this.state.loading
          ? <p><em>Loading...</em></p>
          : Pokedex.renderPokedex(this.state.pokemons);
    
        return (
          <div>
            <h1>Pokeact</h1>
            <p>Pokémon's Pokedex built with React, PokéAPI and PokemonDB</p>
            {contents}
          </div>
        );
      }
}

export default Pokedex;
