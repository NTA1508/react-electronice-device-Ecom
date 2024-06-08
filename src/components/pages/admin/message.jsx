import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Message = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://web-shopping-exclusive.onrender.com/feedback")
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
                    <td className="cart-text">{f.name}</td>
                    <td className="cart-text">{f.email}</td>
                    <td className="cart-text">{f.phone_number}</td>
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
