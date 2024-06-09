import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/api/v1/product/getAll")
      .then((result) => {
        console.log(result);
        setData(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id, e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:8081/api/v1/product/delete/${id}`)
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="wishlist-nav">
          <div className="contact-title">
            <div className="contact-fix">
              <Link to="/admin">Admin</Link>
              &nbsp;/&nbsp;
              <p>All products</p>
            </div>
          </div>
          <div className="cart-wrap">
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Product picture</th>
                  <th>Product name</th>
                  <th>Product type</th>
                  <th>Stock</th>
                  <th>Price</th>
                  <th>Sale</th>
                  <th>Sale type</th>
                  <th>Storage address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((product) => (
                  <tr key={product.id}>
                    <td className="cart-text">{product.id}</td>
                    <td className="cart-img">
                      <img
                        src={`http://localhost:8081/api/v1/product/show/${product.id}`}
                        alt="product-img"
                      />
                    </td>
                    <td className="cart-text">{product.productName}</td>
                    <td className="cart-text">{product.type}</td>
                    <td className="cart-text">{product.stockNumber}</td>
                    <td className="cart-text">{product.price}</td>
                    <td className="cart-text">{product.sales}%</td>
                    <td className="cart-text">{product.saleType}</td>
                    <td className="cart-text">{product.storageAddress}</td>
                    <td>
                      <Link to="#" onClick={(e) => handleDelete(product.id, e)}>
                        <button style={{ background: "none", border: "none", padding: 0 }}>
                          <i className="bi bi-trash3" />
                        </button>
                      </Link>
                      <Link to={`/edit_product/${product.id}`} style={{ marginLeft: "10px" }}>
                        <i className="bi bi-pencil-square" />
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

export default AllProducts;
