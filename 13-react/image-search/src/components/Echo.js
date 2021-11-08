import React, { Component } from 'react';

class Echo extends Component {
  constructor() {
    super();
    this.state = {
      message: ''
    };
    this._updateMessage = this._updateMessage.bind(this);
    this._clearMessage = this._clearMessage.bind(this);
  }

  _updateMessage(event) {
    this.setState({message: event.target.value});
  }

  _clearMessage() {
    this.setState({message: ''});
  }

  render() {
    console.log('rendering!', Math.random());
    return (
      <div>
        <p>{ this.state.message || 'Type your message in the input below' }</p>
        <input onChange={ this._updateMessage } value={ this.state.message } placeholder="user input goes here" />
        <button onClick={ this._clearMessage }>
          Clear message
        </button>
      </div>
    );
  }
}

export default Echo;
