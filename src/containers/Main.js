import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import History from '../components/History';

export default class Main extends Component {
  state = {
    history: []
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    history: PropTypes.arrayOf(PropTypes.shape({
      method: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })).isRequired
  }
  
  render() {
    return (
      <>
        <Header title={'RESTy'} />
        <History history={this.state.history} />
      </>
    );
  }
}
