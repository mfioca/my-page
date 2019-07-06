import React from 'react'
import { NavLink } from './components'
import { Google } from './components'


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
            <div className="Navbar">
                <a className = "center pointer Dropdown"
                    onMouseOver="this.className='Dropdown_hover'" 
                    onClick={this.showList}>
                    <u>Projects</u>
                </a>
                {this.state.showList && (
                    <div className="DropdownMenu" onMouseLeave={this.showList}>
                        <ul className="Dropdown-list">
                            <li className="Dropdown-list_item">
                            <NavLink id="/tvpage" title="Tv import" />
                                
                            </li>
                            <li className="Dropdown-list_item">
                                <NavLink id="/DandDpage" title="D and D" />
                                
                            </li>
                            <li className="Dropdown-list_item">
                                <NavLink id="/test" title="Test" />
                                
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <NavLink id="/" title="Home" />
                <NavLink id="/about" title="About" />
                <Headerdropdown />
                <Google />
            </div>
        );
    }
}

export default Header;


