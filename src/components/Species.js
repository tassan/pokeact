import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

class Species extends Component {
    static displayName = Species.name;

    constructor (props) {
        super(props);
        this.state = { pokemon: [], loading: true };
       // img src = //cdn.bulbagarden.net/upload/d/d4/770MS.png
        fetch('https://pokeapi.co/api/v2/pokemon-species/' + props.id)
            .then(response => response.json())
            .then(data => {
                this.setState({ pokemon: data, loading: false });
            });
    }

    static renderSpecies (details) {
        return (
          // {`https://img.pokemondb.net/artwork/large/${details.name}.jpg`}
          <p>{details.flavor_text_entries.map(text => text.filter(text.language.name = "en"))}</p>
        );
      }
    
      render () {
        let contents = this.state.loading
          ? <p><em>Loading...</em></p>
          : Species.renderSpecies(this.state.pokemon);
    
        return (
            <Typography variant="body1">
                {contents}
            </Typography>
        );
      }
}

export default Species;
