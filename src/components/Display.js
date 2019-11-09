import React from 'react';
import PropTypes from 'prop-types';
import styles from './Display.css';

const Display = ({ data }) => {
  console.log('***DATA', data);
  
  return (
    
    <div className={styles.Display}>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

Display.propTypes = {
  data: PropTypes.array,
};

export default Display;
