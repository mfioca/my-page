import React from 'react'
import { FooterLink } from './components'
import CSS from './style.css'


class Footer extends React.Component {
    render() {
        return (
            <div className="Footer">
                <FooterLink id="https://www.linkedin.com/in/mark-fioca/"  title="LinkedIn" />
                <FooterLink id="https://www.deviantart.com/franknmullet" title="Deviantart" />
                <div className="email">
                    <div>
                        <a href="mailto: mark@fioca.com">
                            <a>Send Email</a>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;