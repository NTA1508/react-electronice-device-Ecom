import React, { useEffect } from 'react';
import 'swiper/css';
import TodaysProducts from './get_products';
import CountdownBannerTimer from './banner_time';
import { Link } from 'react-router-dom';

const ToDaySlide = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
    script.async = true;

    document.head.appendChild(script);

    script.addEventListener('load', () => {
      const swiper = new window.Swiper(".todays-slide", {
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      return () => {
        swiper.destroy();
      };
    });

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="section todays">
      <div className="section-title">Today's</div>
      <div className="swiper todays-slide">
        <CountdownBannerTimer />
        <TodaysProducts />
        <div className="todays-action">
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>
      <div className="section-button">
        <Link to='/day_sale'><button>View All Products</button></Link>
      </div>
    </section>
  );
};

export default ToDaySlide;