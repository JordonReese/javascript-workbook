import React, { Component } from 'react';
import './App.css';

class TimeLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  renderList(){
    // add individual key value to avoid errors
    if(this.props.statusList && this.props.statusList.length > 0) {
      return this.props.statusList.map((card, index) => {
        return(
          <div key={index}>
             <h2>{card.text}</h2>
             <p onClick={() => this.props.deleteStatus(card.id)}>X</p>
          </div>
        )
      })
    }
  }
  changeFirst() {
    if (this.props.statusList.length > 0){
      this.setState({
        color: 'yellow'
      })
    }
  }
  render() {
    // console.log(this.props.statusList)
    return (
      <div className="">
        {this.renderList()}
      </div>

    );
  }
}

export default TimeLine;
