import React, { Component } from 'react';
import './App.css';


// this is the pokemon card render for the api call


class PokemonCard extends Component {
  state = {
    spritePicks: []
  }

  render () {
    return (
      <div className=''>
        <h2>Name: {this.props.name}</h2>
        <p>Id Number: {this.props.id}</p>
        <p>Weight: {this.props.weight}lbs</p>
      </div>
    );
  }
}

// tried to render each of the sprite images and display the front_default
// <div>
// {this.props.sprites.map((spritePic, index) => {
//   this.state.spritePicks.push(spritePic);
//   <div key={index}>
//   <img style={{height:200, width:200}} src={spritePic} />
//   </div>
// })}
// </div>

export default PokemonCard;
