import React from 'react'
import ReactDOM from 'react-dom'
import Link from 'next/link'



class Footer extends React.Component {
    render() {
        return (
            <div>
                <div className="Navbar center">
                    <div>
                        < a href="https://www.linkedin.com/in/mark-fioca/" target="_blank">
                            Linkedln
                        </a>
                    </div>
                    <div>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </div>
                    <div>
                        <Link href="/resume">
                            <a>Resume</a>
                        </Link>
                    </div>
                </div>
                <div className="email">
                    <div>
                        <Link href="mailto: mark@fioca.com">
                            <a>Send Email</a>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;