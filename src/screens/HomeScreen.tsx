import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import TanghuluGrid from '../components/TanghuluGrid';
import HistorySection from '../components/HistorySection';
import { getTanghuluData, getTanghuluByCategory } from '../services/tanghuluData';
import { TanghuluCategory } from '../types/tanghulu';
import { colors } from '../theme/theme';

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
    background: colors.primary
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
              <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>Sweet Pop</h3>
              <p style={{ marginBottom: '1.5rem' }}>
                <strong>TANGHULU</strong>
                <br />
                PRONOUNCES TAANG-HOO-LOO
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Tanghulu, a traditional Chinese snack of candied fruit on a skewer, has a long history that is tied
                to Chinese folklore and the Song Dynasty (960-1279 AD). Legend has it that a royal physician created
                the treat to cure an emperor's concubine's nagging heartburn. The fruit dipped in sugar syrup to
                improve her digestion. The remedy worked, and tanghulu became popular among the public.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Originally made with hawthorns, this candied fruit snack evolved over time. Now featuring various
                fruits like strawberries and grapes.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Tanghulu has a hard sugar shell, releasing a delicious crunchy sweetness that enhances its inner fruit
                juiciness. A perfect harmony of sweet and sour, this popular street snack in China has now been enjoyed
                by young and old for generations. A new upgrade of Custom Children's Memories.
              </p>
              <h4 style={{ marginBottom: '1rem' }}>Chinese Text</h4>
              <p style={{ marginBottom: '1.5rem' }}>
                <strong>On the skewer:</strong>
                <br />
                糖葫芦 (táng hú lu)
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                <strong>Main Text Block:</strong>
                <br />
                冰糖葫芦，中国传统美食，酸甜可口，妇孺皆知。起源于南宋时期，历史悠久，承载着数代人的童年记忆。相传南宋光宗皇帝为爱妃寻医问药，御医用冰糖与山楂配伍，治愈了爱妃的厌食症。后传入民间，成为家喻户晓的美味零食。最初的冰糖葫芦以山楂为主料，外面裹着一层晶莹剔光的冰糖，咬一口，嘎嘣脆，酸甜可口，健脾开胃。随着时代的发展，冰糖葫芦的品类也在不断地推陈出新。如今，冰糖葫芦已不再是单一的山楂品种，取而代之的是各种时令水果，如草莓、葡萄、橘子等。
              </p>
              <p>
                冰糖葫芦外壳坚硬，入口嘎嘣脆，甜而不腻，果香四溢。酸与甜的完美结合，让这款风靡中国的大众美食经久不衰，成为男女老少的最爱。客制童年记忆新升级。
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