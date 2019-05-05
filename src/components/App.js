import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="wrapper" id="quote-box">
          <p id="text">
            Quote here
          </p>
          <span id="author">
            author here
          </span>
          <button id="new-quote">New Quote</button>
          <button id="tweet-quote">Tweet Quote</button>
        </div>
      </div>
    )
  }
};