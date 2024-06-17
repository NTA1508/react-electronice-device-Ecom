import frameImg from "../assets/image/frame.png";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <footer>
        <section className="container footer-top">
          <div className="footer-top__item">
            <Link to="./index.html" className="logo">
              電気物
            </Link>
            <p>初めての注文で10%オフ</p>
            <div className="footer-submit">
              <input type="email" placeholder="Enter your email" />
              <i className="bx bxl-telegram" />
            </div>
          </div>
          <div className="footer-top__item">
            <h3>サポート</h3>
            <p>日本、 東京、 123号</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
          <div className="footer-top__item">
            <h3>サポート</h3>
            <Link to="#">プライバシーポリシー</Link>
            <Link to="#">利用規約</Link>
            <Link to="#">FAQ</Link>
            <Link to="#">お問い合わせ</Link>
          </div>
          <div className="footer-top__item">
            <h3>アプリをダウンロードする</h3>
            <img src={frameImg} alt="" />
            <ul>
              <li>
                <Link to="#">
                  <i className="bx bxl-facebook-circle" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="bx bxl-twitter" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="bx bxl-instagram" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="bx bxl-linkedin" />
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <div className="footer-below">
        © 著作権 NTA 2023. 全著作権所有.
        </div>
      </footer>
    </>
  );
}
