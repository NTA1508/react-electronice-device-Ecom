import { Link } from "react-router-dom"
import bank from "../../assets/image/bank.png"
export default function CheckOut() {
    return (
        <div className="container">
            <div className="wrapper">
                <div className="contact-nav">
                    <div className="contact-title">
                        <div className="contact-fix">
                            <Link to="/home">Home</Link>
                            &nbsp;/&nbsp;
                            <Link to="/cart">Cart</Link>
                            &nbsp;/&nbsp;
                            <p>CheckOut</p>
                        </div>
                    </div>
                    <div className="checkout-nav">
                        <form action="" method="post">
                            <div className="checkout-group">
                                <label>
                                    First Name <span>*</span>
                                </label>
                                <input type="text" />
                            </div>
                            <div className="checkout-group">
                                <label>
                                    Company Name <span>*</span>
                                </label>
                                <input type="text" required="" />
                            </div>
                            <div className="checkout-group">
                                <label>
                                    Street Address <span>*</span>
                                </label>
                                <input type="text" required="" />
                            </div>
                            <div className="checkout-group">
                                <label>
                                    Apartment, floor, etc. (optional) <span>*</span>
                                </label>
                                <input type="text" required="" />
                            </div>
                            <div className="checkout-group">
                                <label>
                                    Town/City <span>*</span>
                                </label>
                                <input type="text" required="" />
                            </div>
                            <div className="checkout-group">
                                <label>
                                    Phone Number <span>*</span>
                                </label>
                                <input type="number" required="" />
                            </div>
                            <div className="checkout-group">
                                <label>
                                    Email Address <span>*</span>
                                </label>
                                <input type="text" required="" />
                            </div>
                        </form>
                        <div className="checkout-right">
                            <div className="cart-pay__body">
                                <div className="cart-poin">
                                    <p>Total cost of goods:</p> <span>$240</span>
                                </div>
                                <div className="cart-poin">
                                    <p>Transport fee:</p> <span>$4</span>
                                </div>
                                <div className="cart-poin">
                                    <p>Discount code (if any):</p> <span>$0</span>
                                </div>
                                <div className="cart-poin">
                                    <p>Total payment:</p> <span>$244</span>
                                </div>
                            </div>
                            <form action="" method="post" className="checkout-bank">
                                <nav>
                                    <strong>
                                        <input type="checkbox" />
                                        <span>Bank</span>
                                    </strong>
                                    <img src={bank} alt="img" />
                                </nav>
                                <nav>
                                    <nav>
                                        <input type="checkbox" />
                                        <span>Cash on delivery</span>
                                    </nav>
                                </nav>
                            </form>
                            <div className="button-check">
                                <button type="submit" className="button-buy">
                                    Place Order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}