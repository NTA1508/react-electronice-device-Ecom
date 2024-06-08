import React, { useState } from "react";
import formbanner from "../../assets/image/form-banner.png";
import { Link, useNavigate } from "react-router-dom";
import togglePasswordVisibility from "../../components/script_handle/index_scripts/password_visi";
import showImage from "../../assets/image/showImage.png";
import axios from "axios";
export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/api/v1/login", { email, password })
      .then((result) => {
        console.log(result)
        if (result.status === 200) {
          alert("Đăng nhập thành công");
          localStorage.setItem("token", JSON.stringify(result.data.token));
          console.log(JSON.parse(localStorage.getItem("token")).token)
          navigate("/");
          window.location.reload()
        } else if (result.status === 201) {
          alert("Mật khẩu không đúng");
        }
      })
      .catch(() => alert("Email không đúng"));
  };

  return (
    <>
      {/* Main */}
      <div className="container">
        <div className="wrapper">
          <div className="form-group">
            <img className="form-banner" src={formbanner} alt="form-banner" />
            <form className="form-control" onSubmit={Submit}>
              <h1>Log in to Exclusive</h1>
              <div className="form-box">
                <input
                  className="form-input"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-box">
                <input
                  className="form-input"
                  type="password"
                  placeholder="Password"
                  id="passwordField"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i id="togglePassword" onClick={togglePasswordVisibility}>
                  <img id="togglePassword" src={showImage} alt="showButton" />
                </i>
              </div>
              <button type="submit" className="form-button form-button__btn">
                Log In
              </button>
              <p>
                No account? <Link to={"/register"}>Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      {/* End Main */}
    </>
  );
}
