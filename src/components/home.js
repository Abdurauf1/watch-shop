import React from "react"
import Header from "./header/index"
import BodyFirstPart from "./body-first-part/index"
import BodySecondPart from "./body-second-part/index"
import PopulatItems from "./body-third-part/index"
import Video from "./video-part/index"
import WatchChoiceFirst from "./watch-of-choice/index"
import WatchChoiceSecond from "./watch-of-choice-second/index"
import RedFooter from "./red-footer/index"
class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <BodyFirstPart />
                <BodySecondPart />
                <PopulatItems />
                <Video />
                <WatchChoiceFirst />
                <WatchChoiceSecond />
                <RedFooter />
            </div>
        )
    }
}

export default Home