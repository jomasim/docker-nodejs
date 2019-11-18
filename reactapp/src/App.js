import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component{

  state = {
    fruits:[],
  }

  componentDidMount(){
    console.log('component mounted');
    this.getFruits(); 
  }

  getFruits = () => {
    console.log('atleast we are here');
    axios.get("http://127.0.0.1:8081/").then((response)=>{
      if(response){
        const fruits = response.data;
        const mapped = Object.entries(fruits).map((item)=>{
         return { name:item[0], available:item[1]};
        });
        this.setState({fruits: mapped});
      }
    })
  
  }
  render(){
    const { fruits } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            {fruits.map(fruit => 
              <li key={fruit.name}>{fruit.name}</li>
            )}
          </ul>
        </header>
      </div>
    );
  }
}
export default App;
