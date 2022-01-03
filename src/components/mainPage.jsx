import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./home"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Shop from "./shop"
import About from "./about"
import Blog from "./blog"
import Contact from "./contact"
import Up from "./up-btn"

class MainPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Navbar />

                    <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/shop">
                            <Shop />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/blog">
                            <Blog />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                    </Switch>
                    <Up />
                    <Footer />
                </BrowserRouter>
            </div>
        )
    }
}

export default MainPage