import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ method, url }) => {
  return (
    <div>
      <h3>{method}</h3>
      <p>{url}</p>
    </div>
  );
};

Card.propTypes = {
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Card;
