import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

export default class Main extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  }
  
  render() {
    return (
      <Header title={'RESTy'} />
    );
  }
}
