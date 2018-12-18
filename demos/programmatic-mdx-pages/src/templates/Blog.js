import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';

function BlogTemplate({ pageContext: { title }, ...props }) {
  return <Layout {...props} title={`Blog : ${title}`} />;
}

BlogTemplate.propTypes = {
  pageContext: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default BlogTemplate;
