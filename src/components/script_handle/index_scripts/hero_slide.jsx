import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import ImageSlide from '../../../assets/image/slide-1.png'

const HeroSlide = () => {
    useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
      script.async = true;
  
      document.head.appendChild(script);

      script.addEventListener('load', async  () => {
        await new Promise((resolve) => setTimeout(resolve, 0));
        const swiper = new window.Swiper(".slide", {
            loop: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            autoplay: {
              delay: 3500,
              disableOnInteraction: false,
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
      <div className="swiper slide">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <Link to="#">
              <img src={ImageSlide} alt="slide" />
            </Link>
          </div>
          <div className="swiper-slide">
            <Link to="#">
              <img src={ImageSlide} alt="slide" />
            </Link>
          </div>
          <div className="swiper-slide">
            <Link to="#">
              <img src={ImageSlide} alt="slide" />
            </Link>
          </div>
        </div>
        <div className="swiper-pagination" />
      </div>
    );
  };
  
  export default HeroSlide;

  