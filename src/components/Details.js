import React, { Component } from 'react';
import Pokemon from './Pokemon';
import { Grid } from '@material-ui/core';

class Details extends Component {
    static displayName = Details.name;

    constructor (props) {
        super(props);
        this.state = { pokemon: [], loading: true };
       // img src = //cdn.bulbagarden.net/upload/d/d4/770MS.png
        fetch('https://pokeapi.co/api/v2/pokemon-form/' + props.id)
            .then(response => response.json())
            .then(data => {
                this.setState({ pokemon: data, loading: false });
            });
    }

    static renderDetails (pokemon) {
        return (
          <Grid container spacing={0}>
              {pokemon.results.map(pkm => 
                <Grid item xs={3} >
                  <Pokemon pokemonName={pkm.name}></Pokemon>
                </Grid>
                )}
          </Grid>
          
        );
      }
    
      render () {
        let contents = this.state.loading
          ? <p><em>Loading...</em></p>
          : Details.renderPokedex(this.state.pokemons);
    
        return (
          <div>
            <h1>Pokeact</h1>
            <p>Pokémon's Pokedex built with React, PokéAPI and PokemonDB</p>
            {contents}
          </div>
        );
      }
}

export default Details;
