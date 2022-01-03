import React from "react"
import Header from "../components/header"
import BodyFirstPart from "../components/body-first-part"
import BodySecondPart from "../components/body-second-part"
import PopulatItems from "../components/body-third-part"
import Video from "../components/video-part"
import WatchChoiceFirst from "../components/watch-of-choice"
import WatchChoiceSecond from "../components/watch-of-choice-second"
import RedFooter from "../components/red-footer"
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

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