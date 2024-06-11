import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useCartContext } from "../useCartContext";

export default function Header() {
  const { cartProduct } = useCartContext();
  const [isMdAccountVisible, setIsMdAccountVisible] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState(null);
  const accountButtonRef = useRef(null);
  const mdAccountRef = useRef(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [products, setProducts] = useState([]);

  const [user, setUser] = useState(null);
  let [isAdmin, setAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      setUser(decodedToken);
      setAdmin(decodedToken.isAdmin);
      axios
        .get(`http://localhost:8081/api/v1/user/${decodedToken.id}`)
        .then((result) => {
          if(result.data.role === "USER"){
            // eslint-disable-next-line react-hooks/exhaustive-deps
            isAdmin = "true"
          }
          setUser(result.data);
          setAdmin(result.data.role);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        accountButtonRef.current &&
        mdAccountRef.current &&
        !accountButtonRef.current.contains(event.target) &&
        !mdAccountRef.current.contains(event.target)
      ) {
        setIsMdAccountVisible(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8081/api/v1/product/getAll")
      .then((response) => setProducts(response.data))
      .catch((err) => console.log(err));
  }, []);

  const handleAccountButtonClick = (event) => {
    event.stopPropagation();
    setIsMdAccountVisible((prev) => !prev);
  };

  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
  };
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const filteredProducts = products.filter((product) =>
      product.productName.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
    setSearchResults(filteredProducts);
  }, [searchQuery, products]);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    window.location.replace("/");
  };

  return (
    <>
      <header>
        <div className="hunter">
          <p>
            <span>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </span>
            <Link to="/home">ShopNow</Link>
          </p>
        </div>
        <div className="container">
          <div className="navbar">
            <Link to="/home" className="logo">
              <span>電気</span>物
            </Link>
            <div className="sidebar">
              <NavLink
                to="/home"
                className={`sidebar-item ${
                  activeNavItem === "home" ? "active" : ""
                }`}
                onClick={() => handleNavItemClick("home")}
              >
                Home
              </NavLink>
              <NavLink
                to="/contact"
                className={`sidebar-item ${
                  activeNavItem === "contact" ? "active" : ""
                }`}
                onClick={() => handleNavItemClick("contact")}
              >
                Contact
              </NavLink>
              <NavLink
                to="/about"
                className={`sidebar-item ${
                  activeNavItem === "about" ? "active" : ""
                }`}
                onClick={() => handleNavItemClick("about")}
              >
                About
              </NavLink>
              <NavLink
                to="/login"
                className={`sidebar-item ${
                  activeNavItem === "login" ? "active" : ""
                }`}
                onClick={() => handleNavItemClick("login")}
                style={{ display: user ? "none" : "" }}
              >
                Login
              </NavLink>
              <NavLink
                to="/admin"
                className={`sidebar-item ${
                  activeNavItem === "admin" ? "active" : ""
                }`}
                onClick={() => handleNavItemClick("admin")}
                style={{ display: isAdmin ? "" : "none" }}
              >
                Admin
              </NavLink>
            </div>
            <div className="tools-list">
              <div className="search-nav">
                <input
                  className="search-input"
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                />
                <i className="bx bx-search icon-search" />
                {searchQuery && (
                  <div className="search-result">
                    {searchResults.length > 0 ? (
                      <>
                        <div className="search-title">
                          Search Results: &nbsp;
                          <span>{searchResults.length}</span>&nbsp;Results
                        </div>
                        <div className="search-list">
                          {searchResults.map((result) => (
                            <Link to={`/detail/${result.id}`} key={result.id}>
                              <div className="search-item">
                                <i className="bx bx-search icon-search"></i>
                                <span>{result.productName}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="search-title">
                          Search Results: &nbsp;<span>0</span>&nbsp;Results
                        </div>
                        <div className="search-list">
                          <div className="search-item">
                            <i className="bx bx-search icon-search"></i>
                            <span>No results for {searchQuery}</span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
              <Link to="/wishlist">
                <div
                  className="tools-item"
                  style={{ display: user ? "" : "none" }}
                >
                  <i className="bx bx-heart" />
                  <span className="number-icon" id="heart-number">
                    0
                  </span>
                </div>
              </Link>
              <Link to="/cart" style={{ display: user ? "" : "none" }}>
                <div className="tools-item">
                  <i className="bx bx-cart-alt" />
                  <span className="number-icon" id="cart-number">
                    {cartProduct.length}
                  </span>
                </div>
              </Link>
              <div
                className="tools-item account"
                id="account"
                onClick={handleAccountButtonClick}
                ref={accountButtonRef}
                style={{ display: user ? "" : "none" }}
              >
                <i className="bx bx-user" />
                <div
                  className="md-account"
                  id="md-account"
                  style={{ display: isMdAccountVisible ? "block" : "none" }}
                  ref={mdAccountRef}
                >
                  <Link to={`/profile/${user ? user.id : ""}`}>
                    <i className="bx bx-user" />
                    <span>Manage My Account</span>
                  </Link>
                  <Link to={"/order"}>
                    <i className="bx bxs-shopping-bags" />
                    <span>My Order</span>
                  </Link>
                  <Link onClick={handleLogOut}>
                    <i className="bx bx-log-out" />
                    <span>Logout</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
