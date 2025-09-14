import React from 'react';
import { colors } from '../theme/theme';

const HistorySection: React.FC = () => {
  const sectionStyle: React.CSSProperties = {
    padding: '4rem 1rem',
    background: colors.secondary,
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
    position: 'relative',
    paddingBottom: '0.5rem',
    textAlign: 'center'
  };

  const titleLineStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80px',
    height: '3px',
    background: colors.primary
  };

  const contentStyle: React.CSSProperties = {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: '2rem'
  };

  const textSectionStyle: React.CSSProperties = {
    flex: '1 1 600px',
  };

  const imageSectionStyle: React.CSSProperties = {
    flex: '1 1 400px',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
  };

  const paragraphStyle: React.CSSProperties = {
    marginBottom: '1.5rem',
    fontSize: '1.1rem',
    lineHeight: '1.8'
  };

  return (
    <section id="history" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>
          The Rich History of Tanghulu
          <div style={titleLineStyle}></div>
        </h2>
        
        <div style={contentStyle}>
          <div style={textSectionStyle}>
            <p style={paragraphStyle}>
              Tanghulu (糖葫芦), also known as bingtanghulu (冰糖葫芦), is a traditional northern Chinese snack 
              consisting of candied fruit on skewers. Its history dates back to the Song Dynasty (960-1279 AD) 
              where it was originally created as a medicine to treat cold-related illnesses.
            </p>
            <p style={paragraphStyle}>
              Legend has it that an imperial doctor created this sweet remedy for an emperor's concubine who was 
              suffering from an illness. The tart hawthorn fruit was coated in sugar syrup to make it more palatable. 
              The treatment was so effective that it became popular throughout the imperial court and eventually 
              spread to become a favorite street food.
            </p>
            <p style={paragraphStyle}>
              Traditionally, tanghulu was made with hawthorn (山楂, shānzhā), a tart, bright red fruit native to northern 
              China. The combination of the sweet, hard candy shell with the sour fruit inside creates a distinctive 
              flavor balance that has been beloved for centuries.
            </p>
            <p style={paragraphStyle}>
              In modern times, tanghulu has evolved to include a variety of fruits beyond the traditional hawthorn, 
              including strawberries, grapes, mandarin oranges, and even exotic combinations. It has also gained 
              international popularity through social media, where its glossy, beautiful appearance makes it 
              visually striking.
            </p>
          </div>
          <div style={imageSectionStyle}>
            <img 
              src="https://images.unsplash.com/photo-1626082929543-5bfd2d1168f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Traditional Tanghulu"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection; 