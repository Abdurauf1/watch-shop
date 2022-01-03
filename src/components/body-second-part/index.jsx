import React from "react"
import "./style.scss"
import img1 from "../assets/img/gallery/gallery1.png"
import img2 from "../assets/img/gallery/gallery2.png"
import img3 from "../assets/img/gallery/gallery3.png"
import img4 from "../assets/img/gallery/gallery4.png"


class BodySecondPart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="second-part">
                <div className="first">
                    <div className="img1">
                        <img src={img1} alt="" className="image1"/>
                        <div className="alpha"></div>
                    </div>
                    <div className="img2">
                        <img src={img2} alt="" className="image2"/>
                        <div className="alpha"></div>
                    </div>
                </div>
                <div className="second">    
                    <div className="img3">
                        <img src={img3} alt="" className="image3"/>
                        <div className="alpha"></div>
                    </div>
                    <div className="img4">
                        <img src={img4} alt=""  className="image4"/>
                        <div className="alpha"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BodySecondPart