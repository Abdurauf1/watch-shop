import React from "react"
import "./style.scss"
import timezone from "../assets/img/logo/logo.png"
import searchIcon from "./images/search.svg"
import shopIcon from "./images/shopping-cart.svg"
import userIcon from "./images/user.svg"
import { Link } from "react-router-dom"

class Navbar extends React.Component {
    render() {
        return (
            <nav className="nav">
                <a href="#" className="logo">
                    <img src={timezone} alt="" className="logo-img" />
                </a>

                <div className="hot">hot</div>

                <ul className="nav-links">
                    <li className="nav-list-item">
                        <Link to="/watch-shop" className="nav-link-href">home</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/shop" className="nav-link-href">shop</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/about" className="nav-link-href">about</Link>
                    </li>
                    <li className="nav-list-item">
                        <a href="#" className="nav-link-href">latest</a>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/blog" className="nav-link-href">blog</Link>
                    </li>
                    <li className="nav-list-item">
                        <a href="#" className="nav-link-href">pages</a>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/contact" className="nav-link-href">Contact</Link>
                    </li>
                </ul>

                <div className="nav-icon-links">
                    <a href="#" className="nav-icon-link">
                        <img src={searchIcon} className="nav-icon-img" alt="" />
                    </a>
                    <a href="#" className="nav-icon-link">
                        <img src={userIcon} className="nav-icon-img" alt="" />
                    </a>
                    <a href="#" className="nav-icon-link">
                        <img src={shopIcon} className="nav-icon-img" alt="" />
                    </a>
                </div>
            </nav>
        )
    }
}

export default Navbar