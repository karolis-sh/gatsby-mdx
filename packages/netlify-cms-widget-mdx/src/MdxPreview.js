import React from 'react';
import PropTypes from 'prop-types';
import MDX from 'mdx-scoped-runtime';

export default function MdxPreview({ value, scope, components }) {
  return (
    <div className="netlify-cms-widget-mdx-preview">
      <MDX components={components} scope={scope}>
        {value}
      </MDX>
    </div>
  );
}

MdxPreview.propTypes = {
  value: PropTypes.string.isRequired,
  scope: PropTypes.shape({}),
  components: PropTypes.shape({}),
};
