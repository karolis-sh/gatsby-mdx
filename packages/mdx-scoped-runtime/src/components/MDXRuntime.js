import React from 'react';
import MDX from '@mdx-js/runtime';

// Needs to be wrapped in class (gatsby-netlify-cms case)
// eslint-disable-next-line react/prefer-stateless-function
class MDXRuntime extends React.Component {
  render() {
    return <MDX {...this.props} />;
  }
}

export default MDXRuntime;
