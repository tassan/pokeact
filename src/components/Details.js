import React, { Component } from 'react';
import Pokemon from './Pokemon';
import Species from './Species'
import './Details.css'
import { Grid, Avatar, Card, CardHeader, CardContent } from '@material-ui/core';


class Details extends Component {
    static displayName = Details.name;

    constructor (props) {
        super(props);
        this.state = { pokemon: [], loading: true };
       // img src = //cdn.bulbagarden.net/upload/d/d4/770MS.png
        fetch('https://pokeapi.co/api/v2/pokemon/' + props.id)
            .then(response => response.json())
            .then(data => {
                this.setState({ pokemon: data, loading: false });
            });
    }

    static renderDetails (details) {
        return (
          // {`https://img.pokemondb.net/artwork/large/${details.name}.jpg`}
          <Grid container spacing={3}>
            <Grid item xs={12} direction="row">
              <Card>
                <CardHeader
                avatar={
                  <Avatar alt={details.name} src={`https://img.pokemondb.net/sprites/sun-moon/icon/${details.name}.png`} />
                }
                title={details.name}
                >
                </CardHeader>
              </Card>
              
            </Grid>
            <Grid item xs={4}>
              <Card>
                
              </Card>
            </Grid>
            <Grid item xs={4}>
              
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CardHeader title="Info" />
                <CardContent>
                  <Species id={details.id}></Species>
                </CardContent>
              </Card>
            </Grid>
          </Grid>


        );
      }
    
      render () {
        let contents = this.state.loading
          ? <p><em>Loading...</em></p>
          : Details.renderDetails(this.state.pokemon);
    
        return (
          <div>
            {contents}
          </div>
        );
      }
}

export default Details;
