import React from 'react'



class NavBar extends React.Component {
    render() {
        return (
            <div>
                <div className="Navbar center">
                    <div>
                        <a href="/">
                            Home
                        </a>
                    </div>
                    <div>
                        <a href="/about">
                            About
                        </a>
                    </div>
                    <div>
                        <a href="/test">
                            Test Page
                        </a>
                    </div>
                    <div>
                        <a href="/tvpage">
                            Tv Page
                        </a>
                    </div>
                </div>
                <div className="google">
                    <div>
                        <img src="/static/images/google.png" height="20" />
                    </div>
                    <div>
                        <form action="http://google.com/search" target="_blank">
                            <input name="q" />
                            <input type="submit" />
                        </form>
                    </div>
                </div>
                
            </div>
        )
    }
}



export default NavBar;

