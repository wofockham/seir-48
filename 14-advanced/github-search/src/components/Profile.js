import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <div>
        { this.props.match.params.username } details coming soon
      </div>
    )
  }
}

export default Profile;
