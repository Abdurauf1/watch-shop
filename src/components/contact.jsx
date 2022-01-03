import React from "react"
import "./contact.scss"
import iconHouse from '../components/assets/img/house.svg'
import iconTablet from '../components/assets/img/tablet.svg'
import iconMail from '../components/assets/img/mail.svg'
import footerImg from "../components/assets/img/logo/logo2_footer.png"
import heart from "../components/assets/img/like.svg"

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <div className="shop-header">
                    <p className="shop-watch-title">contacts</p>
                </div>
                <div className="container3">
                    <div className="map">
                        
                    </div>

                    <p className="title">Get in Touch</p>
                    <div className="contact-input-wrapper">
                        <div className="contact-input">
                            <textarea placeholder="Enter Message" cols="30" rows="10"></textarea>
                            <div style={{marginBottom: "30px", justifyContent: "space-between", width: "100%",display: "flex"}}>
                                <input className="name" type="text" placeholder="Enter your name"/>
                                <input className="email" type="email" placeholder="Enter email address"/>
                            </div>
                            <input className="subject" type="email" placeholder="Enter Subject"/>
                        </div>
                        <div className="address">
                            <div className="icon-address">
                                <img src={iconHouse} alt="" className="house-img"/>
                                <div style={{display: "block"}}>
                                    <p className="adrress-text">Buttonwood, California.</p>
                                    <p className="address-desc">Rosemead, CA 91770</p>
                                </div>
                            </div>
                            <div className="icon-address">
                                <img src={iconTablet} alt="" className="house-img" />
                                <div style={{display: "block"}}>
                                    <p className="adrress-text">+1 253 565 2365</p>
                                    <p className="address-desc">Mon to Fri 9am to 6pm</p>
                                </div>
                            </div>
                            <div className="icon-address">
                                <img src={iconMail} alt="" className="house-img" />
                                <div style={{display: "block"}}>
                                    <p className="adrress-text">support@colorlib.com</p>
                                    <p className="address-desc">Send us your query anytime!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="send-btn">send</button>
                    
                    <div className="footer">
                    <div className="display-flex-section">
                        <div className="footer-column">
                            <a href="#">
                                <img src={footerImg} className="footer-img" alt="" />
                            </a>
                            <p className="img-under-text">Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed do eiusmod tem.</p>
                        </div>
                        <div className="footer-column">
                            <p className="footer-title">Quick Links</p>
                            <div className="footer-text-wrapper">
                                <div>
                                    <a className="footer-text" href="#">About</a>
                                </div>
                                <div>
                                    <a className="footer-text" href="#">Offers & Discounts</a>
                                </div>
                                <div>
                                    <a className="footer-text" href="#">Get Coupon</a>
                                </div>
                                <div>
                                    <a className="footer-text" href="#">Contact Us</a>
                                </div>
                            </div>
                        </div>
                        <div className="footer-column">
                            <p className="footer-title">New Products</p>
                            <div className="footer-text-wrapper">
                                <div>
                                    <a className="footer-text" href="#">Woman Cloth</a>
                                </div>
                                <div>
                                    <a className="footer-text" href="#">Fashion Accessories</a>
                                </div>
                                <div>
                                    <a className="footer-text" href="#">Man Accessories</a>
                                </div>
                                <div>
                                    <a className="footer-text" href="#">Rubber made Toys</a>
                                </div>
                            </div>
                        </div>
                        <div className="footer-column">
                            <p className="footer-title">Support</p>
                            <div className="footer-text-wrapper">
                                <div>
                                    <a className="footer-text" href="#">Frequently Asked Questions</a>
                                </div>
                                <div>
                                    <a className="footer-text" href="#">Terms & Conditions</a>
                                </div>
                                <div>
                                    <a className="footer-text" href="#">Privacy Policy</a>
                                </div>
                                <div>
                                    <a className="footer-text" href="#">Report a Payment Issue</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="social-links">
                        <p className="by">Copyright ©2021 All rights reserved | This template is made with <span className="heartt"><img src={heart} className="heart" alt="" /></span> by <a href="#" className="website-name">Colorlib</a></p>
                        <div className="social-link">
                            <a href="https://twitter.com">
                                <i class="icon fab fa-twitter"></i>
                            </a>
                            <a href="https://facebook.com">
                                <i class="icon fab fa-facebook-f"></i>
                            </a>
                            <a href="https://behance.com">
                                <i class="icon fab fa-behance"></i>
                            </a>
                            <a href="https://google.com">
                                <i class="icon fas fa-globe"></i>
                            </a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Contact