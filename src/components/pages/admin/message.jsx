import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Message = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/api/v1/message/allMessage")
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => console.log(err));
  },[]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="wishlist-nav">
          <div className="contact-title">
            <div className="contact-fix">
              <Link to="/admin">Home</Link>
              &nbsp;/&nbsp;
              <p>Message</p>
            </div>
          </div>
          <div className="cart-wrap">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {data.map((f, i) => (
                  <tr key={i}>
                    <td className="cart-text">{f.customerName}</td>
                    <td className="cart-text">{f.customerEmail}</td>
                    <td className="cart-text">{f.customerPhone}</td>
                    <td className="cart-text">{f.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
