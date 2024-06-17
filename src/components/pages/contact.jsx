import { Link } from "react-router-dom";
import { useState } from "react"
import axios from "axios";
export default function Contact() {
    const [customerEmail, setEmail] = useState()
    const [customerName, setName] = useState()
    const [customerPhone, setPhone] = useState()
    const [message, setMessage] = useState()
 
    const Submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/api/v1/message/send',{customerEmail, customerName, customerPhone, message})
        .then(() => {
            alert('feedback thành công')
            window.location.reload()
            // console.log(result)
        })
        .catch(err => console.log(err))
    }
    return (
        <div className="container">
            <div className="wrapper">
                <div className="contact-nav">
                    <div className="contact-title">
                        <div className="contact-fix">
                            <Link to="/home">ホーム</Link>
                            &nbsp;/&nbsp;
                            <p>お問い合わせ</p>
                        </div>
                    </div>
                    <div className="contact-wrap">
                        <div className="contact-left">
                            <div className="contact-box">
                                <div className="contact-vid">
                                    <div className="contact-vid__icon">
                                        <i className="bx bxs-phone" />
                                    </div>
                                    <h4>お問い合わせ</h4>
                                </div>
                                <p>私たちは24時間365日対応しています。</p>
                                <p>電話番号: +8801611112222</p>
                            </div>
                            <div className="contact-box">
                                <div className="contact-vid">
                                    <div className="contact-vid__icon">
                                        <i className="bx bxs-envelope" />
                                    </div>
                                    <h4>私たちに書いてください </h4>
                                </div>
                                <p>フォームにご記入いただければ、24時間以内にご連絡いたします。</p>
                                <p>メール: customer@exclusive.com</p>
                                <p>メール: support@exclusive.com</p>
                            </div>
                        </div>
                        <form onSubmit={Submit} className="contact-form">
                            <div className="contact-group">
                                <input
                                    className="contact-input"
                                    type="text"
                                    placeholder="名前 *"
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <input
                                    className="contact-input"
                                    type="text"
                                    placeholder="メール *"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    className="contact-input"
                                    type="text"
                                    placeholder="電話番号 *"
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <textarea
                                className="contact-textarea"
                                cols={30}
                                rows={10}
                                placeholder="マッサージ"
                                defaultValue={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <div className="contact-submit">
                                <button type="submit" className="contact-button">
                                送信 
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}