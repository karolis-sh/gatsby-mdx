import React from 'react';
import PropTypes from 'prop-types';
import MDX from '@mdx-js/runtime';

import remarkUnImporter from '../utils/remark-un-importer';
import getScope from '../utils/get-scope';

class MDXScopedRuntime extends React.Component {
  state = { error: undefined };

  componentDidUpdate(prevProps) {
    const { error } = this.state;
    const { children } = this.props;
    if (error && children !== prevProps.children) {
      this.setState({ error: undefined }); // eslint-disable-line react/no-did-update-set-state
    }
  }

  componentDidCatch(error) {
    const { onError } = this.props;
    this.setState({ error });
    onError(error);
  }

  render() {
    const { error } = this.state;
    const { scope, mdPlugins, onError, ...props } = this.props;

    if (error) {
      return (
        <pre
          className="mdx-scoped-runtime__error"
          style={{ overflowX: 'auto', background: 'rgba(255, 0, 0, .1)' }}
        >
          {`Invalid MDX:\n${error.toString()}`}
        </pre>
      );
    }

    const resolvedScope = props.allowedImports
      ? getScope({
          mdPlugins,
          hastPlugins: props.hastPlugins,
          mdx: props.children,
          allowedImports: props.allowedImports,
        })
      : {};

    return (
      <MDX
        {...props}
        scope={{ Layout: ({ children }) => children, ...scope, ...resolvedScope }}
        mdPlugins={[[remarkUnImporter], ...mdPlugins]}
      />
    );
  }
}

MDXScopedRuntime.propTypes = {
  scope: PropTypes.shape({}).isRequired,
  mdPlugins: PropTypes.arrayOf(PropTypes.any).isRequired,
  allowedImports: PropTypes.shape({}),
  onError: PropTypes.func.isRequired,
};

MDXScopedRuntime.defaultProps = {
  scope: {},
  mdPlugins: [],
  onError: () => undefined,
};

export default MDXScopedRuntime;
