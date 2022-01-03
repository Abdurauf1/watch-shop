import React from "react"
import "./style.scss"

class Up extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <a href="#" className="up">
                <i class="fas fa-level-up-alt"></i>
            </a>    
        )
    }
}

export default Up