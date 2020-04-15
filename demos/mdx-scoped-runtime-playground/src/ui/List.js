import React from 'react';
import PropTypes from 'prop-types';

function List({ items }) {
  return (
    <div style={{ background: 'cyan' }}>
      <p>Lemme print it</p>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default List;
