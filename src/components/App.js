import React, { Component } from 'react';
import Nav from './Nav';
import Home from './Home';
import Results from './Results';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const Battle = Loadable({
  loader: () => import('./Battle'),
  loading: Loading,
});

const Popular = Loadable({
  loader: () => import('./Popular'),
  loading: Loading,
});

export default class App extends Component {
  render() {
    return (
      <BrowserRouter
        basename={
          process.env.NODE_ENV == 'development' ? '/' : '/github-battle'
        }
      >
        <div className="container">
          <Nav />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/battle" component={Battle} />
            <Route path="/battle/results" component={Results} />
            <Route path="/popular" component={Popular} />
            <Route
              render={function() {
                return <p>Not Found</p>;
              }}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
