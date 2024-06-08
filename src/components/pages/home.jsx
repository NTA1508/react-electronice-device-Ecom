import React, { Component } from 'react';
import CountdownTimer from '../script_handle/index_scripts/countdowntimer';
import ToDaySlide from '../script_handle/index_scripts/today_slide';
import HeroSlide from '../script_handle/index_scripts/hero_slide';
import MonthList from '../script_handle/index_scripts/get_month';
import OurProducts from '../script_handle/index_scripts/our_products';
import feature1 from "../../assets/image/featured-1.png"
import feature3 from "../../assets/image/featured-3.png"
import nitendo from "../../assets/image/NintendoSwitch.png"
import vr from "../../assets/image/VR.png"
import deliveryImg from "../../assets/image/icon-delivery.png"
import customImg from "../../assets/image/Icon-customer_service.png"
import secureImg from "../../assets/image/Icon-secure.png"
import DaysLeftInMonth from '../script_handle/index_scripts/dayleft';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <>
        <div class="container">
          <div className="wrapper">
            <section className="section hero">
              {/* category */}
              <div className="category">
                <div className="category-item">
                  <div className="menu-title">
                    <Link to="/products">
                      <p>All products</p>
                    </Link>
                  </div>
                </div>
                <div className="category-item">
                  <div className="menu-title">
                    <Link to="/mobiles">
                      <p>Mobile phones</p>
                    </Link>
                  </div>
                </div>
                <div className="category-item">
                  <div className="menu-title">
                    <Link to="/laptops">
                      <p>Laptops and Tablets</p>
                    </Link>
                  </div>
                </div>
                <div className="category-item">
                  <div className="menu-title">
                    <Link to="/tv">
                      <p>Televisions and Monitors</p>
                    </Link>
                  </div>
                </div>
                <div className="category-item">
                  <div className="menu-title">
                    <Link to="/audios">
                      <p>Audio and Headphones</p>
                    </Link>
                  </div>
                </div>
                <div className="category-item">
                  <div className="menu-title">
                    <Link to="/cameras">
                      <p>Cameras and Camcorders</p>
                    </Link>
                  </div>
                </div>
                <div className="category-item">
                  <div className="menu-title">
                    <Link to="/consoles">
                      <p>Game consoles</p>
                    </Link>
                  </div>
                </div>
                <div className="category-item">
                  <div className="menu-title">
                    <Link to="/printers">
                      <p>Printers and Scanners</p>
                    </Link>
                  </div>
                </div>
                <div className="category-item">
                  <div className="menu-title">
                    <Link to="/smart">
                      <p>Smart home appliances</p>
                    </Link>
                  </div>
                </div>
              </div>
              <HeroSlide />
            </section>
            {/* todays */}
            <ToDaySlide />
            {/* month */}
            <section className="section month">
              <div className="section-title">This Month</div>
              <div className="todays-title month-title">
                <DaysLeftInMonth />
                <Link to="/month_sale" class="section-link">View All</Link>
              </div>
              <MonthList />
            </section>
            {/* banner */}
            <CountdownTimer />
            {/* product */}
            <section className="section product">
              <div className="section-title">Our Products</div>
              <div className="swiper todays-slide">
                <div className="todays-title">
                  <h1>Explore Our Products</h1>
                </div>
                <OurProducts />
                <div className="todays-action">
                  <div className="swiper-button-next" />
                  <div className="swiper-button-prev" />
                </div>
              </div>
            </section>
            {/* featured */}
            <section className="section featured">
              <div className="section-title">Featured</div>
              <div className="todays-title month-title">
                <h1>New Arrival</h1>
              </div>
              <div className="featured-wrap">
                <div className="featured-left">
                  <img
                    src={feature1}
                    alt=""
                    className="featured-img"
                  />
                  <div className="featured-text">
                    <h2>PlayStation 5</h2>
                    <p>Black and White version of the PS5 coming out on sale.</p>
                    <Link to="#">Shop Now</Link>
                  </div>
                </div>
                <div className="featured-right">
                  <div className="featured-item">
                    <img
                      src={nitendo}
                      alt=""
                      className="featured-img"
                    />
                    <div className="featured-text">
                      <h2>NINTENDO's Collections</h2>
                      <p>Anytime, Anywhere, with anyone</p>
                      <Link to="#">Shop Now</Link>
                    </div>
                  </div>
                  <div className="featured-box">
                    <div className="featured-vid">
                      <img
                        src={feature3}
                        alt=""
                        className="featured-img"
                      />
                      <div className="featured-text">
                        <h2>Speakers</h2>
                        <p>Amazon wireless speakers</p>
                        <Link to="#">Shop Now</Link>
                      </div>
                    </div>
                    <div className="featured-vid">
                      <img
                        src={vr}
                        alt=""
                        className="featured-img"
                      />
                      <div className="featured-text">
                        <h2>VR</h2>
                        <p>Virtual world real reaction</p>
                        <Link to="#">Shop Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* advantage */}
            <section className="section advantage">
              <div className="advantage-list">
                <div className="advantage-item">
                  <div className="advantage-logo">
                    <img src={deliveryImg} alt="" />
                  </div>
                  <h3>FREE AND FAST DELIVERY</h3>
                  <p>Free delivery for all orders over $140</p>
                </div>
                <div className="advantage-item">
                  <div className="advantage-logo">
                    <img src={customImg} alt="" />
                  </div>
                  <h3>24/7 CUSTOMER SERVICE</h3>
                  <p>Friendly 24/7 customer support</p>
                </div>
                <div className="advantage-item">
                  <div className="advantage-logo">
                    <img src={secureImg} alt="" />
                  </div>
                  <h3>MONEY BACK GUARANTEE</h3>
                  <p>We reurn money within 30 days</p>
                </div>
              </div>
            </section>
          </div>
        </div>
        {/* end */}
        {/* md-image */}
        <div className="md-images">
          <div className="images-wrap">
            <div className="images-title">
              <h3>Lorem ipsum dolor sit amet.</h3>
              <i className="bx bx-x close-images" />
            </div>
            <img src="../assets/images/product-2a.png" alt="images" />
          </div>
        </div>
        {/* end */}
      </>
    );
  }
}

export default Home;
