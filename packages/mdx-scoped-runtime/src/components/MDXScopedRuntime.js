import React from 'react';
import PropTypes from 'prop-types';
import MDX from '@mdx-js/runtime';
import remove from 'unist-util-remove';

function MDXScopedRuntime({ scope, mdPlugins, ...props }) {
  return (
    <MDX
      {...props}
      scope={{ Layout: ({ children }) => children, ...scope }}
      mdPlugins={[
        () => tree => {
          remove(tree, 'import');
        },
        ...mdPlugins,
      ]}
    />
  );
}

MDXScopedRuntime.propTypes = {
  scope: PropTypes.shape({}).isRequired,
  mdPlugins: PropTypes.arrayOf(PropTypes.any).isRequired,
};

MDXScopedRuntime.defaultProps = {
  scope: {},
  mdPlugins: [],
};

export default MDXScopedRuntime;
