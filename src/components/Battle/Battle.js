import React, { Component } from 'react';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';
import { Link } from 'react-router-dom';
export default class Battle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
    };
  }
  handleSubmit(item) {
    this.setState(() => {
      let user = {};
      user.id = Date.now();
      user.name = item.login;
      user.image = `https://github.com/${item.login}.png?size=200`;
      let newState = {
        ...this.state,
        userList: [...this.state.userList, user],
      };
      return newState;
    });
  }
  batterString() {
    return this.state.userList.map(user => user.name).join(',');
  }
  handleReset(id) {
    this.setState(() => {
      let newUserList = this.state.userList.filter(user => user.id !== id);
      return { ...this.state, userList: newUserList };
    });
  }
  render() {
    var match = this.props.match;

    return (
      <div>
        <div>{<PlayerInput onSelect={e => this.handleSubmit(e)} />}</div>
        <div className="row">
          {this.state.userList.map(user => (
            <PlayerPreview
              user={user}
              onReset={e => this.handleReset(e)}
              key={user.id}
            />
          ))}
        </div>

        {this.state.userList.length > 1 ? (
          <Link
            className="button"
            to={{
              pathname: match.url + '/results',
              search: '?names=' + this.batterString(),
            }}
          >
            Battle
          </Link>
        ) : (
          ''
        )}
      </div>
    );
  }
}
