import React from "react"
import "./style.scss"
import headerImg from "../assets/img/hero/watch.png"

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <header>
                <div className="container">
                    <div className="header-content">
                        <p className="header-title">select your new</p>
                        <p className="header-title" style={{marginTop: "20px"}}>perfect style</p>
                        <p className="header-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat is aute irure.</p>
                        <button className="shop-now-btn">shop now</button>
                    </div>

                    <img src={headerImg} alt="" className="header-img"/>  
                </div>
            </header>
        )
    }
}

export default Header