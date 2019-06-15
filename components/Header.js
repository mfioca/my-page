import React from 'react'
import Headerdropdown from './Header_dropdown'



class NavBar extends React.Component {
    render() {
        return (
            <div className="Header-container">
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
                    <div className="Headerdropdown">
                        <Headerdropdown />
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


/*
<div>
                        <a href="/tvpage">
                            Tv
                        </a>
                    </div>
                    <div>
                        <a href="/test">
                            Test
                        </a>
                    </div>
                    <div>
                        <a href="/DandD_page">
                            DandD
                        </a>
                    </div>
                    */

