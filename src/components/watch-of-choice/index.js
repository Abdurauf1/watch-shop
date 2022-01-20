import React from "react"
import "./style.scss"
import choiceWatch1 from "../assets/img/gallery/choce_watch1.png"
// import choiceWatch2 from "../assets/img/gallery/choice_watch2.png"

class WatchChoiceFirst extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="watch-of-choice-first">
                    <div className="watch-of-choice-text-first">
                        <p className="choice-title1">Watch of Choice</p>
                        <p className="choice-description">Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                        <button className="choce-btn1">show watches</button>
                    </div>
                    <img src={choiceWatch1} alt="" className="choice-img" />
                </div>
            </div>
        )
    }
}

export default WatchChoiceFirst