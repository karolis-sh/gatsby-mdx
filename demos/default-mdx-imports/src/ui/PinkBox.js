import React from 'react';
import PropTypes from 'prop-types';

function PinkBox({ children }) {
  return (
    <span style={{ background: 'hotpink', color: 'white', padding: '10px', borderRadius: '5px' }}>
      {children}
    </span>
  );
}

PinkBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PinkBox;
