import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../useCartContext";

export default function Cart() {
  const { cartProduct, setCartProduct } = useCartContext();
  const [totalCost, setTotalCost] = useState(0);

  const handleOnChangeQuantity = useCallback(
    (id, value) => {
      const newData = cartProduct.map((item) => (item._id === id ? { ...item, quantity: value * 1 } : item));
      setCartProduct(newData);

      // Tính toán và cập nhật tổng giá trị
      const newTotal = newData.reduce((total, item) => total + item.price * item.quantity, 0);
      setTotalCost(newTotal);
    },
    [cartProduct, setCartProduct, setTotalCost]
  );
  const handleRemoveFromCart = useCallback(
    (id) => {
      const newData = cartProduct.filter((item) => item._id !== id);
      setCartProduct(newData);

      // Tính toán và cập nhật tổng giá trị
      const newTotal = newData.reduce((total, item) => total + item.price * item.quantity, 0);
      setTotalCost(newTotal);
    },
    [cartProduct, setCartProduct, setTotalCost]
  );
  const handleRemoveAllFromCart = useCallback(() => {
    // Set cartProduct to an empty array to remove all items from the cart
    setCartProduct([]);

    // Cập nhật tổng giá trị thành 0 khi giỏ hàng trống
    setTotalCost(0);
  }, [setCartProduct, setTotalCost]);

  console.log(cartProduct);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="wishlist-nav">
          <div className="contact-title">
            <div className="contact-fix">
              <Link to="/home">Home</Link>
              &nbsp;/&nbsp;
              <p>Cart</p>
            </div>
          </div>
          <div className="cart-wrap">
            <table>
              <thead>
                <tr>
                  <th>Product picture</th>
                  <th>Name product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartProduct
                  ? cartProduct.map((item) => (
                      <tr>
                        <td className="cart-img">
                          <img src={item.product_image} alt="img" />
                        </td>
                        <td className="cart-text webkit-text">{item.product_name}</td>
                        <td className="cart-text">${item.price}</td>
                        <td className="cart-adjust">
                          <input type="number" min={1} value={item.quantity} onChange={(e) => handleOnChangeQuantity(item._id, e.target.value)} />
                        </td>
                        <td className="cart-text">${item.price * item.quantity}</td>
                        <td>
                          {/* Remove cart */}
                          <Link to="#">
                            <button onClick={() => handleRemoveFromCart(item._id)}>
                              <i className="bi bi-trash3" />
                            </button>
                          </Link>
                        </td>
                      </tr>
                    ))
                  : ""}
              </tbody>
            </table>
            <div className="cart-synthetic">
              <h4>
                Total number of products: <span>{cartProduct.length}</span> product
              </h4>
              <button className="remove-all" type="button" onClick={handleRemoveAllFromCart}>
                Remove all
              </button>
            </div>
            <div className="cart-pay">
              <div className="cart-pay__body">
                <div className="cart-poin">
                  <p>Total cost of goods:</p> <span>${totalCost}</span>
                </div>
                <div className="cart-poin">
                  <p>Transport fee:</p> <span>{}</span>
                </div>
                <div className="cart-poin">
                  <p>Discount code (if any):</p> <span>$0</span>
                </div>
                <div className="cart-poin">
                  <p>Total payment:</p> <span>$244</span>
                </div>
              </div>
              <div className="cart-footer">
                <p>
                  Pressing 'Place Order' implies that you agree to comply with <Link to="#">Exclusive's Terms and Conditions.</Link>
                </p>
                <Link to="/checkout">
                  <button className="order-cart" type="button">
                    Proceed to payment
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}