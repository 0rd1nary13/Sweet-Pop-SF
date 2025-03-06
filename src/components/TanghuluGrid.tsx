import React from 'react';
import TanghuluCard from './TanghuluCard';
import { TanghuluItem } from '../types/tanghulu';

interface TanghuluGridProps {
  items: TanghuluItem[];
  title?: string;
}

const TanghuluGrid: React.FC<TanghuluGridProps> = ({ items, title }) => {
  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '2rem',
    margin: '2rem 0'
  };

  const titleStyle: React.CSSProperties = {
    marginBottom: '1.5rem',
    position: 'relative',
    paddingBottom: '0.5rem'
  };

  const titleLineStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '60px',
    height: '3px',
    background: '#B71C1C'
  };

  return (
    <div>
      {title && (
        <div style={titleStyle}>
          <h2>{title}</h2>
          <div style={titleLineStyle}></div>
        </div>
      )}
      <div style={gridStyle}>
        {items.map(item => (
          <TanghuluCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default TanghuluGrid; 