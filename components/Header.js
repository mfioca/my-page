import React from 'react';
import {
    Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, UncontrolledDropdown, 
    DropdownToggle, DropdownMenu,  Button 
} from 'reactstrap';


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
                <Navbar color="dark" className="h4" dark expand="md">
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
                                <DropdownMenu right className="bg-dark btn-dark">
                                    <Button className="btn-dark w-100" href="/tvpage">TvMaze</Button>
                                    <Button className="btn-dark w-100" href="/DandDpage">DandD</Button>
                                    <Button className="btn-dark w-100" href="/providerData">Provider List</Button>
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


