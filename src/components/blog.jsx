import React from "react"
import cardImg1 from "../components/assets/img/post/post_6.png"
import cardImg2 from "../components/assets/img/post/post-2.png"
import cardImg3 from "../components/assets/img/post/post-3.png"
import cardImg4 from "../components/assets/img/post/post-4.png"
import cardImg5 from "../components/assets/img/post/post-5.png"
import "./blog.scss"
import img1 from '../components/assets/img/blog/popular-post/post1.jpg'
import img2 from '../components/assets/img/blog/popular-post/post2.jpg'
import img3 from '../components/assets/img/blog/popular-post/post3.jpg'
import img4 from '../components/assets/img/blog/popular-post/post4.jpg'
import link1 from "../components/assets/img/post/post_5.png"
import link3 from "../components/assets/img/post/post_7.png"
import link4 from "../components/assets/img/post/post_8.png"
import link5 from "../components/assets/img/post/post_9.png"
import link6 from "../components/assets/img/post/post_10.png"
import footerImg from "../components/assets/img/logo/logo2_footer.png"
import heart from "../components/assets/img/like.svg"

class Blog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <div className="shop-header">
                    <p className="shop-watch-title">blog</p>
                </div>

                <div className="container2">
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}>
                        <div className="left-content">
                            <div className="left-content-card">
                                <div className="date">
                                    <p className="date-number">15</p>
                                    <p className="date-text">Jan</p>
                                </div>
                                <img className="image-card" src={cardImg1} alt="" />
                                <a href="#" className="card-title">Google inks pact for new 35-storey office</a>
                                <p className="card-text">That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                                <div className="comments-wrapper">
                                    <div className="hover-color" style={{ cursor: "pointer", margin: "0 10px 0 0", display: "flex" }}>
                                        <i style={{ margin: "4px 10px 0 0" }} class="fas fa-user"></i>
                                        <p>Travel, Lifestyle</p>
                                    </div>
                                    <p style={{ marginRight: "5px" }}>|</p>
                                    <div className="hover-color" style={{ cursor: "pointer", marginLeft: "10px", display: "flex" }}>
                                        <i style={{ margin: "4px 10px 0 0" }} className="fas fa-comments"></i>
                                        <p>03 Comments</p>
                                    </div>
                                </div>
                            </div>
                            <div className="left-content-card">
                                <div className="date">
                                    <p className="date-number">15</p>
                                    <p className="date-text">Jan</p>
                                </div>
                                <img className="image-card" src={cardImg2} alt="" />
                                <a href="#" className="card-title">Google inks pact for new 35-storey office</a>
                                <p className="card-text">That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                                <div className="comments-wrapper">
                                    <div className="hover-color" style={{ cursor: "pointer", margin: "0 10px 0 0", display: "flex" }}>
                                        <i style={{ margin: "4px 10px 0 0" }} class="fas fa-user"></i>
                                        <p>Travel, Lifestyle</p>
                                    </div>
                                    <p style={{ marginRight: "5px" }}>|</p>
                                    <div className="hover-color" style={{ cursor: "pointer", marginLeft: "10px", display: "flex" }}>
                                        <i style={{ margin: "4px 10px 0 0" }} className="fas fa-comments"></i>
                                        <p>03 Comments</p>
                                    </div>
                                </div>
                            </div>
                            <div className="left-content-card">
                                <div className="date">
                                    <p className="date-number">15</p>
                                    <p className="date-text">Jan</p>
                                </div>
                                <img className="image-card" src={cardImg3} alt="" />
                                <a href="#" className="card-title">Google inks pact for new 35-storey office</a>
                                <p className="card-text">That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                                <div className="comments-wrapper">
                                    <div className="hover-color" style={{ cursor: "pointer", margin: "0 10px 0 0", display: "flex" }}>
                                        <i style={{ margin: "4px 10px 0 0" }} class="fas fa-user"></i>
                                        <p>Travel, Lifestyle</p>
                                    </div>
                                    <p style={{ marginRight: "5px" }}>|</p>
                                    <div className="hover-color" style={{ cursor: "pointer", marginLeft: "10px", display: "flex" }}>
                                        <i style={{ margin: "4px 10px 0 0" }} className="fas fa-comments"></i>
                                        <p>03 Comments</p>
                                    </div>
                                </div>
                            </div>
                            <div className="left-content-card">
                                <div className="date">
                                    <p className="date-number">15</p>
                                    <p className="date-text">Jan</p>
                                </div>
                                <img className="image-card" src={cardImg4} alt="" />
                                <a href="#" className="card-title">Google inks pact for new 35-storey office</a>
                                <p className="card-text">That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                                <div className="comments-wrapper">
                                    <div className="hover-color" style={{ cursor: "pointer", margin: "0 10px 0 0", display: "flex" }}>
                                        <i style={{ margin: "4px 10px 0 0" }} class="fas fa-user"></i>
                                        <p>Travel, Lifestyle</p>
                                    </div>
                                    <p style={{ marginRight: "5px" }}>|</p>
                                    <div className="hover-color" style={{ cursor: "pointer", marginLeft: "10px", display: "flex" }}>
                                        <i style={{ margin: "4px 10px 0 0" }} className="fas fa-comments"></i>
                                        <p>03 Comments</p>
                                    </div>
                                </div>
                            </div>
                            <div className="left-content-card">
                                <div className="date">
                                    <p className="date-number">15</p>
                                    <p className="date-text">Jan</p>
                                </div>
                                <img className="image-card" src={cardImg5} alt="" />
                                <a href="#" className="card-title">Google inks pact for new 35-storey office</a>
                                <p className="card-text">That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                                <div className="comments-wrapper">
                                    <div className="hover-color" style={{ cursor: "pointer", margin: "0 10px 0 0", display: "flex" }}>
                                        <i style={{ margin: "4px 10px 0 0" }} class="fas fa-user"></i>
                                        <p>Travel, Lifestyle</p>
                                    </div>
                                    <p style={{ marginRight: "5px" }}>|</p>
                                    <div className="hover-color" style={{ cursor: "pointer", marginLeft: "10px", display: "flex" }}>
                                        <i style={{ margin: "4px 10px 0 0" }} className="fas fa-comments"></i>
                                        <p>03 Comments</p>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel">
                                <a className="page" href="#">
                                    <button className="carousel-btn">
                                        <i class="fas fa-chevron-left"></i>
                                    </button>
                                </a>
                                <a className="page" href="#">
                                    <button className="carousel-btn">
                                        1
                                    </button>
                                </a>
                                <a className="page" href="#">
                                    <button className="carousel-btn" style={{ backgroundColor: "#FBF9FF" }} style={{ backgroundColor: "#FBF9FF" }}>
                                        2
                                    </button>
                                </a>
                                <a className="page" href="#">
                                    <button className="carousel-btn">
                                        <i class="fas fa-chevron-right"></i>
                                    </button>
                                </a>
                            </div>
                        </div>

                        <div className="right-content">
                            <div className="first-content">
                                <div className="input-wrapper">
                                    <input type="text" className="search" placeholder="Search Keyword" />
                                    <a href="#" className="search-icon">
                                        <i class="fas fa-search"></i>
                                    </a>
                                </div>
                                <button className="search-btn">search</button>
                            </div>

                            <div className="second-content">
                                <p className="title">category</p>
                                <a href="#" className="right-content-likn">Restaurant food(37)</a>
                                <a href="#" className="right-content-likn">Travel news(10)</a>
                                <a href="#" className="right-content-likn">Modern technology(03)</a>
                                <a href="#" className="right-content-likn">Product(11)</a>
                                <a href="#" className="right-content-likn">Inspiration21</a>
                                <a href="#" className="right-content-likn-end">Health care(21)09</a>
                            </div>

                            <div className="third-content">
                                <p className="title">recent post</p>
                                <div className="right-content-card">
                                    <img src={img1} className="right-content-card-img" alt="" />
                                    <div className="div3">
                                        <a href="#" className="link3">From life was you fish...</a>
                                        <p className="right-content-data">January 12, 2019</p>
                                    </div>
                                </div>
                                <div className="right-content-card">
                                    <img src={img2} className="right-content-card-img" alt="" />
                                    <div className="div3">
                                        <a href="#" className="link3">From life was you fish...</a>
                                        <p className="right-content-data">January 12, 2019</p>
                                    </div>
                                </div>
                                <div className="right-content-card">
                                    <img src={img3} className="right-content-card-img" alt="" />
                                    <div className="div3">
                                        <a href="#" className="link3">From life was you fish...</a>
                                        <p className="right-content-data">January 12, 2019</p>
                                    </div>
                                </div>
                                <div className="right-content-card-end">
                                    <img src={img4} className="right-content-card-img" alt="" />
                                    <div className="div3">
                                        <a href="#" className="link3">From life was you fish...</a>
                                        <p className="right-content-data">January 12, 2019</p>
                                    </div>
                                </div>
                            </div>

                            <div className="fourth-content">
                                <p className="title">tag clouds</p>
                                <div className="btn-link-wrap">
                                    <a href="#" className="link-btn">project</a>
                                    <a href="#" className="link-btn">love</a>
                                    <a href="#" className="link-btn">technology</a>
                                    <a href="#" className="link-btn">travel</a>
                                    <a href="#" className="link-btn">restaurant</a>
                                    <a href="#" className="link-btn">life style</a>
                                    <a href="#" className="link-btn">design</a>
                                    <a href="#" className="link-btn">illustration</a>
                                </div>
                            </div>

                            <div className="fifth-content">
                                <p className="title">instagram feeds</p>
                                <div className="img-link">
                                    <img src={link1} className="linked-img" alt="" />
                                    <div className="linked-img2" alt=""></div>
                                    <img src={link3} className="linked-img" alt="" />
                                    <img src={link4} className="linked-img" alt="" />
                                    <img src={link5} className="linked-img" alt="" />
                                    <img src={link6} className="linked-img" alt="" />
                                </div>
                            </div>

                            <div className="sixth-content">
                                <p className="title">newsletter</p>
                                <input type="text" className="search" placeholder="Enter email" />
                                <button className="search-btn">subscribe</button>
                            </div>
                        </div>
                    </div>

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
            </div >
        )
    }
}

export default Blog