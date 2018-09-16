import React, { Component } from 'react';
import PlayerPreview from './PlayerPreview';

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { info } = this.props;
    return (
      <PlayerPreview username={info.login} avatar={info.avatar_url}>
        <ul className="space-list-items">
          {info.name && <li>{info.name}</li>}
          {info.location && <li>{info.location}</li>}
          {info.company && <li>{info.company}</li>}
          <li>
            <strong>Followers:</strong> {info.followers}
          </li>
          <li>
            <strong>Following:</strong> {info.following}
          </li>
          <li>Public Repos: {info.public_repos}</li>
        </ul>
      </PlayerPreview>
    );
  }
}
