import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ data }) => {
  console.log('***DATA', data);
  
  return (
    
    <div>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
};

Display.propTypes = {
  data: PropTypes.array,
};

export default Display;
