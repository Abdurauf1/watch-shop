import React from "react"
import "./style.scss"
import cube from "../assets/img/block.svg"
import secure from "../assets/img/open-lock.svg"
import refresh from "../assets/img/refresh.svg"


class RedFooter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="container">
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
        )
    }
}

export default RedFooter