import React from 'react';
import { colors } from '../theme/theme';

const Footer: React.FC = () => {
  const footerStyle: React.CSSProperties = {
    background: colors.primary,
    color: 'white',
    padding: '2rem 0',
    marginTop: '3rem'
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const linksStyle: React.CSSProperties = {
    display: 'flex',
    gap: '2rem',
    margin: '1rem 0'
  };

  const linkStyle: React.CSSProperties = {
    color: 'white',
    textDecoration: 'none',
    transition: 'opacity 0.3s ease'
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          <span role="img" aria-label="Tanghulu">🍡</span> 糖葫芦 Tanghulu
        </div>
        <div style={linksStyle}>
          <a href="#varieties" style={linkStyle}>Varieties</a>
          <a href="#history" style={linkStyle}>History</a>
          <a href="#gallery" style={linkStyle}>Gallery</a>
          <a href="#about" style={linkStyle}>About</a>
        </div>
        <p style={{ marginTop: '1rem', opacity: 0.8 }}>
          &copy; {currentYear} Tanghulu Showcase. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 