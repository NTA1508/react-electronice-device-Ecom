import ProfileSlide from "../script_handle/index_scripts/about_slide"
import storyImage from "../../assets/image/story.png"
import deliveryImg from "../../assets/image/icon-delivery.png"
import customImg from "../../assets/image/Icon-customer_service.png"
import secureImg from "../../assets/image/Icon-secure.png"
import { Link } from "react-router-dom"
export default function AboutUs() {
    return (
        <div className="container">
            <div className="wrapper">
                <div className="contact-nav">
                    <div className="contact-title">
                        <div className="contact-fix">
                            <Link to="/home">Home</Link>
                            &nbsp;/&nbsp;
                            <p>About</p>
                        </div>
                    </div>
                    <div className="about-nav">
                        <section className="about-story">
                            <div className="story-left">
                                <h2>Our Story</h2>
                                <p>
                                    Launced in 2015, Exclusive is South Asia’s premier online shopping
                                    makterplace with an active presense in Bangladesh. Supported by
                                    wide range of tailored marketing, data and service solutions,
                                    Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
                                    customers across the region.{" "}
                                </p>
                                <p>
                                    Exclusive has more than 1 Million products to offer, growing at a
                                    very fast. Exclusive offers a diverse assotment in categories
                                    ranging from consumer.
                                </p>
                            </div>
                            <img
                                src={storyImage}
                                alt="story-img"
                                className="story-img"
                            />
                        </section>
                        <section className="story-list">
                            <div className="story-item">
                                <div className="advantage-logo">
                                    <img src={deliveryImg} alt="" />
                                </div>
                                <h3>10.5k</h3>
                                <p>Sallers active our site</p>
                            </div>
                            <div className="story-item">
                                <div className="advantage-logo">
                                    <img src={deliveryImg} alt="" />
                                </div>
                                <h3>10.5k</h3>
                                <p>Sallers active our site</p>
                            </div>
                            <div className="story-item">
                                <div className="advantage-logo">
                                    <img src={deliveryImg} alt="" />
                                </div>
                                <h3>10.5k</h3>
                                <p>Sallers active our site</p>
                            </div>
                            <div className="story-item">
                                <div className="advantage-logo">
                                    <img src={deliveryImg} alt="" />
                                </div>
                                <h3>10.5k</h3>
                                <p>Sallers active our site</p>
                            </div>
                        </section>
                        <ProfileSlide />
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
            </div>
        </div>

    )
}