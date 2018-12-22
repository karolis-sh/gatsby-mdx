import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from './Header';
import './Layout.css';

function Layout({ children, color, pageContext: { header } }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <React.Fragment>
          <Helmet title={data.site.siteMetadata.title}>
            <html lang="en" />
          </Helmet>
          <Header title={header} color={color} />
          <div
            style={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0,
            }}
          >
            {children}
          </div>
        </React.Fragment>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({
    header: PropTypes.string.isRequired,
  }).isRequired,
};

export default Layout;
