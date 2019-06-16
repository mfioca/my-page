import React from "react";
import "../components/style.css";

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
            <div>
                <a className = "center pointer Dropdown"
                onMouseOver="this.className='Dropdown_hover'" 
                onClick={this.showList}>
                    <u>Projects</u>
                </a>
                {this.state.showList && (
                    <div className="DropdownMenu" onMouseLeave={this.showList}>
                        <ul className="Dropdown-list">
                            <li className="Dropdown-list_item">
                                <a href="/tvpage">
                                    Tv import
                                </a>
                            </li>
                            <li className="Dropdown-list_item">
                                <a href="/DandD_page">
                                    DandD
                                </a>
                            </li>
                            <li className="Dropdown-list_item">
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