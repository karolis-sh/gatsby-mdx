import React from 'react';
import PropTypes from 'prop-types';
import MDX from '@mdx-js/runtime';
import remove from 'unist-util-remove';

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
    this.setState({ error });
  }

  render() {
    const { error } = this.state;
    const { scope, mdPlugins, ...props } = this.props;

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
