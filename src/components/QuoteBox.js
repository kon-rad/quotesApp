import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchQuote } from '../actions';

class QuoteBox extends Component {
  render() {
    return (
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
    )
  }
};

const mapStateToProps = ({ quote }) => ({
  quote: quote
});
export default connect(mapStateToProps, { fetchQuote })(QuoteBox);