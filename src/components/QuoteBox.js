import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchQuote } from '../actions';

class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetText: ''
    }
  }

  componentDidMount() {
    this.props.fetchQuote();
  }

  static getDerivedStateFromProps(props, state) {
    return {
      tweetText: encodeURI(`${props.quote.quoteText} -${props.quote.quoteAuthor}`)
    }
  }

  render() {
    return (
      <div className="card__wrapper card" id="quote-box">
        <div className="card__display">
          <p id="text" className="card__text">
            {this.props.quote.quoteText}
          </p>
          <span id="author" className="card__author">
          {this.props.quote.quoteAuthor}
        </span>
        </div>
        <div className="card__buttons">
          <button onClick={this.props.fetchQuote} id="new-quote" className="waves-effect waves-light btn card__quote_button">
            New Quote
          </button>
          <a
            id="tweet-quote"
            target="_blank"
            className="waves-effect waves-light btn card__tweet_button"
            href={`https://twitter.com/intent/tweet?text=${this.state.tweetText}`}
          >
            Tweet Quote
          </a>
        </div>
      </div>
    )
  }
};

const mapStateToProps = ({ quote }) => ({
  quote: quote
});

export default connect(mapStateToProps, { fetchQuote })(QuoteBox);