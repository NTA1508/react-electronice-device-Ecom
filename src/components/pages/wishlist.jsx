// import PaginationComponent from "../script_handle/index_scripts/whishlist_pagechange";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function WishList() {
    const [wishNumber, setWishNumber] = useState(0);
    useEffect(() => {
        const wishlistItems = document.querySelectorAll('.wishlist-list .product-item');
    
        setWishNumber(wishlistItems.length);
      }, [wishNumber]); 
    return (
        <div className="container">
            <div className="wrapper">
                <div className="wishlist-nav">
                    <div className="contact-title">
                        <div className="contact-fix">
                            <Link to="/home">Home</Link>
                            &nbsp;/&nbsp;
                            <p>Wishlist</p>
                        </div>
                    </div>
                    <div className="wishlist-wrap">
                        <div className="wishlist-list">
                            <div className="product-item">
                                <Link to="#">
                                    <div className="product-item__img">
                                        <img src="./assets/images/product-1a.png" alt="product-img" />
                                        <button className="add-cart" type="button">
                                            Add To Cart
                                        </button>
                                    </div>
                                    <h4 className="product-name webkit-text">HAVIT HV-G92 Gamepad</h4>
                                </Link>
                                <div className="product-price">
                                    <span id="price-new">$120</span>
                                    <span id="price-old">$160</span>
                                </div>
                                <div className="product-action">
                                    <i className="bx bx-map-pin" />
                                    <span>Hà Nội</span>
                                </div>
                                <div className="discount">-28%</div>
                                <div className="product-tools">
                                    <button className="product-tl__button" type="button">
                                        <i className="bi bi-trash3" />
                                    </button>
                                </div>
                            </div>
                            <div className="product-item">
                                <Link to="#">
                                    <div className="product-item__img">
                                        <img src="./assets/images/product-1a.png" alt="product-img" />
                                        <button className="add-cart" type="button">
                                            Add To Cart
                                        </button>
                                    </div>
                                    <h4 className="product-name webkit-text">HAVIT HV-G92 Gamepad</h4>
                                </Link>
                                <div className="product-price">
                                    <span id="price-new">$120</span>
                                    <span id="price-old">$160</span>
                                </div>
                                <div className="product-action">
                                    <i className="bx bx-map-pin" />
                                    <span>Hà Nội</span>
                                </div>
                                <div className="discount">-28%</div>
                                <div className="product-tools">
                                    <button className="product-tl__button" type="button">
                                        <i className="bi bi-trash3" />
                                    </button>
                                </div>
                            </div>
                            <div className="product-item">
                                <Link to="#">
                                    <div className="product-item__img">
                                        <img src="./assets/images/product-1a.png" alt="product-img" />
                                        <button className="add-cart" type="button">
                                            Add To Cart
                                        </button>
                                    </div>
                                    <h4 className="product-name webkit-text">HAVIT HV-G92 Gamepad</h4>
                                </Link>
                                <div className="product-price">
                                    <span id="price-new">$120</span>
                                    <span id="price-old">$160</span>
                                </div>
                                <div className="product-action">
                                    <i className="bx bx-map-pin" />
                                    <span>Hà Nội</span>
                                </div>
                                <div className="discount">-28%</div>
                                <div className="product-tools">
                                    <button className="product-tl__button" type="button">
                                        <i className="bi bi-trash3" />
                                    </button>
                                </div>
                            </div>
                            <div className="product-item">
                                <Link to="#">
                                    <div className="product-item__img">
                                        <img src="./assets/images/product-1a.png" alt="product-img" />
                                        <button className="add-cart" type="button">
                                            Add To Cart
                                        </button>
                                    </div>
                                    <h4 className="product-name webkit-text">HAVIT HV-G92 Gamepad</h4>
                                </Link>
                                <div className="product-price">
                                    <span id="price-new">$120</span>
                                    <span id="price-old">$160</span>
                                </div>
                                <div className="product-action">
                                    <i className="bx bx-map-pin" />
                                    <span>Hà Nội</span>
                                </div>
                                <div className="discount">-28%</div>
                                <div className="product-tools">
                                    <button className="product-tl__button" type="button">
                                        <i className="bi bi-trash3" />
                                    </button>
                                </div>
                            </div>
                            <div className="product-item">
                                <Link to="#">
                                    <div className="product-item__img">
                                        <img src="./assets/images/product-1a.png" alt="product-img" />
                                        <button className="add-cart" type="button">
                                            Add To Cart
                                        </button>
                                    </div>
                                    <h4 className="product-name webkit-text">HAVIT HV-G92 Gamepad</h4>
                                </Link>
                                <div className="product-price">
                                    <span id="price-new">$120</span>
                                    <span id="price-old">$160</span>
                                </div>
                                <div className="product-action">
                                    <i className="bx bx-map-pin" />
                                    <span>Hà Nội</span>
                                </div>
                                <div className="discount">-28%</div>
                                <div className="product-tools">
                                    <button className="product-tl__button" type="button">
                                        <i className="bi bi-trash3" />
                                    </button>
                                </div>
                            </div>
                            <div className="product-item">
                                <Link to="#">
                                    <div className="product-item__img">
                                        <img src="./assets/images/product-1a.png" alt="product-img" />
                                        <button className="add-cart" type="button">
                                            Add To Cart
                                        </button>
                                    </div>
                                    <h4 className="product-name webkit-text">HAVIT HV-G92 Gamepad</h4>
                                </Link>
                                <div className="product-price">
                                    <span id="price-new">$120</span>
                                    <span id="price-old">$160</span>
                                </div>
                                <div className="product-action">
                                    <i className="bx bx-map-pin" />
                                    <span>Hà Nội</span>
                                </div>
                                <div className="discount">-28%</div>
                                <div className="product-tools">
                                    <button className="product-tl__button" type="button">
                                        <i className="bi bi-trash3" />
                                    </button>
                                </div>
                            </div>
                            <div className="product-item">
                                <Link to="#">
                                    <div className="product-item__img">
                                        <img src="./assets/images/product-1a.png" alt="product-img" />
                                        <button className="add-cart" type="button">
                                            Add To Cart
                                        </button>
                                    </div>
                                    <h4 className="product-name webkit-text">HAVIT HV-G92 Gamepad</h4>
                                </Link>
                                <div className="product-price">
                                    <span id="price-new">$120</span>
                                    <span id="price-old">$160</span>
                                </div>
                                <div className="product-action">
                                    <i className="bx bx-map-pin" />
                                    <span>Hà Nội</span>
                                </div>
                                <div className="discount">-28%</div>
                                <div className="product-tools">
                                    <button className="product-tl__button" type="button">
                                        <i className="bi bi-trash3" />
                                    </button>
                                </div>
                            </div>
                            <div className="product-item">
                                <Link to="#">
                                    <div className="product-item__img">
                                        <img src="./assets/images/product-1a.png" alt="product-img" />
                                        <button className="add-cart" type="button">
                                            Add To Cart
                                        </button>
                                    </div>
                                    <h4 className="product-name webkit-text">HAVIT HV-G92 Gamepad</h4>
                                </Link>
                                <div className="product-price">
                                    <span id="price-new">$120</span>
                                    <span id="price-old">$160</span>
                                </div>
                                <div className="product-action">
                                    <i className="bx bx-map-pin" />
                                    <span>Hà Nội</span>
                                </div>
                                <div className="discount">-28%</div>
                                <div className="product-tools">
                                    <button className="product-tl__button" type="button">
                                        <i className="bi bi-trash3" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* pagination - phân trang */}
                        {/* <PaginationComponent/> */}
                    </div>
                </div>
            </div>
        </div>

    )
}