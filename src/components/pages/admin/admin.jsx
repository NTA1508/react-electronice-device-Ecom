import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Admin() {
  const [isAdmin, setAdmin] = useState(false);
  const [user, setUser] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    axios
      .get("https://web-shopping-exclusive.onrender.com/user/" + token)
      .then((result) => {
        console.log(result.data);
        setAdmin(result.data.isAdmin);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (localStorage.getItem("token") != null && isAdmin === true) {
      setUser(true);
    } else {
      console.log("sdasdsad");
    }
  }, [isAdmin]);

  return (
    <>
        <div
          className="container"
          style={{ marginBottom: "29px", marginTop: "10px" }}
        >
          <div className="wrapper">
            <div
              style={{ width: "100%", textAlign: "center", fontSize: "30px" }}
            >
              <h4>Hello Admin Name</h4>
            </div>
            <div style={{ margin: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  className="col-md-3 admin_card_hover"
                  style={{ width: "23%" }}
                >
                  <Link to="/add_product" style={{ color: "black" }}>
                    <div
                      style={{
                        border: "1px solid #ccc",
                        borderRadius: 8,
                        padding: 20,
                        textAlign: "center",
                        cursor: "pointer",
                      }}
                    >
                      <i
                        className="bi bi-plus-square"
                        style={{
                          color: "#ec407a",
                          fontSize: "3rem",
                          marginBottom: 10,
                        }}
                      />
                      <h4>Add Product</h4>
                      --------
                    </div>
                  </Link>
                </div>
                <div
                  className="col-md-3 admin_card_hover"
                  style={{ width: "23%" }}
                >
                  <Link to="/all_products" style={{ color: "black" }}>
                    <div
                      style={{
                        border: "1px solid #ccc",
                        borderRadius: 8,
                        padding: 20,
                        textAlign: "center",
                        cursor: "pointer",
                      }}
                    >
                      <i
                        className="bi bi-box-seam"
                        style={{
                          color: "#ec407a",
                          fontSize: "3rem",
                          marginBottom: 10,
                        }}
                      />
                      <h4>All Products</h4>
                      --------
                    </div>
                  </Link>
                </div>
                <div
                  className="col-md-3 admin_card_hover"
                  style={{ width: "23%" }}
                >
                  <Link to="/oders_list" style={{ color: "black" }}>
                    <div
                      style={{
                        border: "1px solid #ccc",
                        borderRadius: 8,
                        padding: 20,
                        textAlign: "center",
                        cursor: "pointer",
                      }}
                    >
                      <i
                        className="bi bi-list-check"
                        style={{
                          color: "#ec407a",
                          fontSize: "3rem",
                          marginBottom: 10,
                        }}
                      />
                      <h4>Oder List</h4>
                      --------
                    </div>
                  </Link>
                </div>
                <div
                  className="col-md-3 admin_card_hover"
                  style={{ width: "23%" }}
                >
                  <Link to="/message" style={{ color: "black" }}>
                    <div
                      style={{
                        border: "1px solid #ccc",
                        borderRadius: 8,
                        padding: 20,
                        textAlign: "center",
                        cursor: "pointer",
                      }}
                    >
                      <i
                        className="bi bi-chat-dots"
                        style={{
                          color: "#ec407a",
                          fontSize: "3rem",
                          marginBottom: 10,
                        }}
                      />
                      <h4>Messages</h4>
                      --------
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
