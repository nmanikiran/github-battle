import React, { Component } from 'react';
import { fetchPopularRepos } from './../../utils/api';
import RepoGrid from './RepoGrid';
import Loading from '../Loading';

export default class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All',
      repos: null,
      status: 'Loading',
    };
  }
  updateLanguage(lang) {
    this.setState(function() {
      return { selectedLanguage: lang, repos: null, status: 'Loading' };
    });
    fetchPopularRepos(lang)
      .then(repos => {
        this.setState(() => ({ repos, status: 'Success' }));
      })
      .catch(error => {
        this.setState(() => ({
          status: 'Opps! Something went wrong :(',
        }));
      });
  }
  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }
  render() {
    const languages = [
      'All',
      'JavaScript',
      'Python',
      'Java',
      'Ruby',
      'PHP',
      'Rust',
    ];

    return (
      <div>
        <ul className="languages">
          {languages.map(lang => {
            return (
              <li
                style={
                  lang === this.state.selectedLanguage
                    ? { color: '#d0021b' }
                    : null
                }
                onClick={e => this.updateLanguage(lang)}
                key={lang}
              >
                {lang}
              </li>
            );
          })}
        </ul>
        {!this.state.repos ? (
          <Loading text={this.state.status} />
        ) : (
          <RepoGrid repos={this.state.repos} />
        )}
      </div>
    );
  }
}
