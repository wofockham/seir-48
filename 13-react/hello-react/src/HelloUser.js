import React, { Component } from 'react'; // destructuring

class HelloUser extends Component {
  render() {
    return (
      <h2>Hello { this.props.name || 'mystery user' }</h2>
    );
  }
}

export default HelloUser;
