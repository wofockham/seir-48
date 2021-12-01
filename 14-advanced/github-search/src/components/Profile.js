import React, { Component } from 'react';
import Github from '../services/github';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      info: null,
      repos: null
    };
  }

  componentDidMount() {
    const { username } = this.props.match.params;
    Github.getUserInfo(username).then((response) => {
      this.setState({info: response.data});
    });
    Github.getUserRepos(username).then((response) => {
      this.setState({repos: response.data});
    });
  }

  render() {
    return (
      <div>
        <h2>Profile for { this.props.match.params.username }</h2>
        <div>
          <UserInfo info={ this.state.info } />
          <Repositories repos={ this.state.repos } />
        </div>
      </div>
    )
  }
}

const UserInfo = (props) => {
  return (
    <div>
      UserInfo coming soon
    </div>
  )
};

const Repositories = (props) => {
  return (
    <div>
      Repositories coming soon
    </div>
  )
};

export default Profile;
