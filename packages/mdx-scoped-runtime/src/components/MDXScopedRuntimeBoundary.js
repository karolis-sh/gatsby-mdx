import React from 'react';
import PropTypes from 'prop-types';

import MDXScopedRuntime from './MDXScopedRuntime';

class MDXScopedRuntimeBoundary extends React.Component {
  state = { error: undefined };

  componentDidUpdate(prevProps) {
    const { error } = this.state;
    const { children } = this.props;
    if (error && children !== prevProps.children) {
      this.setState({ error: undefined }); // eslint-disable-line react/no-did-update-set-state
    }
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { error } = this.state;
    if (error) return <div>Invalid MDX</div>;
    return <MDXScopedRuntime {...this.props} />;
  }
}

MDXScopedRuntimeBoundary.propTypes = {
  mdx: PropTypes.string,
};

export default MDXScopedRuntimeBoundary;
