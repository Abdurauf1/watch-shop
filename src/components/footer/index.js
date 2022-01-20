import React from "react"
import "./style.scss"
import footerImg from "../assets/img/logo/logo2_footer.png"
import heart from "../assets/img/like.svg"

class Footer extends React.Component {
    render() {
        return (
            <div className="container">
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
        )
    }
}

export default Footer