import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link} from "react-router-dom";

export default function EditProduct() {
  // const navigate = useNavigate()
  const { id } = useParams();
  const [productName, setProductName] = useState();
  const [image, setImage] = useState();
  const [productType, setProductType] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [sales, setSales] = useState();
  const [promotionType, setPromotionType] = useState();
  const [storageAddress, setStorageAddress] = useState();
  const [stock, setStock] = useState();

  useEffect(() => {
    axios
      .get("https://web-shopping-exclusive.onrender.com/products/" + id)
      .then((result) => {
        console.log(result);
        setProductName(result.data.product_name);
        setImage(result.data.product_image);
        setProductType(result.data.type);
        setDescription(result.data.deciption);
        setPrice(result.data.price);
        setSales(result.data.sales);
        setPromotionType(result.data.sale_type);
        setStorageAddress(result.data.storage_address);
        setStock(result.data.stock_number);
      })
      .catch((err) => console.log(err));
  },[id]);

  const Submit = (e) => {
    e.preventDefault();
    // console.log(promotionType)
    axios
      .put("https://web-shopping-exclusive.onrender.com/products/" + id, {
        productName, image, productType, description, price, sales, promotionType, storageAddress, stock
      })
      .then((result) => {
        console.log(result);
        window.location.replace('/all_products')
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
            <Link to="/admin">Home</Link>
            &nbsp;/&nbsp;
            <Link to="/all_products">All Products</Link>
            &nbsp;/&nbsp;
            <p>Edit product</p>
          </div>
        </div>
        <div style={{ width: "100%", textAlign: "center" }}>
          <h4 style={{ fontSize: "20px" }}>Edit Product</h4>
        </div>
        <form style={{ margin: 20 }} onSubmit={Submit}>
          <div style={{ marginBottom: 20 }}>
            <label style={{ display: "block", marginBottom: 5 }}>
              Product Name
            </label>
            <input
              value={productName}
              type="text"
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
            <label style={{ display: "block", marginBottom: 5 }}>
              Product type
            </label>
            <select
              value={productType}
              style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
              onChange={(e) => setProductType(e.target.value)}
            >
              <option value={"phones"} selected>Mobile phones</option>
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
            <label style={{ display: "block", marginBottom: 5 }}>
              Description
            </label>
            <textarea
              value={description}
              style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
              rows="4"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div style={{ marginBottom: 20 }}>
            <label style={{ display: "block", marginBottom: 5 }}>Price</label>
            <input
              value={price}
              type="number"
              style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: 20 }}>
            <label style={{ display: "block", marginBottom: 5 }}>Sales</label>
            <input
              value={sales}
              type="number"
              style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
              min="0"
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
              value={promotionType}
              id="inputState"
              style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
              onChange={(e) => setPromotionType(e.target.value)}
            >
              <option value={"no"} selected>No</option>
              <option value={"day"}>Day</option>
              <option value={"month"}>Month</option>
            </select>
          </div>
          <div style={{ marginBottom: 20 }}>
            <label style={{ display: "block", marginBottom: 5 }}>
              Storage Address
            </label>
            <input
              value={storageAddress}
              type="text"
              style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
              onChange={(e) => setStorageAddress(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: 20 }}>
            <label style={{ display: "block", marginBottom: 5 }}>
              Stock Number
            </label>
            <input
              value={stock}
              type="number"
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
            <img src={image} alt="" style={{ width: "100px" }} />
            <input
              accept=".png, .ipg, .jpeg"
              type="file"
              style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
              onChange={onInputChange}
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
              Edit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
