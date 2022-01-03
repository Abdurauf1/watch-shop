import React from "react"
import "./style.scss"
import arrow from "../assets/img/arrow-pointing-to-right.svg"
import play from "../assets/img/play-button-arrowhead.svg"

class Video extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="bg-video-img">
                <div className="hover-color"></div>
                <a href="#" className="pause">
                    <img src={play} alt="" className="pause-img" />
                </a>
                <div className="next-video">
                    <p className="next-video-text">next video</p>
                    <a href="#" className="play-button-href">
                        <img src={arrow} alt="" className="play-button" />
                    </a>
                </div>
            </div>
        )
    }
}

export default Video