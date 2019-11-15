import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{

  state = {
    fruits:[],
  }

  componentDidMount(){
    console.log('component mounted');
    this.getFruits(); 
  }

  getFruits() {
    fetch("http://127.0.0.1:8080/").then((resp)=> resp.json())
    .then((data) =>{
    console.log("atleast we are here");
    console.log("response", data);
    this.setState({fruits:data});
    return data;
  });
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello we here to salute you!
          </p>
        </header>
      </div>
    );
  }
}
export default App;
