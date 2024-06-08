// import PaginationComponent from "../../script_handle/index_scripts/whishlist_pagechange";
import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function TodaySalePage() {
    const [products, setProducts] = useState([]);
    // const [currentPage, setCurrentPage] = useState(1);
    // const currentPage = 1; 
    // const [productsPerPage] = useState(12);

    useEffect(() => {
        axios.get('http://localhost:8081/api/v1/product/getAll')
            .then(response => setProducts(response.data))
            .catch(err => console.log(err))
    }, []);

    // const indexOfLastProduct = currentPage * productsPerPage;
    // const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    // const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    return (
        <div className="container">
           <div className="wrapper" style={{ display: "flex" }}>
                <div className="wishlist-nav">
                    <div className="contact-title">
                        <div className="contact-fix">
                            <Link to="/home">Home</Link>
                            &nbsp;/&nbsp;
                            <p>Day sale</p>
                        </div>
                    </div>
                    <div className="wishlist-wrap">
                        <div className="wishlist-list">
                            {products
                                .filter(product => product.saleType === "day")
                                .map(product => (
                                    <div className="product-item" key={product.id}>
                                        <Link to={`/detail/${product.id}`}>
                                            <div className="product-item__img">
                                            <img src= {`http://localhost:8081/api/v1/product/show/${product.id}`} alt="product-img" />
                                                <button className="add-cart" type="button">
                                                    Add To Cart
                                                </button>
                                            </div>
                                            <h4 className="product-name webkit-text">{product.productName}</h4>
                                        </Link>
                                        <div className="product-price">
                                            <span id="price-new">${product.price - product.price * product.sales / 100}</span>
                                            <span id="price-old">${product.price}</span>
                                        </div>
                                        <div className="product-action">
                                            <i className="bx bx-map-pin" />
                                            <span>{product.storageAddress}</span>
                                        </div>
                                        <div className="discount">-{product.sales}%</div>
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
