import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class PlayerPreview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { user, onReset } = this.props;
    return (
      <div>
        <div className="column">
          <img
            className="avatar"
            src={user.image}
            alt={'Avatar for ' + user.name}
          />
          <h2 className="username">@{user.name}</h2>
        </div>
        <button className="reset" onClick={e => onReset(user.id)}>
          Reset
        </button>
      </div>
    );
  }
}
PlayerPreview.propTypes = {
  user: PropTypes.object.isRequired,
  onReset: PropTypes.func.isRequired,
};
