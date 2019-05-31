import React from 'react'
import ReactDOM from 'react-dom'
import Link from 'next/link'



class Footer extends React.Component {
    render() {
        return (
            <div>
                <div className="email">
                    <ul className="navbar-default nav-ul">
                        <li className="nav-li">
                            <a href = "mailto: mark@fioca.com">Send Email</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer;