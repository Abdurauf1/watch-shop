import React from "react"
import "./style.scss"
import choiceWatch2 from "../assets/img/gallery/choce_watch2.png"

class WatchChoiceSecond extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="watch-of-choice-second">
                    <img src={choiceWatch2} alt="" className="choice-img" />
                    <div className="watch-of-choice-text-second">
                        <p className="choice-title2">Watch of Choice</p>
                        <p className="choice-description2">Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                        <button className="choce-btn2">show watches</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default WatchChoiceSecond