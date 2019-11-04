import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ url, handleSubmit, handleChange }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="url"
            type="text"
            value={url}
            placeholder="URL"
            onChange={handleChange} />
        </div>

        <div>
          <button name="method">GET</button>
          <button name="method">POST</button>
          <button name="method">PUT</button>
          <button name="method">PATCH</button>
          <button name="method">DELETE</button>
          <button>Go!</button>
        </div>

        <div>
          <input 
            type="text" 
            placeholder="Raw JSON Body"/>
        </div>
      </form>
    </>
  );
};

Form.propTypes = {
  url: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Form;
