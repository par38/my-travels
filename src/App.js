import React, { Component } from 'react';

import './App.css';

import Travel from './Travel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My travels</h1>
        </header>
        <Travel 
          destination="San Francisco"
          country="USA - California"
          photo="https://farm8.staticflickr.com/7262/7461778274_f7bff1f106.jpg" alt="San Francisco"
          distance="11 h d'avion"
        />
        <Travel 
          destination="Amsterdam"
          country="Pays Bas"
          photo="https://farm3.staticflickr.com/2232/2339379365_045435831e.jpg" alt="Amsterdam"
          distance="500 km"
        />
      </div>
    );
  }
}

export default App;
