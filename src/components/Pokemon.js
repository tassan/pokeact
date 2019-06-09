import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem'
import { ListItemText, ListItemAvatar, Avatar, Paper } from '@material-ui/core';
import './Pokemon.css';

export class Pokemon extends Component {
  static displayName = Pokemon.name;

  constructor (props) {
    super(props);
    this.state = { pokemon: [], loading: true };

    fetch('https://pokeapi.co/api/v2/pokemon/'+ props.pokemonName) // index
      .then(response => response.json())
      .then(data => {
        this.setState({ pokemon: data, loading: false });
      });
  }

  //   cdn.bulbagarden.net/upload/d/d4/{pokemon.id}.png
  // https://assets.pokemon.com/assets/cms2/img/pokedex/full/809.png
  static renderPokemon (pokemon) {
    // var url = "https://cdn.bulbagarden.net/upload/e/ec/"
    // var extension = "MS.png";
    // var str = "" + pokemon.id
    // var pad = "000"
    // var ans = pad.substring(0, pad.length - str.length) + str
    // var link = url + ans + extension;

    return (
      <Paper className="spacing">
        <ListItem title={pokemon.name}>
          <ListItemAvatar>
            <Avatar alt={pokemon.name} src={`https://img.pokemondb.net/sprites/sun-moon/icon/${pokemon.name}.png`} />
          </ListItemAvatar>
          <ListItemText>
            {pokemon.name}
          </ListItemText>
        </ListItem>
      </Paper>
    );
  }

  render () {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Pokemon.renderPokemon(this.state.pokemon);

    return (
      <div>
        {contents}
      </div>
    );
  }
}

export default Pokemon;
