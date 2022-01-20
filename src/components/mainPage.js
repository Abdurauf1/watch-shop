import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./home.js"
import Navbar from "./navbar/index.js"
import Footer from "./footer/index.js"
import Shop from "./shop.js"
import About from "./about.js"
import Blog from "./blog.js"
import Contact from "./contact.js"
import Up from "./up-btn/index.js"

class MainPage extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Navbar />

                    <Switch>
                        <Route path="/watch-shop" exact>
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