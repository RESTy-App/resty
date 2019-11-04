import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ url, handleSubmit, handleChange }) => {
  return (
    <>
      <section className='deck'>
        <form onSubmit={handleSubmit}>
          <section>
            <input
              name="url"
              type="text"
              value={url}
              placeholder="URL"
              onChange={handleChange} />
          </section>

          <div>
            <label>
              <input type="radio" name="method" value="get" />
              <span>GET</span>
            </label>

            <label>
              <input type="radio" name="method" value="post" />
              <span>POST</span>
            </label>

            <label>
              <input type="radio" name="method" value="put" />
              <span>PUT</span>
            </label>

            <label>
              <input type="radio" name="method" value="patch" />
              <span>PATCH</span>
            </label>

            <label>
              <input type="radio" name="method" value="delete" />
              <span>DELETE</span>
            </label>

            <label>
              <button type="submit">Go!</button>
            </label>

            <section className='deck col-2'>
              <div>
                <textarea
                  type="text"
                  placeholder="Raw JSON Body"
                  name="requestBody">
                </textarea>
              </div>
            </section>
          </div>

        </form>
      </section>
    </>
  );
};

Form.propTypes = {
  url: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Form;
