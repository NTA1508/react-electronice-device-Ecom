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
                <Link to={"/"}>ホーム</Link>
                &#160;/&#160;
              </div>
              <div className="contact-fix2">
                <p>アカウントを管理</p>&#160;
                <p style={{ float: "right" }}>
                  {userName}ーさん、 こんにちは
                </p>
              </div>
            </div>
          </div>
          <div className="contact-wrap">
            <form onSubmit={Update} className="contact-form contact-form-txt">
              <div className="edit">
                <h2>プロフィールを編集する</h2>
                <Link onClick={check}>
                  <i className="bx bx-edit-alt"></i>
                </Link>
              </div>
              {/* <img src={avata} alt="" style={{ width: "50px"}} /> */}
              <div className="account-group">
                <div className="account-form">
                  <label>名前</label>
                  <input
                    className="contact-input"
                    id="account-input account-input1"
                    type="text"
                    value={userName}
                    disabled={edit === false}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="account-form">
                  <label>電話番号</label>
                  <input
                    className="contact-input"
                    id="account-input account-input2"
                    type="text"
                    value={phoneNumber}
                    disabled={edit === false}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
              <div className="account-group">
                <div className="account-form">
                  <label>メール</label>
                  <input
                    className="contact-input"
                    id="account-input account-input3"
                    type="text"
                    value={email}
                    disabled={edit === false}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="account-form">
                  <label>住所</label>
                  <input
                    className="contact-input"
                    id="account-input account-input4"
                    type="text"
                    value={address}
                    disabled={edit === false}
                    onChange={(e) => setAddress(e.target.value)}
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
                      キャンセル
                    </button>
                    <button
                      className="contact-button"
                      id="save-button"
                      type="submit"
                    >
                      セーブ
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
