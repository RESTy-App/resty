import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';

const Form = ({ url, handleSubmit, handleChange }) => {
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.Form}>
        <section className={styles.Url}>
          <input
            name="url"
            className="wide"
            type="text"
            value={url}
            placeholder="URL"
            onChange={handleChange} />

          <div className={styles.Label}>
            <label>
              <input type="radio" name="method" value="get" onChange={handleChange} />
              <span>GET</span>
            </label>

            <label>
              <input type="radio" name="method" value="post" onChange={handleChange}/>
              <span>POST</span>
            </label>

            <label>
              <input type="radio" name="method" value="put" onChange={handleChange}/>
              <span>PUT</span>
            </label>

            <label>
              <input type="radio" name="method" value="patch" onChange={handleChange}/>
              <span>PATCH</span>
            </label>

            <label>
              <input type="radio" name="method" value="delete" onChange={handleChange}/>
              <span>DELETE</span>
            </label>

            <label>
              <button type="submit">Go!</button>
            </label>

            <div className={styles.Json}>
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
