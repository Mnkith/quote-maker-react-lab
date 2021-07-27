import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from "../actions/quotes"

class Quotes extends Component {

  render() {
    return (
      <div> 
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
            {this.props.quotes.map(quote => <QuoteCard 
            key={ quote.id } 
            quote={quote} 
            downvoteQuote={this.props.downvoteQuote} 
            removeQuote={this.props.removeQuote} 
            upvoteQuote={this.props.upvoteQuote} 
            />)}

            </div>
          </div>
        </div>
      </div>
    );
  }
}
const msp = s => {
  return { quotes: s.quotes }
}

export default connect(msp, { removeQuote, upvoteQuote, downvoteQuote })(Quotes);
