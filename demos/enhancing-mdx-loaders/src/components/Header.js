import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

function Header({ title, color }) {
  return (
    <div
      style={{
        background: color,
        marginBottom: '1.45rem',
      }}
    >
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '1.45rem 1.0875rem',
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Gatsby - {title}
          </Link>
        </h1>
      </div>
    </div>
  );
}

Header.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default Header;
