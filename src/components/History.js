import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const History = ({ history }) => {

  const cards = history.map((method, i) => {
    return (
      <li key={i}>
        <Card {...method} />
      </li>
    );
  });

  return (
    <>
      <h2>History</h2>
      <ul id='history'>
        {cards}
      </ul>
    </>
  );

};

History.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    route: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })).isRequired
};

export default History;
