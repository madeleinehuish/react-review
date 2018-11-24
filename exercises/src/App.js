import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    userName1: "Madeleine",
    userName2: "Madeleine's Clone",
    inputString: '',
    inputStringLength: 0
  }

  handleInput(event) {
    this.setState({
      inputString: event.target.value,
      inputStringLength: event.target.value.length
    })
  }

  changeUser(event) {
    console.log('clicked');
    this.setState({ userName1: event.target.value})
  }

  deleteChar = (index) => {
    console.log('clicked');
    const inputStringArr = [...this.state.inputString.split('')];
    console.log('inputStringArr: ', inputStringArr);
    inputStringArr.splice(index, 1);
    console.log('inputStringArr: ', inputStringArr);
    const inputString = inputStringArr.join('');
    const inputStringLength = inputString.length
    this.setState({ inputString, inputStringLength })
  }

  render() {
    const style = {
      backgroundColor: 'aqua',
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '200px'
    }

    const charComponentList = this.state.inputString.split('').map((char,index) => {
      return <CharComponent val={char} key={char + index} click={()=>this.deleteChar(index)}/>
    })

    return (
      <div className="App">
        <input onChange={(event)=>this.handleInput(event)} value={this.state.inputString}/>
        <div style={style} >{this.state.inputStringLength}</div>
        <ValidationComponent textLength={this.state.inputStringLength}/>
        {charComponentList}
        {/* <UserInput  changeUser={this.changeUser.bind(this)} value={this.state.userName1}/> */}
        {/* <button onClick={this.changeUser}>click</button> */}
        {/* <UserOutput userName={this.state.userName1} />
        <UserOutput userName={this.state.userName2} /> */}
      </div>
    );
  }
}

export default App;
