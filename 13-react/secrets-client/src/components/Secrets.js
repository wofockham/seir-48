import React, { Component } from 'react';

class Secrets extends Component {
  constructor() {
    super();
    this.state = {
      // TODO: replace this via AJAX from the secrets server
      secrets: [
        {id: 1, content: 'secret a'},
        {id: 2, content: 'secret 2'},
        {id: 3, content: 'secret iii'}
      ]
    };
    this.saveSecret = this.saveSecret.bind(this);
  }

  saveSecret(content) {
    const secret = {
      id: Math.random(), // DON'T SHOW ANYONE THIS CODE
      content: content
    };

    const secrets = this.state.secrets.slice(0); // copy the original state
    secrets.push(secret);

    this.setState({secrets: secrets});
  }

  render() {
    return (
      <div>
        <h1>Tell us all your secrets</h1>
        <SecretForm onSubmit={ this.saveSecret } />
        <SecretsList secrets={ this.state.secrets } />
      </div>
    );
  }
}

class SecretForm extends Component {
  constructor() {
    super();
    this.state = { content: '' };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(event) {
    this.setState({content: event.target.value});
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.content);
  }

  render() {
    return (
      <form onSubmit={ this._handleSubmit }>
        <textarea onChange={ this._handleChange } value={ this.state.content }></textarea>
        <input type="submit" value="Tell" />
      </form>
    );
  }
}

// Always expect to receive props.
const SecretsList = (props) => {
  return (
    <div>
      { props.secrets.map((s) => <p key={ s.id }>{ s.content }</p>) }
    </div>
  )
};

export default Secrets;
