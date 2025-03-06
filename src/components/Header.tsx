import React from 'react';
import { colors } from '../theme/theme';

const Header: React.FC = () => {
  const headerStyle: React.CSSProperties = {
    background: colors.primary,
    color: 'white',
    padding: '1rem 0',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const logoStyle: React.CSSProperties = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const navStyle: React.CSSProperties = {
    display: 'flex',
    gap: '1.5rem'
  };

  const navLinkStyle: React.CSSProperties = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'opacity 0.3s ease'
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <a href="/" style={logoStyle}>
          <span role="img" aria-label="Tanghulu">🍡</span>
          <span>糖葫芦 Tanghulu</span>
        </a>
        <nav style={navStyle}>
          <a href="#varieties" style={navLinkStyle}>Varieties</a>
          <a href="#history" style={navLinkStyle}>History</a>
          <a href="#gallery" style={navLinkStyle}>Gallery</a>
          <a href="#about" style={navLinkStyle}>About</a>
        </nav>
      </div>
    </header>
  );
};

export default Header; 