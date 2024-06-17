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
                            <Link to="/home">ホーム</Link>
                            &nbsp;/&nbsp;
                            <p>概要</p>
                        </div>
                    </div>
                    <div className="about-nav">
                        <section className="about-story">
                            <div className="story-left">
                                <h2>私たちの物語</h2>
                                <p>
                                2015年に立ち上げられ、Exclusiveは南アジアで最も優れたオンラインショッピングマーケットプレイスであり、バングラデシュにおいても活発な存在です。幅広いマーケティング、データ、およびサービスソリューションを提供し、
                                <strong>電気物</strong>は10,500人の販売者と300ブランドを擁し、地域全体で300万人の顧客にサービスを提供しています。{" "}
                                </p>
                                <p>
                                <strong>電気物</strong>には100万以上の商品があり、非常に速いペースで成長しています。エクスクルーシブは消費者向けを含む多様なカテゴリーの品揃えを提供しています。
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
                                <h3>無料で迅速な配送 </h3>
                                <p>すべての注文に対して140ドル以上で送料無料</p>
                                </div>
                                <div className="advantage-item">
                                <div className="advantage-logo">
                                    <img src={customImg} alt="" />
                                </div>
                                <h3>24時間365日のカスタマーサービス</h3>
                                <p>親切な24時間365日のカスタマーサポート</p>
                                </div>
                                <div className="advantage-item">
                                <div className="advantage-logo">
                                    <img src={secureImg} alt="" />
                                </div>
                                <h3>返金保証</h3>
                                <p>30日以内に返金します</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>

    )
}