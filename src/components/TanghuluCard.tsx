import React from 'react';
import { TanghuluItem } from '../types/tanghulu';
import { colors, fontSizes, spacing } from '../theme/theme';

interface TanghuluCardProps {
  item: TanghuluItem;
}

const TanghuluCard: React.FC<TanghuluCardProps> = ({ item }) => {
  const cardStyle: React.CSSProperties = {
    background: 'white',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  };

  const hoverStyle = {
    transform: 'translateY(-5px)',
    boxShadow: '0 6px 12px rgba(0,0,0,0.15)'
  };

  const imageContainerStyle: React.CSSProperties = {
    height: '200px',
    overflow: 'hidden',
    position: 'relative'
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease'
  };

  const contentStyle: React.CSSProperties = {
    padding: spacing.large,
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1
  };

  const popularityBarStyle: React.CSSProperties = {
    height: '4px',
    background: '#eee',
    borderRadius: '2px',
    marginTop: spacing.medium,
    overflow: 'hidden'
  };

  const popularityFillStyle: React.CSSProperties = {
    height: '100%',
    width: `${item.popularity * 10}%`,
    background: colors.primary
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      style={{ ...cardStyle, ...(isHovered ? hoverStyle : {}) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={imageContainerStyle}>
        <img 
          src={item.image || 'https://via.placeholder.com/300x200?text=Tanghulu'} 
          alt={item.name} 
          style={{
            ...imageStyle,
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
      </div>
      <div style={contentStyle}>
        <h3 style={{ color: colors.primary, marginBottom: spacing.small }}>{item.name}</h3>
        <h4 style={{ color: colors.text, marginBottom: spacing.medium, fontWeight: 400 }}>{item.chineseName}</h4>
        <p style={{ fontSize: fontSizes.small, color: 'rgba(0,0,0,0.7)', marginBottom: spacing.medium, flexGrow: 1 }}>
          {item.description.length > 120 
            ? `${item.description.substring(0, 120)}...` 
            : item.description
          }
        </p>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.xs }}>
            <span style={{ fontSize: fontSizes.small, color: colors.text }}>Popularity</span>
            <span style={{ fontSize: fontSizes.small, fontWeight: 'bold', color: colors.primary }}>{item.popularity}/10</span>
          </div>
          <div style={popularityBarStyle}>
            <div style={popularityFillStyle}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TanghuluCard; 