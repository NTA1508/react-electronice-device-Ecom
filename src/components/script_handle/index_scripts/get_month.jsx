import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
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

  productsArray.forEach((product, index) => {
    if (count === 0) {
      productChildren = [];
    }
    if (product.saleType === "month") {
      const productItem = (
        <div key={product.id} className="product-item">
          <Link to={`/detail/${product.id}`}>
            <div className="product-item__img">
            <img src= {`http://localhost:8081/api/v1/product/show/${product.id}`} alt="product-img" />
              <button className="add-cart" type="button">
              購入する
              </button>
            </div>
            <h4 className="product-name webkit-text">{product.productName}</h4>
          </Link>
          <div className="product-price">
            <span id="price-new">${product.price - (product.price * product.sales / 100)}</span>
            <span id="price-old">${product.price}</span>
          </div>
          <div className="product-action">
            <i className='bx bx-map-pin'></i>
            <span>{product.storageAddress}</span>
          </div>
          <div className="discount">-{product.sales}%</div>
          <div className="product-tools">
            <button className="product-tl__button" type="button">
              <i className='bx bx-heart'></i>
            </button>
          </div>
        </div>
      );

      productChildren.push(productItem);

      count++;
    }
    if (count === 4 || index === productsArray.length - 1) {
      const productDiv = (
        <div key={index} className="swiper-slide todays-slide__item">
          {productChildren}
        </div>
      );
      productDivs.push(productDiv);
      count = 0;
    }
  });

  return <div id="todaysList" className="swiper-wrapper">{productDivs}</div>;
};

export default ProductList;
