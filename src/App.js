import logo from './logo.svg';
import './App.css';
import Table from './Table';
import { Component } from 'react';
import Form from './Form';

// function App() {
//   return (
//     <div className="App">
//         <Table/>
//     </div>
//   );
// }

class App extends Component{

  state = {
    characters:[
      
    ]
  }

  removeCharacters = (index) => {
    const {characters} = this.state;
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      })
    })
  }

  handleSubmit = (character) => {
    
    this.setState({characters: [...this.state.characters, character]})
  }
  render(){
    const {characters} = this.state
    return (
      <div className="container table">
        <Table characterData={characters} removeCharacters={this.removeCharacters} />
        <Form characterData={characters} handleSubmit={this.handleSubmit} />
      </div>
    );
  }
  
}
export default App;
