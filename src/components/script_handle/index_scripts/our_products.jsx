import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const OurProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/api/v1/product/getAll')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  const productsArray = Array.isArray(products) ? products : [];

  const productDivs = [];
  let productChildren = [];
  let count = 0;

  productsArray.forEach((products, index) => {
    if (count === 0) {
      productChildren = [];
    }
    const productItem = (
      <div key={products.id} className="product-item">
        <Link to={`/detail/${products.id}`}>
          <div className="product-item__img">
          <img src= {`http://localhost:8081/api/v1/product/show/${products.id}`} alt="product-img" />
            <button className="add-cart" type="button">
            購入する
            </button>
          </div>
          <h4 className="product-name webkit-text">{products.productName}</h4>
        </Link>
        <div className="product-price">
          {products.saleType === "no" ? (
            <>
              <span id="price-new">${products.price}</span>
            </>
          ) : (
            <>
              <span id="price-new">${products.price - products.price * products.sales / 100}</span>
              <span id="price-old">${products.price}</span>
            </>
          )}


        </div>
        <div className="product-action">
          <i className="bx bx-map-pin" />
          <span>{products.storageAddress}</span>
        </div>
        {products.saleType === "no" ? (
          <>
            <span></span>
          </>
        ) : (
          <>
            <div className="discount">-{products.sales}%</div>
          </>
        )}
        <div className="product-tools">
          <button className="product-tl__button" type="button">
            <i className='bx bx-heart'></i>
          </button>
        </div>
      </div>

    );
    productChildren.push(productItem);

    count++;
    if (count === 8 || index === productsArray.length - 1) {
      const productDiv = (
        <div key={index} className="swiper-slide todays-slide__item">
          {productChildren}
        </div>
      );
      productDivs.push(productDiv);
      count = 0;
    }
  });
  return <div className="swiper-wrapper" id="productList">{productDivs}</div>;
};

export default OurProducts;
