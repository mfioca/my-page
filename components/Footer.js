import React from 'react'
import ReactDOM from 'react-dom'
import Link from 'next/link'



class Footer extends React.Component {
    render() {
        return (
            <div className="Footer-container">
                <div className="Footer-nav center">
                    <div>
                        <a href="https://www.linkedin.com/in/mark-fioca/" target="_blank">
                            Linkedln
                        </a>
                    </div>
                    <div>
                        <a href="https://www.deviantart.com/franknmullet" target="_blank">
                            Deviantart
                        </a>
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