import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
function Profile() {
  const [edit, setEdit] = useState(false);
  const [userName, setUserName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  // const [avata, setAvata] = useState("");
  const [currentpass, setCurrentPass] = useState("");
  const [newpass, setNewPass] = useState("");
  const { id } = useParams();

  const check = () => {
    setEdit(!edit);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8081/api/v1/user/${id}`)
      .then((result) => {
        setUserName(result.data.userName);
        setPhoneNumber(result.data.phoneNumber);
        setEmail(result.data.email);
        setAddress(result.data.address);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  const Update = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8081/api/v1/user/update/${id}`, {
        userName,
        email,
        phoneNumber,
        address,
      })
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          window.location.reload(true);
        } else if (result.status === 201) {
          alert("Đổi mật khẩu thành công");
          window.location.reload(true);
        } else if (result.status === 202) {
          alert("Chưa nhập mật khẩu mới");
        } else if (result.status === 203) {
          alert("Mật khẩu hiện tại không đúng");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="contact-nav">
          <div className="contact-title">
            <div className="contact-fix">
              <div>
                <Link to={"/"}>Home</Link>
                &#160;/&#160;
              </div>
              <div className="contact-fix2">
                <p>My Account</p>&#160;
                <p style={{ float: "right" }}>
                  Wellcome {userName}
                </p>
              </div>
            </div>
          </div>
          <div className="contact-wrap">
            <form onSubmit={Update} className="contact-form contact-form-txt">
              <div className="edit">
                <h2>Edit Your Profile</h2>
                <Link onClick={check}>
                  <i className="bx bx-edit-alt"></i>
                </Link>
              </div>
              {/* <img src={avata} alt="" style={{ width: "50px"}} /> */}
              <div className="account-group">
                <div className="account-form">
                  <label>User Name</label>
                  <input
                    className="contact-input"
                    id="account-input"
                    type="text"
                    value={userName}
                    disabled={edit === false}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="account-form">
                  <label>Phone Number</label>
                  <input
                    className="contact-input"
                    id="account-input"
                    type="text"
                    value={phoneNumber}
                    disabled={edit === false}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
              <div className="account-group">
                <div className="account-form">
                  <label>Email</label>
                  <input
                    className="contact-input"
                    id="account-input"
                    type="text"
                    value={email}
                    disabled={edit === false}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="account-form">
                  <label>Address</label>
                  <input
                    className="contact-input"
                    id="account-input"
                    type="text"
                    value={address}
                    disabled={edit === false}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
              <div className="account-form">
                <label>Password Changes</label>
                <div className="account-pass">
                  <input
                    className="contact-input"
                    id="account-input"
                    type="password"
                    disabled={edit === false}
                    placeholder="Current Passwod"
                    value={currentpass}
                    onChange={(e) => setCurrentPass(e.target.value)}
                  />
                  <input
                    className="contact-input"
                    id="account-input"
                    type="password"
                    disabled={edit === false}
                    placeholder="New Passwod"
                    value={newpass}
                    onChange={(e) => setNewPass(e.target.value)}
                  />
                </div>
              </div>
              <div className="account-button">
                {edit === true && (
                  <>
                    <button
                      className="contact-button"
                      id="cancel-button"
                      type="button"
                      onClick={() => window.location.reload(true)}
                    >
                      Cancel
                    </button>
                    <button
                      className="contact-button"
                      id="save-button"
                      type="submit"
                    >
                      Save changes
                    </button>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
