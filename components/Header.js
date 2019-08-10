import React from 'react';
import {Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

var activeprofile = ''; 

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
                <Navbar  color="dark" className="Fsize-2" dark expand="md">
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/about">About</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret >
                                    Projects
                                </DropdownToggle>
                                <DropdownMenu right className="bg-dark">
                                    <DropdownItem>
                                        <a className="Header" href="/tvpage">TvMaze</a>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <a  className="Header" href="/DandDpage">DandD</a>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <a className="Header" href="/ProviderData">Provider List</a>
                                    </DropdownItem>
                                    <DropdownItem>
                                        {activeprofile === 'Guest' &&
                                            <a className="Header" href="/test">Test</a> 
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

export default Header;


