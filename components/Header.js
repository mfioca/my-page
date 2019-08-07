import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

var activeprofile = '';
import {Collapse, Navbar, NavbarToggler, DropdownLink, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
  
class Header extends React.Component {
constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
    isOpen: false
    };
}
    toggle() {
    this.setState({
    isOpen: !this.state.isOpen
    });
}
    render() {
        return (
        <div>
            <Navbar color="dark" dark expand="md" >
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto " navbar>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/about">About</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Projects
                        </DropdownToggle>
                        <DropdownMenu right>
                            
                            <DropdownItem >
                                <a href="/tvpage">TvMaze</a>
                            </DropdownItem>
                            <DropdownItem>
                                <a href="/DandDpage">DandD</a>
                            </DropdownItem>
                            <DropdownItem>
                                <a href="/ProviderData">Provider List</a>
                            </DropdownItem>
                            <DropdownItem>
                                {activeprofile === 'Guest' &&
                                    <a id="/test">Test</a> 
                                }
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Collapse>
            </Navbar>
        </div>
        );
    }
}


/*  old code
function NavLink(props) {
    return (
    <div className="Navbar center">
        <a href={`${props.id}`} title={props.title}>
            {props.title}
        </a>
    </div>
    );
}

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
                <a 
                    className="Dropdown pointer"
                    onClick={this.showList}>
                    <u>Projects</u>
                </a>
                {this.state.showList && (
                    <div className="DropdownMenu" onMouseLeave={this.showList}>
                        <ul className="Dropdown-list">
                            <li className="Dropdown-list_item">
                                <NavLink id="/tvpage" title="TvMaze" />
                            </li>
                            <li className="Dropdown-list_item">
                                <NavLink id="/DandDpage" title="D and D" />
                            </li>
                            <li className="Dropdown-list_item">
                                <NavLink id="/ProviderData" title="Provider List" />
                            </li>
                            
                            {activeprofile === 'Guest' &&
                                <li className="Dropdown-list_item">
                                <NavLink id="/test" title="Test" /> 
                                </li>  
                            }
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

*/

export default Header;


