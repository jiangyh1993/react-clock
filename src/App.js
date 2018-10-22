import React, { Component } from "react";
import "./App.css";
import Clock from "./Clock";

class App extends Component {
  render() {
    const books = ["react", "vue", "ng"];
    return (
      <div>
        <Clock />
        {books.map(book => {
          return <p key={book}>{book}</p>;
        })}
      </div>
    );
  }
}

export default App;
