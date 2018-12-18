import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
import LoreIpsum from '../components/LoreIpsum.mdx';

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      {
        allSitePage {
          edges {
            node {
              path
            }
          }
        }
      }
    `}
    render={({ allSitePage }) => (
      <Layout>
        <LoreIpsum />
        <h3>Sitemap</h3>
        <ul>
          {allSitePage.edges
            .map(({ node }) => node.path)
            .filter(item => !['/dev-404-page/', '/404.html'].includes(item))
            .map(path => (
              <li key={path}>
                <Link to={path}>{path}</Link>
              </li>
            ))}
        </ul>
      </Layout>
    )}
  />
);

export default IndexPage;
