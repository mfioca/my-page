import React from 'react'
import ReactDOM from 'react-dom'
import Link from 'next/link'



class Footer extends React.Component {
    render() {
        return (
            <div>
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