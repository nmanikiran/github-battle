import React, { Component } from 'react';
import Profile from './Profile';
import PropTypes from 'prop-types';
export default class Player extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { label, score, profile } = this.props;
    return (
      <div className="grid">
        <h1 className="header">{label}</h1>
        <h3 style={{ textAlign: 'center' }}>Score: {score}</h3>
        <Profile info={profile} />
      </div>
    );
  }
}
Player.propTypes = {
  label: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  profile: PropTypes.object.isRequired,
};
