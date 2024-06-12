import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function AddProduct() {
  // const navigate = useNavigate()
  const [productName, setProductName] = useState();
  const [productImage, setImage] = useState();
  const [type, setProductType] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [sales, setSales] = useState();
  const [saleType, setPromotionType] = useState();
  const [storageAddress, setStorageAddress] = useState();
  const [stockNumber, setStock] = useState();
  // const [successMessage, setSuccessMessage] = useState("");

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/api/v1/product/add", {
        productName, productImage, type, description, price, sales, saleType, storageAddress, stockNumber
      })
      .then((result) => {
        alert('Add Product Successfully')
        window.location.replace('/admin')
      })
      .catch((err) => console.log(err));
  };

  const onInputChange = (e) => {
    const file = e.target.files[0];
    TransformFile(file);
  };

  const TransformFile = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage(reader.result);
      };
    } else {
      setImage("");
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="contact-title">
          <div className="contact-fix">
            <Link to="/admin">Admin</Link>
            &nbsp;/&nbsp;
            <p>Add product</p>
          </div>
        </div>
        <div style={{ width: "100%", textAlign: "center" }}>
          <h4 style={{ fontSize: "20px" }}>Add Product</h4>
        </div>
        <form style={{ margin: 20 }} onSubmit={Submit}>
          <div style={{ marginBottom: 20 }}>
            <label
              htmlFor="exampleInputEmail1"
              style={{ display: "block", marginBottom: 5 }}
            >
              Product Name
            </label>
            <input
              type="text"
              id="exampleInputEmail1"
              style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div
            style={{
              display: "inline-block",
              marginRight: 20,
              marginBottom: 20,
              width: "100%",
            }}
          >
            <label
              style={{ display: "block", marginBottom: 5 }}
            >
              Product type
            </label>
            <select
              style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
              onChange={(e) => setProductType(e.target.value)}
            >
              <option selected disabled>Chosse option</option>
              <option value={"phones"}>Mobile phones</option>
              <option value={"laptops"}>Laptops and Tablets</option>
              <option value={"tv"}>Televisions and Monitors</option>
              <option value={"audios"}>Audio and Headphones</option>
              <option value={"cameras"}>Cameras and Camcorders</option>
              <option value={"consoles"}>Game consoles</option>
              <option value={"printers"}>Printers and Scanners</option>
              <option value={"smart"}>Smart home appliances</option>
            </select>
          </div>
          <div style={{ marginBottom: 20 }}>
            <label
              htmlFor="exampleInputPassword1"
              style={{ display: "block", marginBottom: 5 }}
              onChange={(e) => setDescription(e.target.value)}
            >
              Description
            </label>
            <textarea
              id="exampleInputPassword1"
              style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
              rows="4"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div style={{ marginBottom: 20 }}>
            <label
              htmlFor="exampleInputPassword1"
              style={{ display: "block", marginBottom: 5 }}
            >
              Price
            </label>
            <input
              type="number"
              id="exampleInputPassword1"
              style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: 20 }}>
            <label
              htmlFor="exampleInputPassword1"
              style={{ display: "block", marginBottom: 5 }}
            >
              Sales
            </label>
            <input
              type="number"
              id="exampleInputPassword1"
              style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
              min="0"
              max="100"
              onChange={(e) => setSales(e.target.value)}
            />
          </div>
          <div
            style={{
              display: "inline-block",
              marginRight: 20,
              marginBottom: 20,
            }}
          >
            <label
              htmlFor="inputState"
              style={{ display: "block", marginBottom: 5 }}
            >
              Promotion type
            </label>
            <select
              id="inputState"
              style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
              onChange={(e) => setPromotionType(e.target.value)}
            >
              <option selected disabled>Chosse option</option>
              <option value={"no"}>No</option>
              <option value={"day"}>Day</option>
              <option value={"month"}>Month</option>
            </select>
          </div>
          <div style={{ marginBottom: 20 }}>
            <label
              htmlFor="exampleInputPassword1"
              style={{ display: "block", marginBottom: 5 }}
            >
              Storage Address
            </label>
            <input
              type="text"
              id="exampleInputPassword1"
              style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
              onChange={(e) => setStorageAddress(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: 20 }}>
            <label
              htmlFor="exampleInputPassword1"
              style={{ display: "block", marginBottom: 5 }}
            >
              Stock Number
            </label>
            <input
              type="number"
              id="exampleInputPassword1"
              style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: 20 }}>
            <label
              htmlFor="exampleFormControlFile1"
              style={{ display: "block", marginBottom: 5 }}
            >
              Product Pictures
            </label>
            <img src={productImage} alt="" style={{ width: "100px" }} />
            <input
              type="file"
              style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
              onChange={onInputChange}
              accept="Downloads/*"
            />
          </div>
          <div>
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                backgroundColor: "black",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
