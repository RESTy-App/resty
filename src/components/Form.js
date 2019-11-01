import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ url, handleSubmit, handleChange }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={url}
            placeholder="URL"
            onChange={handleChange} />
        </div>

        <div>
          <button>GET</button>
          <button>POST</button>
          <button>PUT</button>
          <button>PATCH</button>
          <button>DELETE</button>
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
