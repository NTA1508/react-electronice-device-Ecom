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
            <p>Get 10% off your first order</p>
            <div className="footer-submit">
              <input type="email" placeholder="Enter your email" />
              <i className="bx bxl-telegram" />
            </div>
          </div>
          <div className="footer-top__item">
            <h3>Support</h3>
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
          <div className="footer-top__item">
            <h3>Support</h3>
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms Of Use</Link>
            <Link to="#">FAQ</Link>
            <Link to="#">Contact</Link>
          </div>
          <div className="footer-top__item">
            <h3>Download App</h3>
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
          © Copyright Rimel 2023. All right reserved
        </div>
      </footer>
    </>
  );
}
