import { Component } from 'react';

import './App.css';
import Navbar from './components/Navbar';

class App extends Component {
  
  constructor() {
    super()

    this.state = {
      id: 0, 
      books: []
    }
  }
  
  
  
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
