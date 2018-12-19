import React from 'react';
import PropTypes from 'prop-types';

function Hello({ name }) {
  return <p style={{ background: 'pink' }}>Hello, {name}!</p>;
}

Hello.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Hello;
