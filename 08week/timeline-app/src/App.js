import React, { Component } from 'react';
import './App.css';
import TimeLine from './TimeLine';
class App extends Component {
  /** two components, one parent that takes a user status
  and a child that displays all the statuses */
  constructor(props) {
    super(props);
    this.state = {
      inputValue:'',
      timeLine: [],
    }
  }
  handleChange(e){
    // console.log(e.target.value);
    this.setState({inputValue: e.target.value})
  }
  handleClick=()=>{
    const card = {
      createdAt: new Date(),
      text: this.state.inputValue,
      color: 'blue',
      id: this.state.timeLine.length + 1,
    }
    // console.log(this.state);
    this.setState({timeLine: [...this.state.timeLine, card], inputValue: ''})
    /* spread operator
    - array, what you're pushing */
    console.log(this.state.timeLine);
  }
  deleteStatus=(id)=>{
    console.log(id, this.state.timeLine);
    const deleteCardList = this.state.timeLine.filter((card, index) =>{
      return card.id !== id;
    });
    this.setState({timeLine: deleteCardList});
    // console.log(deleteCardList)
  };
  onBlur=()=>{
    this.setState({
      backgroundColor: 'white',
    })
  };
  onFocus=()=>{
    this.setState({
      backgroundColor:'red',
    })
  };
  // change state of newest item in array inputValue
  // target newest item
  //    if item is index value inputValue.length-1
  // change it's state
  // reder new CSS with state change
  render() {
    // console.log(this.state);
    return (
      <div className="App">
      <input
        style={{backgroundColor:this.state.backgroundColor}}
        onBlur={ () => this.onBlur() }
        onFocus={ () => this.onFocus() }
        onChange={(e)=> this.handleChange(e)}
        value={this.state.inputValue}
        type='text'
      />
      <button onClick={this.handleClick}>Submit</button>
      <TimeLine deleteStatus={this.deleteStatus} statusList={this.state.timeLine}/>
      </div>

    );
  }
}

export default App;


// change CSS based on state value
// npm start
