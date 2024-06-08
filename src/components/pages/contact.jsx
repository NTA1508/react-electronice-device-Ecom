import { Link } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from "axios";
export default function Contact() {
    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [message, setMessage] = useState()
    const [id , setId] = useState()
 

    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem("token"));
        axios.get('https://web-shopping-exclusive.onrender.com/user/' + token)
        .then(result => {
            // console.log(result.data)
            setId(result.data.id)
        })
        .catch(err => console.log(err))
    },[])

    useEffect(() => {
        axios
          .get("https://web-shopping-exclusive.onrender.com/getUser/" + id)
          .then((result) => {
            // console.log(result)
            setEmail(result.data.email)
            setName(`${result.data.firstName} ${result.data.lastName}`)
          })
          .catch((err) => {
            console.log(err);
          });
      }, [id]);

    const Submit = (e) => {
        e.preventDefault();
        axios.post('https://web-shopping-exclusive.onrender.com/Createfeedback',{email, name, phone, message})
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
                            <Link to="/home">Home</Link>
                            &nbsp;/&nbsp;
                            <p>Contact</p>
                        </div>
                    </div>
                    <div className="contact-wrap">
                        <div className="contact-left">
                            <div className="contact-box">
                                <div className="contact-vid">
                                    <div className="contact-vid__icon">
                                        <i className="bx bxs-phone" />
                                    </div>
                                    <h4>Call To Us</h4>
                                </div>
                                <p>We are available 24/7, 7 days a week.</p>
                                <p>Phone: +8801611112222</p>
                            </div>
                            <div className="contact-box">
                                <div className="contact-vid">
                                    <div className="contact-vid__icon">
                                        <i className="bx bxs-envelope" />
                                    </div>
                                    <h4>Write To US</h4>
                                </div>
                                <p>Fill out our form and we will contact you within 24 hours.</p>
                                <p>Emails: customer@exclusive.com</p>
                                <p>Emails: support@exclusive.com</p>
                            </div>
                        </div>
                        <form onSubmit={Submit} className="contact-form">
                            <div className="contact-group">
                                <input
                                    className="contact-input"
                                    type="text"
                                    placeholder="Your Name *"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <input
                                    className="contact-input"
                                    type="text"
                                    placeholder="Your Email *"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    className="contact-input"
                                    type="text"
                                    placeholder="Your Phone *"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <textarea
                                className="contact-textarea"
                                cols={30}
                                rows={10}
                                placeholder="Your Massage"
                                defaultValue={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <div className="contact-submit">
                                <button type="submit" className="contact-button">
                                    Send Massage
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}