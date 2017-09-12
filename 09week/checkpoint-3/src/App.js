import React, { Component } from 'react';
import './App.css';
import PokemonCard from './PokemonCard';

// online pokedex for all pokemon from games
// render name and id number of pokemon
// allow user to reset field
// display sprite for pokemon - couldn't figure this out


class App extends Component {
  state = {
    pokemonText: '',
    pokemon:null
  };

  getThePokemonData(paramString) {
    return fetch(`http://pokeapi.co/api/v2/pokemon/${paramString}`)
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          return this.setState({pokemon: responseJson})
        })
        .catch((error) => {
          console.error(error);
        });
      }

  handleSubmit(event) {
    event.preventDefault();
    this.getThePokemonData(this.state.pokemonText);
  }

  reset() {
    this.setState(prevState => ({
      pokemonText: '',
      pokemon:null
    }))
  }

  renderPokemon() {

    if(this.state.pokemon ) {
      return <PokemonCard
        name={this.state.pokemon['name']} id={this.state.pokemon['id']} weight={this.state.pokemon['weight']}
        sprite={this.state.pokemon['sprites']['front_default']}
      />
      }
    }


  render() {
    return (
      <div className="App">
      <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            placeholder="Pokemon Name"
            value={this.state.pokemonText}
            onChange={(e) => this.setState({pokemonText: e.target.value}) }
          />
          <br/>
          <input type="submit"/>
          <button onClick={(e) => this.reset()}>
            Reset
          </button>
          <br/>
          <br/>
          <div className=''>
            {this.renderPokemon()}
          </div>
      </form>
      </div>
    );
  }
}

export default App;
