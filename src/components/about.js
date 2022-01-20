import React from "react"
import "./about.scss"
import arrow from "../components/assets/img/arrow-pointing-to-right.svg"
import play from "../components/assets/img/play-button-arrowhead.svg"
import cube from "../components/assets/img/block.svg"
import secure from "../components/assets/img/open-lock.svg"
import refresh from "../components/assets/img/refresh.svg"


class About extends React.Component {
    render() {
        return (
            <div>
                <div className="shop-header">
                    <p className="shop-watch-title">about us</p>
                </div>

                <div className="about-description">
                    <div className="container1">
                        <div className="line-text-wrapper">
                            <div className="line"></div>
                            <div className="line-text">our mission</div>
                        </div>
                        <p className="txt">Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum
                            suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo
                            viverra sebfd dho eiusmod tempor maecenas accumsan lacus.</p>
                        <p className="txt">Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho
                            eiusmod tempor maecenas accumsan.</p>
                        <div style={{ marginTop: "45px" }}>
                            <div className="line-text-wrapper">
                                <div className="line"></div>
                                <div className="line-text">our vision</div>
                            </div>
                            <p className="txt">Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum
                                suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo
                                viverra sebfd dho eiusmod tempor maecenas accumsan lacus.</p>
                            <p className="txt">Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho
                                eiusmod tempor maecenas accumsan.</p>
                        </div>
                    </div>
                </div>

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
            </div>
        )
    }
}

export default About