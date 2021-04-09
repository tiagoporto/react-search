import React, { Component } from "react";
import Search from "./components/search/Search.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Search</h1>
          <p className="App-intro">'s test</p>
        </header>

        <main className="App-main">
          <Search />
        </main>
      </div>
    );
  }
}

export default App;
