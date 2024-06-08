// import PaginationComponent from "../../script_handle/index_scripts/whishlist_pagechange";
import { useEffect, useState } from "react";
import axios from 'axios';
import { Link, NavLink } from "react-router-dom";

export default function Cameras() {
    const [products, setProducts] = useState([]);
    // const [currentPage, setCurrentPage] = useState(1);
    // const currentPage = 1; 
    // const [productsPerPage] = useState(12);

    useEffect(() => {
        axios.get('https://web-shopping-exclusive.onrender.com/products')
            .then(response => setProducts(response.data))
            .catch(err => console.log(err))
    }, []);

    // const indexOfLastProduct = currentPage * productsPerPage;
    // const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    // const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <div className="container">
            <div className="wrapper" style={{ display: "flex" }}>
                <div className="category-product">
                    <div className="category-item-product">
                        <div className="menu-title">
                            <NavLink to={"/products"}>
                                <p>All Products</p>
                            </NavLink>
                        </div>
                    </div>
                    <div className="category">
                        <div className="category-item">
                            <div className="menu-title">
                                <NavLink to={"/mobiles"}>
                                    <p>Mobile phones</p>
                                </NavLink>
                            </div>
                        </div>
                        <div className="category-item">
                            <div className="menu-title">
                                <NavLink to={"/laptops"}>
                                    <p>Laptops and Tablets</p>
                                </NavLink>
                            </div>
                        </div>
                        <div className="category-item">
                            <div className="menu-title">
                                <NavLink to={"/tv"}>
                                    <p>Televisions and Monitors</p>
                                </NavLink>
                            </div>
                        </div>
                        <div className="category-item">
                            <div className="menu-title">
                                <NavLink to={"/audios"}>
                                    <p>Audio and Headphones</p>
                                </NavLink>
                            </div>
                        </div>
                        <div className="category-item">
                            <div className="menu-title">
                                <NavLink to={"/cameras"}>
                                    <p style={{ color: "#DB4444" }}>Cameras</p>
                                </NavLink>
                            </div>
                        </div>
                        <div className="category-item">
                            <div className="menu-title">
                                <NavLink to={"/consoles"}>
                                    <p>Game consoles</p>
                                </NavLink>
                            </div>
                        </div>
                        <div className="category-item">
                            <div className="menu-title">
                                <NavLink to={"/printers"}>
                                    <p>Printers and Scanners</p>
                                </NavLink>
                            </div>
                        </div>
                        <div className="category-item">
                            <div className="menu-title">
                                <NavLink to={"/smart"}>
                                    <p>Smart home appliances</p>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wishlist-nav-1" style={{ marginLeft: "10px" }}>
                    <div className="contact-title">
                        <div className="contact-fix">
                            <Link to="/home">Home</Link>
                            &nbsp;/&nbsp;
                            <p>Cameras</p>
                        </div>
                    </div>
                    <div className="wishlist-wrap">
                        <div className="wishlist-list">
                            {products
                                .filter(product => product.type === "cameras")
                                .map(product => (
                                    <div className="product-item" key={product.id}>
                                        <Link to={`/detail/${product._id}`}>
                                            <div className="product-item__img">
                                                <img src={product.product_image} alt="product-img" />
                                                <button className="add-cart" type="button">
                                                    Add To Cart
                                                </button>
                                            </div>
                                            <h4 className="product-name webkit-text">{product.product_name}</h4>
                                        </Link>
                                        <div className="product-price">
                                            {product.sale_type === "no" ? (
                                                <>
                                                    <span id="price-new">${product.price}</span>
                                                </>
                                            ) : (
                                                <>
                                                    <span id="price-new">${product.price - product.price * product.sales / 100}</span>
                                                    <span id="price-old">${product.price}</span>
                                                </>
                                            )}


                                        </div>
                                        <div className="product-action">
                                            <i className="bx bx-map-pin" />
                                            <span>{product.storage_address}</span>
                                        </div>
                                        {product.sale_type === "no" ? (
                                            <>
                                                <span></span>
                                            </>
                                        ) : (
                                            <>
                                                <div className="discount">-{product.sales}%</div>
                                            </>
                                        )}
                                        <div className="product-tools">
                                            <button className="product-tl__button" type="button">
                                                <i className="bx bx-heart" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                        </div>
                        {/* pagination - phân trang */}
                        {/* <PaginationComponent /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
