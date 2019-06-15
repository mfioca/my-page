import React from "react";
import "../components/transitionstyle.css";

class Headerdropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showList: false};
        this.showList = this.showList.bind(this);
    }

    showList() {
        this.setState(prevState => ({
            showList: !prevState.showList      
        }));
    };

    render() {
        return (
            <div className="container">
                <button className="display" onClick={this.showList}>
                    Projects
                </button>
                {this.state.showList && (
                    <div className="menu" onMouseLeave={this.showList}>
                        <ul className="list">
                            <li className="list-item">
                                <a href="/tvpage">
                                    Tv import
                                </a>
                            </li>
                            <li className="list-item">
                                <a href="/DandD_page">
                                    DandD
                                </a>
                            </li>
                            <li className="list-item">
                                <a href="/test">
                                    test
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

export default Headerdropdown