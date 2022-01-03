import React from "react"
import "./style.scss"
import card1 from "../assets/img/gallery/popular1.png"
import card2 from "../assets/img/gallery/popular2.png"
import card3 from "../assets/img/gallery/popular3.png"
import card4 from "../assets/img/gallery/popular4.png"
import card5 from "../assets/img/gallery/popular5.png"
import card6 from "../assets/img/gallery/popular6.png"
import heart from "../assets/img/heart.svg"

class PopulatItems extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="container">
                <div style = {{marginBottom: "200px"}}>
                <p className="popular-items-title">
                    popular items
                </p>
                <p className="popular-items-text">
                    Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                </p>
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
                <button className="view-more-products">
                    view more products
                </button>
                </div>
            </div>
        )
    }
}

export default PopulatItems