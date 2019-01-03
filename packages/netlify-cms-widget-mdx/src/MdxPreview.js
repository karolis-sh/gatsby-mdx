import React from 'react';
import PropTypes from 'prop-types';
import MDX from 'mdx-scoped-runtime';

export default function MdxPreview({ value, mdx }) {
  return (
    <div className="netlify-cms-widget-mdx-preview">
      <MDX {...mdx}>{value}</MDX>
    </div>
  );
}

MdxPreview.propTypes = {
  value: PropTypes.string.isRequired,
  mdx: PropTypes.shape({}).isRequired,
};

MdxPreview.defaultProps = {
  mdx: {},
};
