import ChangeImage from "../script_handle/index_scripts/product_detail";
import ProductIncrement from "../script_handle/index_scripts/product_increment";
import React, { useState, useEffect, useCallback } from "react";
import { useCartContext } from "../../useCartContext";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { setCartProduct } = useCartContext();
  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    // Fetch the product details from the server
    axios
      .get(`http://localhost:8081/api/v1/product/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => console.error("Error fetching product details:", error));
  }, [id]);

  const addToCart = useCallback(
    (product) => {
      axios
        .post(`http://localhost:8081/api/v1/cart/addCart/${id}/${token}`, { quantity: 1 })
        .then((response) => {
          setCartProduct((prev) => [...prev, { ...product, quantity: 1 }]);
          window.location.reload()
          alert("Product has been added to cart ")
        })
        .catch((error) => console.error("Error adding product to cart:", error));
    },
    [id, token, setCartProduct]
  );

  return (
    <>
      {product ? (
        <div className="container">
          <div className="wrapper">
            <div className="wishlist-nav">
              <div className="contact-title">
                <div className="contact-fix">
                  <Link to="/home">ホーム</Link>
                  &nbsp;/&nbsp;
                  <p>{product.productName}</p>
                </div>
              </div>
              <div className="product-wrap">
                <ChangeImage />
                <div className="product-content">
                  <h2>{product.productName}</h2>
                  <nav className="pro-nav-st">
                    <div className="product-ct-star">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                    </div>
                    <span>|</span>
                    <p>在庫あり: {product.stockNumber}</p>
                  </nav>
                  <div style={{display: "flex"}}>
                    {product.saleType === "no" 
                      ? 
                        <h1 style={{marginRight: "20px"}} id="price-new">${product.price}</h1>
                      :
                      <>
                        <h1 style={{marginRight: "20px"}} id="price-old">${product.price}</h1>
                        <h1 id="price-new">${product.price - product.price * product.sales / 100}</h1>
                      </>
                    }
                  </div>
                  <p>{product.description}</p>
                  <hr />
                  <div className="product-nb">
                    <nav>
                      <ProductIncrement maxIncrement={product.stockNumber} />
                      <Link to="#">
                        <button
                          className="pro-btn"
                          type="button"
                          onClick={() => {
                            addToCart(product);
                          }}
                        >
                          今すぐ購入
                        </button>
                      </Link>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default ProductDetail;
