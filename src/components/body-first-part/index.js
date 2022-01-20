import React from "react"
import "./style.scss"
import arrivelPhoto1 from "../assets/img/gallery/new_product1.png"
import arrivelPhoto2 from "../assets/img/gallery/new_product2.png"
import arrivelPhoto3 from "../assets/img/gallery/new_product3.png"

class BodyFirstPart extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="arrivals">
                    <p className="new-arrivals">new arrivals</p>
                    <div className="arrivals-wrapper">
                        <div className="arrival-card">
                            <div className="arrival-image">
                                <img src={arrivelPhoto1} alt="" className="arrival-img" />
                            </div>
                            <a href="#" className="arrival-name">Thermo Ball Etip Gloves</a>
                            <p className="arrival-price">$ 45,743</p>
                        </div>
                        <div className="arrival-card">
                            <div className="arrival-image">
                                <img src={arrivelPhoto2} alt="" className="arrival-img" />
                            </div>
                            <a href="#" className="arrival-name">Thermo Ball Etip Gloves</a>
                            <p className="arrival-price">$ 45,743</p>
                        </div>
                        <div className="arrival-card">
                            <div className="arrival-image">
                                <img src={arrivelPhoto3} alt="" className="arrival-img" />
                            </div>
                            <a href="#" className="arrival-name">Thermo Ball Etip Gloves</a>
                            <p className="arrival-price">$ 45,743</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BodyFirstPart