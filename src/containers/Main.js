import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import History from '../components/History';
import Form from '../components/Form';
import Display from '../components/Display';
import { apiCall } from '../../services/api-call';
import './Main.css';

export default class Main extends Component {
  state = {
    history: [],
    data: [],
    url: '',
    method: '',
    json: ''
  };

  static propTypes = {
    title: PropTypes.string,
    history: PropTypes.arrayOf(PropTypes.shape({
      method: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })).isRequired
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { url, method } = this.state;
    console.log('URL', url);
    console.log('METHOD', method);
    
    apiCall(this.state.url, this.state.name)
      .then(result => {
        this.setState(state => ({ history: [{ url: url, method: method }, ...state.history], data: result }));
      });
  }

  render() {
    return (
      <>
        <section>
          <Header title={'RESTy'} />
          <History history={this.state.history} />
          <Form
            url={this.state.url}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit} />
          <Display data={this.state.data} />
        </section>
      </>
    );
  }
}
