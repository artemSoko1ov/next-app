'use client';

import ColorBends from '../../model/colorBends';
import './HomePage.scss';

const HomePage = () => (
  <div className="home">
    <div className="home__background">
      <ColorBends
        colors={['#ff5c7a', '#8a5cff', '#00ffd1']}
        rotation={100}
        speed={0.3}
        scale={1}
        frequency={1}
        warpStrength={1}
        mouseInfluence={0.8}
        parallax={0.6}
        noise={0.1}
        transparent
      />
    </div>

    <div className="home__content">
      <section className="home__hero">
        <div className="home__hero-content">
          <h1 className="home__title">Создавай. Исследуй. Развивайся.</h1>
          <p className="home__subtitle">
            Добро пожаловать в наш космический мир Next.js — место, где дизайн, технологии и
            скорость соединяются в одно целое.
          </p>
          <button className="home__cta">Начать путь</button>
        </div>
      </section>
    </div>
  </div>
);

export default HomePage;
