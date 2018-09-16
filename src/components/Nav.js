import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <ul className="nav">
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/battle">
            Battle
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/popular">
            Popular
          </NavLink>
        </li>
      </ul>
    );
  }
}
