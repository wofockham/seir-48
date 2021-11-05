import React, { Component } from 'react'; // es6 destructuring

class Clickr extends Component {
  constructor() {
    super(); // You must call super().
    this.state = {
      clicks: 0
    };

    // Event handlers need to be bound (for extremely boring technical reasons).
    this._incrementCount = this._incrementCount.bind(this); // WTF? You need this, trust me.
  }

  // Event handlers start with an _ (by convention).
  _incrementCount() {
    this.setState({clicks: this.state.clicks + 1}); // no mutation
  }

  render() {
    return (
      <button onClick={ this._incrementCount }>
        { this.state.clicks } clicks so far
      </button>
    );
  }
}

export default Clickr;
