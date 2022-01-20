import React from "react"
import "./shop.scss"
import card1 from "../components/assets/img/gallery/popular1.png"
import card2 from "../components/assets/img/gallery/popular2.png"
import card3 from "../components/assets/img/gallery/popular3.png"
import card4 from "../components/assets/img/gallery/popular4.png"
import card5 from "../components/assets/img/gallery/popular5.png"
import card6 from "../components/assets/img/gallery/popular6.png"
import heart from "../components/assets/img/heart.svg"
import cube from "../components/assets/img/block.svg"
import secure from "../components/assets/img/open-lock.svg"
import refresh from "../components/assets/img/refresh.svg"

class Shop extends React.Component {
    render() {
        return (
            <div>
                <div className="shop-header">
                    <p className="shop-watch-title">watch shop</p>
                </div>

                <div className="container">
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div className="select-wrapper">
                            <a className="active select-link" href="#">Newest Arrivals</a>
                            <a className="select-link" href="#">Price Hight To Low</a>
                            <a className="select-link" href="#">Most Popular</a>
                        </div>
                        <div className="select">
                            <p className="select-text">40 per page</p>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                    </div>
                    <div className="popular-items-wrapper">
                        <div className="popular-items-card">
                            <img src={heart} alt="" className="like" />
                            <img src={card1} alt="" className="card-img" />
                            <div className="add-to-cart">Add to cart</div>
                            <a href="#" className="card-title">thermo ball etip gloves</a>
                            <p className="card-price">$ 45,743</p>
                        </div>
                        <div className="popular-items-card">
                            <img src={heart} alt="" className="like" />
                            <img src={card2} alt="" className="card-img" />
                            <div className="add-to-cart">Add to cart</div>
                            <a href="#" className="card-title">thermo ball etip gloves</a>
                            <p className="card-price">$ 45,743</p>
                        </div>
                        <div className="popular-items-card">
                            <img src={heart} alt="" className="like" />
                            <img src={card3} alt="" className="card-img" />
                            <div className="add-to-cart">Add to cart</div>
                            <a href="#" className="card-title">thermo ball etip gloves</a>
                            <p className="card-price">$ 45,743</p>
                        </div>
                        <div className="popular-items-card">
                            <img src={heart} alt="" className="like" />
                            <img src={card4} alt="" className="card-img" />
                            <div className="add-to-cart">Add to cart</div>
                            <a href="#" className="card-title">thermo ball etip gloves</a>
                            <p className="card-price">$ 45,743</p>
                        </div>
                        <div className="popular-items-card">
                            <img src={heart} alt="" className="like" />
                            <img src={card5} alt="" className="card-img" />
                            <div className="add-to-cart">Add to cart</div>
                            <a href="#" className="card-title">thermo ball etip gloves</a>
                            <p className="card-price">$ 45,743</p>
                        </div>
                        <div className="popular-items-card">
                            <img src={heart} alt="" className="like" />
                            <img src={card6} alt="" className="card-img" />
                            <div className="add-to-cart">Add to cart</div>
                            <a href="#" className="card-title">thermo ball etip gloves</a>
                            <p className="card-price">$ 45,743</p>
                        </div>
                    </div>
                    <div className="red-footer">
                        <div className="red-content">
                            <img src={cube} alt="" className="cube-img" />
                            <p className="red-title">free shipping method</p>
                            <p className="red-description">aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                        </div>
                        <div className="red-content">
                            <img src={secure} alt="" className="cube-img" />
                            <p className="red-title">secure payment system</p>
                            <p className="red-description">aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                        </div>
                        <div className="red-content">
                            <img src={refresh} alt="" className="cube-img" />
                            <p className="red-title">secure payment system</p>
                            <p className="red-description">aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Shop