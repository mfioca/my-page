import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';


class Footer extends React.Component {
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
            <Navbar color="dark" dark expand="md" className="Fsize-2">
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav  navbar>
                    <NavItem>
                        <NavLink href="https://www.linkedin.com/in/mark-fioca/"
                            target="_blank" 
                            rel="noopener noreferrer">
                        LinkedIn
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://www.deviantart.com/franknmullet"
                            target="_blank" 
                            rel="noopener noreferrer">
                        DeviantArt
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/mfioca/my-page"
                            target="_blank" 
                            rel="noopener noreferrer">
                        GitHub
                        </NavLink>
                        </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                        <NavItem >
                        <NavLink href="mailto: mark@fioca.com">
                            Email
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
            </Navbar>
        </div>
        );
    }
}

export default Footer;