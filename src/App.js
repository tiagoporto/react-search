import React, { Component } from 'react';
import Search from './components/search/Search.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Inkitt</h1>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </header>

        <main>
          <Search/>
        </main>
      </div>
    );
  }
}

export default App;
