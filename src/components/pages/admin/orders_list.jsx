import React from 'react';
import { Link } from 'react-router-dom';
const OrdersList = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="wishlist-nav">
          <div className="contact-title">
            <div className="contact-fix">
              <Link to="/admin">管理者</Link>
              &nbsp;/&nbsp;
              <p>注文リスト</p>
            </div>
          </div>
          <div className="cart-wrap">
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>名前</th>
                  <th>住所</th>
                  <th>電話番号</th>
                  <th>製品名</th>
                  <th>数量</th>
                  <th>価格</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="cart-text">1</td>
                  <td className="cart-text">Nguyen Tuan Anh</td>
                  <td className="cart-text">54, Van Tien Dung, Hoa Xuan, Cam Le, Da Nang</td>
                  <td className="cart-text">0124567893</td>
                  <td className="cart-text">Playstation 5 DualSense Edge</td>
                  <td className="cart-text">2</td>
                  <td className="cart-text">$480</td>
                </tr>
                <tr>
                  <td className="cart-text">2</td>
                  <td className="cart-text">Nguyen Huu Hiep</td>
                  <td className="cart-text">54, Trung Nu Vuong, Da Nang</td>
                  <td className="cart-text">0224567893</td>
                  <td className="cart-text">Loli Hug Pillow</td>
                  <td className="cart-text">1</td>
                  <td className="cart-text">$300</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersList;