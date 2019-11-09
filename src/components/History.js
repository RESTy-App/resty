import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import styles from './History.css';

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
      <section>
        <aside className={styles.History}>
          <h2>History</h2>
          <ul id="history">
            {cards}
          </ul>
        </aside>
      </section>
    </>
  );

};

History.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    method: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })).isRequired
};

export default History;
