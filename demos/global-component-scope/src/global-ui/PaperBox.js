import React from 'react';
import PropTypes from 'prop-types';

function PaperBox({ children }) {
  return (
    <span style={{ padding: '10px', borderRadius: '5px', border: '1px solid gray' }}>
      {children}
    </span>
  );
}

PaperBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PaperBox;
