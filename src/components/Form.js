import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';

const Form = ({ url, handleSubmit, handleChange }) => {
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.Form}>
        <section>
          <input
            name="url"
            className="wide"
            type="text"
            value={url}
            placeholder="URL"
            onChange={handleChange} />

          <div id='label'>
            <label>
              <input type="radio" name="methods" value="get" />
              <span>GET</span>
            </label>

            <label>
              <input type="radio" name="methods" value="post" />
              <span>POST</span>
            </label>

            <label>
              <input type="radio" name="methods" value="put" />
              <span>PUT</span>
            </label>

            <label>
              <input type="radio" name="methods" value="patch" />
              <span>PATCH</span>
            </label>

            <label>
              <input type="radio" name="methods" value="delete" />
              <span>DELETE</span>
            </label>

            <label>
              <button type="submit">Go!</button>
            </label>

            <div id='json'>
              <textarea
                type="text"
                placeholder="Raw JSON Body"
                name="requestBody">
              </textarea>
            </div>
          </div>

        </section>
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
