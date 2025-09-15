import React from 'react';
import { colors } from '../theme/theme';

const HeroSection: React.FC = () => {
  const heroStyle: React.CSSProperties = {
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1625466997070-0f09b9e1b616?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '6rem 1rem',
    textAlign: 'center',
    position: 'relative'
  };

  const contentStyle: React.CSSProperties = {
    maxWidth: '800px',
    margin: '0 auto'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '3.5rem',
    marginBottom: '1rem',
    fontWeight: 'bold'
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    marginBottom: '2rem',
    opacity: 0.9
  };

  const buttonStyle: React.CSSProperties = {
    background: colors.primary,
    color: 'white',
    padding: '0.8rem 2rem',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1.1rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    margin: '0 0.5rem',
    textDecoration: 'none',
    display: 'inline-block'
  };

  const secondaryButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    background: 'transparent',
    border: '2px solid white',
    padding: 'calc(0.8rem - 2px) calc(2rem - 2px)' // Adjust padding to account for border
  };

  return (
    <div style={heroStyle}>
      <div style={contentStyle}>
        <h1 style={titleStyle}>
          <span role="img" aria-label="Tanghulu">🍡</span> Sweet Pop
        </h1>
        <p style={subtitleStyle}>
          Discover the sweet and tangy world of Sweet Pop SF -- Tanghulu - a traditional Chinese treat featuring
          fruits coated in a crispy sugar shell. From classic hawthorn to modern fruit varieties.
        </p>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
          📍 752 Grant Ave, San Francisco, CA 94108
        </p>
        <div>
          <a href="#varieties" style={buttonStyle}>Explore Varieties</a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 