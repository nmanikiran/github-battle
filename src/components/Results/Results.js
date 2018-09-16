import React, { Component } from 'react';
import Player from './Player';
import queryString from 'query-string';
import { battle } from './../../utils/api';
import { Link } from 'react-router-dom';
import Loading from './../Loading';

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = { players: [], error: null, loading: true };
  }
  componentDidMount() {
    var query = queryString.parse(this.props.location.search);
    console.log(query.names);
    battle(query.names.split(',')).then(players => {
      if (players === null) {
        return this.setState(() => ({
          error:
            'Looks like there was an error. Check that both users exist on Github.',
          loading: false,
        }));
      }

      this.setState(() => {
        return { error: null, players, loading: false };
      });
    });
  }
  render() {
    var error = this.state.error;
    var players = this.state.players;
    var loading = this.state.loading;

    if (loading === true) {
      return <Loading />;
    }

    if (error) {
      return (
        <div>
          <p>{error}</p>
          <Link to="/battle">Reset</Link>
        </div>
      );
    }

    return (
      <div className="row">
        {players.map((palyer, index) => {
          return (
            <Player
              label={`Rank ${index + 1}`}
              score={palyer.score}
              profile={palyer.profile}
              key={index}
            />
          );
        })}
      </div>
    );
  }
}
