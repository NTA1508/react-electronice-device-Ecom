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


  
  const handleDelete = (id, e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:8081/api/v1/message/delete/${id}`)
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="wishlist-nav">
          <div className="contact-title">
            <div className="contact-fix">
              <Link to="/admin">管理者</Link>
              &nbsp;/&nbsp;
              <p>メッセージ</p>
            </div>
          </div>
          <div className="cart-wrap">
            <table>
              <thead>
                <tr>
                  <th>名前</th>
                  <th>メール</th>
                  <th>電話番号</th>
                  <th>マッサージ</th>
                  <th>行動</th>
                </tr>
              </thead>
              <tbody>
                {data.map((f, i) => (
                  <tr key={i}>
                    <td className="cart-text">{f.customerName}</td>
                    <td className="cart-text">{f.customerEmail}</td>
                    <td className="cart-text">{f.customerPhone}</td>
                    <td className="cart-text">{f.message}</td>
                    <td>
                      <Link to="#" onClick={(e) => handleDelete(f.messId, e)}>
                        <button style={{ background: "none", border: "none", padding: 0 }}>
                          <i className="bi bi-trash3" />
                        </button>
                      </Link>
                    </td>
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
