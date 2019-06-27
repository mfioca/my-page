import React from 'react'


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
                                <a href="/DandDpage">
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

class NavBar extends React.Component {
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
            <div className="Header-container">
                <div className="Navbar center">
                    <div>
                        <a href="/">
                            Home
                        </a>
                    </div>
                    <div>
                        <a href="/about">
                            About
                        </a>
                    </div>
                    <div>
                        <Headerdropdown />
                    </div>
                </div>
                <div className="google">
                    <div>
                        <img src="/static/images/google.png" alt="google" height="20" />
                    </div>
                    <div>
                        <form action="http://google.com/search" target="_blank" rel="noopener noreferrer">
                            <input name="q" />
                            <input type="submit" value="Google Search" />
                            
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;


