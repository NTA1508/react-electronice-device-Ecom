import React, { useState } from "react";
import formbanner from "../../assets/image/form-banner.png";
import { Link, useNavigate } from "react-router-dom";
import togglePasswordVisibility from "../../components/script_handle/index_scripts/password_visi";
import showImage from "../../assets/image/showImage.png";
import axios from "axios";
export default function Register() {
  const [userName, setUserName] = useState();
  const [phoneNumber, setPhoneNum] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [address, setAddress] = useState();
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/api/v1/register", {
        userName,
        phoneNumber,
        email,
        password,
        address,
      })
      .then((result) => {
        // console.log(result.status)
        if(result.status === 201){
          alert('Email đã tồn tại')
        }else{
          alert('Đăng ký thành công');
          navigate("/login");
        }
        // console.log(result);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {/* Main */}
      <div className="container">
        <div className="wrapper">
          <div className="form-group">
            <img className="form-banner" src={formbanner} alt="form-banner" />
            <form className="form-control" onSubmit={Submit}>
              <h1>Create an account</h1>
              <div className="form-box">
                <input
                  className="form-input"
                  type="text"
                  placeholder="User name"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="form-box">
                <input
                  className="form-input"
                  type="text"
                  placeholder="Phone"
                  onChange={(e) => setPhoneNum(e.target.value)}
                />
              </div>
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
              <div className="form-box">
                <input
                  className="form-input"
                  type="text"
                  placeholder="Address"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <button type="submit" className="form-button form-button__btn">
                Create Account
              </button>
              <button type="button" className="form-button form-button__google">
                <img src="./assets/images/Icon-Google.png" alt="" />
                <span>Sign up with Google</span>
              </button>
              <p>
                Already have an account? <Link to={"/login"}>Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      {/* End Main */}
    </>
  );
}
