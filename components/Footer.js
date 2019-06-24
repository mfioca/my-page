import React from 'react'


class Footer extends React.Component {
    render() {
        return (
            <div className="Footer-container">
                <div className="Footer-nav center">
                    <div>
                        <a href="https://www.linkedin.com/in/mark-fioca/">
                            Linkedln
                        </a>
                    </div>
                    <div>
                        <a href="https://www.deviantart.com/franknmullet">
                            Deviantart
                        </a>
                    </div>
                </div>
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