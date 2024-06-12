import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../useCartContext";
import axios from "axios";

export default function Cart() {
  const { cartProduct, setCartProduct } = useCartContext();
  let [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      axios
        .get(`http://localhost:8081/api/v1/cart/getCart/${token}`)
        .then((result) => {
          setCartProduct(result.data);
          // eslint-disable-next-line react-hooks/exhaustive-deps
          totalCost = 0
          for (let index = 0; index < result.data.length; index++) {
            if(result.data[index].product.saleType === "no"){
              totalCost += result.data[index].product.price;
            }else{
              totalCost += result.data[index].product.price - result.data[index].product.price * result.data[index].product.sales / 100
            }
          }
          setTotalCost(totalCost)
          console.log(setTotalCost);
        })
        .catch((err) => console.log(err));
    }
  }, [setCartProduct]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="wishlist-nav">
          <div className="contact-title">
            <div className="contact-fix">
              <Link to="/home">Home</Link>
              &nbsp;/&nbsp;
              <p>Cart</p>
            </div>
          </div>
          <div className="cart-wrap">
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartProduct && cartProduct.length > 0 ? (
                  cartProduct.map((item) => (
                    <tr key={item.id}>
                      <td className="cart-text">{item.cartId}</td>
                      <td className="cart-text">{item.product.productName}</td>
                      <td className="cart-text">{item.product.saleType !== "no" ? (item.product.price - item.product.price * item.product.sales / 100) : item.product.price}</td>
                      <td className="cart-adjust">{item.quantity}</td>
                      <td>
                        <Link to="#">
                          <button>
                            <i className="bi bi-trash3" />
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="cart-text">
                      Your cart is empty.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            <div className="cart-synthetic">
              <h4>
                Total number of products: <span>{cartProduct.length}</span> product
              </h4>
              <button className="remove-all" type="button">
                Remove all
              </button>
            </div>
            <div className="cart-pay">
              <div className="cart-pay__body">
                <div className="cart-poin">
                  <p>Total cost of goods:</p> <span>${totalCost}</span>
                </div>
                <div className="cart-poin">
                  <p>Transport fee:</p> <span>${totalCost * 1  / 100}</span>
                </div>
                <div className="cart-poin">
                  <p>Total payment:</p> <span>${totalCost + totalCost * 1  / 100} </span>
                </div>
              </div>
              <div className="cart-footer">
                <p>
                  Pressing 'Place Order' implies that you agree to comply with <Link to="#">Exclusive's Terms and Conditions.</Link>
                </p>
                <Link to="/checkout">
                  <button className="order-cart" type="button">
                    Proceed to payment
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
