import React from 'react'
import ReactDOM from 'react-dom'


class NavBar extends React.Component {
    render() {
        return (
            <div>
                <div className="Navbar center">
                    <div>
                        <a href="/">
                            Home</a>
                        
                    </div>
                    <div>
                        <a href="/about">
                            About</a>
                        
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
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </div>
                    <div>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </div>
                    <div>
                        <Link href="/tvpage">
                            <a>TV Show Feed</a>
                        </Link>
                    </div>
*/