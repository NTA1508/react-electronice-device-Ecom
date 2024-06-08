import React from 'react';
import { Link } from 'react-router-dom';

const MyOrder = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="wishlist-nav">
          <div className="contact-title">
            <div className="contact-fix">
              <Link href="/home">Home</Link>
              &nbsp;/&nbsp;
              <p>My Order</p>
            </div>
          </div>
          <div className="cart-wrap">
            <table>
              <thead>
                <tr>
                  <th>Oder ID</th>
                  <th>Product picture</th>
                  <th>Name product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="cart-text">1</td>
                  <td className="cart-img">
                    <img src="./assets/images/product-1a.png" alt="img" />
                  </td>
                  <td className="cart-text">HAVIT HV-G92 Gamepad</td>
                  <td className="cart-text">$160</td>
                  <td className="cart-text">$160</td>
                  <td className="cart-text">Accept</td>
                </tr>
                <tr>
                  <td className="cart-text">1</td>
                  <td className="cart-img">
                    <img src="./assets/images/product-1a.png" alt="img" />
                  </td>
                  <td className="cart-text">HAVIT HV-G92 Gamepad</td>
                  <td className="cart-text">$160</td>
                  <td className="cart-text">$160</td>
                  <td className="cart-text">Accept</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
