import React, { Component } from 'react';
import { getUsers } from './../../utils/api';
import Autocomplete from 'react-autocomplete';

const styles = {
  avatar: {
    width: '50px',
    borderRadius: '50%',
  },
};

export default class PlayerInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      value: '',
      autocompleteData: [],
    };
    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.getItemValue = this.getItemValue.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  retrieveDataAsynchronously(searchText) {
    getUsers(searchText).then(users => {
      this.setState({
        autocompleteData: users,
      });
    });
  }

  onChange(e) {
    this.setState({
      value: e.target.value,
    });

    this.retrieveDataAsynchronously(e.target.value);

    console.log('The Input Text has changed to ', e.target.value);
  }

  onSelect(val, item) {
    this.setState({
      value: '',
    });

    this.props.onSelect(item);
    console.log("Option from 'database' selected : ", val);
  }

  renderItem(item, isHighlighted) {
    return (
      <div
        key={item.id}
        style={{ background: isHighlighted ? 'lightgray' : 'white' }}
      >
        <img src={item.avatar_url} style={styles.avatar} /> {item.login}
      </div>
    );
  }

  getItemValue(item) {
    return item.login;
  }
  render() {
    return (
      <div className="column w100">
        <Autocomplete
          inputProps={{ placeholder: 'github username' }}
          getItemValue={this.getItemValue}
          items={this.state.autocompleteData}
          renderItem={this.renderItem}
          value={this.state.value}
          onChange={this.onChange}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}
