import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import TanghuluGrid from '../components/TanghuluGrid';
import HistorySection from '../components/HistorySection';
import { getTanghuluData, getTanghuluByCategory } from '../services/tanghuluData';
import { TanghuluCategory } from '../types/tanghulu';

const HomeScreen: React.FC = () => {
  const allTanghulu = getTanghuluData();
  const popularItems = [...allTanghulu.items].sort((a, b) => b.popularity - a.popularity).slice(0, 4);
  const traditionalItems = getTanghuluByCategory('traditional');
  const fruitItems = getTanghuluByCategory('fruit');
  const modernItems = getTanghuluByCategory('modern');

  const aboutSectionStyle: React.CSSProperties = {
    padding: '4rem 1rem',
    background: 'white',
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
    background: '#B71C1C'
  };

  const varietiesStyle: React.CSSProperties = {
    padding: '4rem 1rem',
    background: '#fff',
  };

  return (
    <div>
      <Header />
      
      <main>
        <HeroSection />
        
        <section id="varieties" style={varietiesStyle}>
          <div style={containerStyle}>
            <h2 style={titleStyle}>
              Tanghulu Varieties
              <div style={titleLineStyle}></div>
            </h2>
            
            <TanghuluGrid items={popularItems} title="Most Popular" />
            
            {traditionalItems.length > 0 && (
              <TanghuluGrid items={traditionalItems} title="Traditional" />
            )}
            
            {fruitItems.length > 0 && (
              <TanghuluGrid items={fruitItems} title="Fruit Varieties" />
            )}
            
            {modernItems.length > 0 && (
              <TanghuluGrid items={modernItems} title="Modern Creations" />
            )}
          </div>
        </section>
        
        <HistorySection />
        
        <section id="about" style={aboutSectionStyle}>
          <div style={containerStyle}>
            <h2 style={titleStyle}>
              About Tanghulu
              <div style={titleLineStyle}></div>
            </h2>
            
            <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8', fontSize: '1.1rem' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                Tanghulu (糖葫芦) is a traditional Chinese snack that consists of fruits coated in a hard sugar 
                shell. The classic version is made with hawthorn fruits (山楂, shānzhā), but modern variations 
                include all sorts of fruits like strawberries, grapes, kiwi, and more.
              </p>
              
              <p style={{ marginBottom: '1.5rem' }}>
                The preparation of tanghulu is an art in itself. The fruits are skewered on bamboo sticks 
                and then dipped in a boiling sugar syrup. When the syrup cools, it forms a hard, glassy coating 
                around the fruit. The result is a beautiful treat that provides a delightful contrast between 
                the crunchy sweet shell and the tart, juicy fruit inside.
              </p>
              
              <p style={{ marginBottom: '1.5rem' }}>
                In Chinese culture, tanghulu is not just a delicious snack but also carries cultural significance. 
                It's often associated with winter in northern China, particularly in cities like Beijing. Street 
                vendors selling tanghulu are a common sight during cold months, and the treat brings warmth and 
                sweetness to chilly days.
              </p>
              
              <p>
                Today, tanghulu has gained international recognition and popularity through social media. Food 
                enthusiasts around the world are discovering and recreating this traditional Chinese sweet, 
                often adding their own creative twists to the classic recipe.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomeScreen; 