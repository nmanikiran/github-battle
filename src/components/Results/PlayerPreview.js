import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class PlayerPreview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="column">
        <img
          className="avatar"
          src={this.props.avatar}
          alt={'Avatar for ' + this.props.username}
        />
        <h2 className="username">@{this.props.username}</h2>
        {this.props.children}
      </div>
    );
  }
}
PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};
