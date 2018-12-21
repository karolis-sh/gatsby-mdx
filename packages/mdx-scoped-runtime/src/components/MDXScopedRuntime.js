import React from 'react';
import PropTypes from 'prop-types';
import MDX from '@mdx-js/runtime';

import transpile from '../utils/transpile';

class MDXScopedRuntime extends React.Component {
  state = { code: undefined };

  componentDidMount() {
    this.transpileMdx();
  }

  componentDidUpdate(prevProps) {
    const { children } = this.props;
    if (prevProps.children !== children) this.transpileMdx();
  }

  transpileMdx = () => {
    const { children } = this.props;
    this.setState({ code: transpile({ mdx: children }).code });
  };

  render() {
    const { code } = this.state;
    const { components, scope } = this.props;
    if (code) {
      return (
        <MDX components={components} scope={{ Layout: ({ children }) => children, ...scope }}>
          {code}
        </MDX>
      );
    }
    return null;
  }
}

MDXScopedRuntime.propTypes = {
  children: PropTypes.string,
  components: PropTypes.shape({}).isRequired,
  scope: PropTypes.shape({}).isRequired,
};

MDXScopedRuntime.defaultProps = {
  components: {},
  scope: {},
};

export default MDXScopedRuntime;
