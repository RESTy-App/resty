import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ route, url }) => {
  return (
    <div>
      <h3>{route}</h3>
      <p>{url}</p>
    </div>
  );
};

Card.propTypes = {
  route: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Card;
