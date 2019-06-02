import React from 'react'
import ReactDOM from 'react-dom'
import Link from 'next/link'

const linkStyle = {
    marginRight: 15
}

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <div className="navbar navbar-default">
                    <ul className="navbar-default horizontal-ul">
                        <li className="horizontal-li">
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li className="horizontal-li">
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                        </li>
                        <li className="horizontal-li">
                            <Link href="/tictactoe">
                                <a>TicTacToe</a>
                            </Link>
                        </li>
                        <li className="horizontal-li">
                            <Link href="/resume">
                                <a>Resume</a>
                            </Link>
                        </li>
                    </ul>  
                </div>
                <div className="google">
                    <table>
                        <tr>
                            <td>
                                <img src="/static/images/google.png" height="20" />
                            </td>
                            <td>
                                <form action="http://google.com/search" target="_blank">
                                    <input name="q" />
                                    <input type="submit"/>
                                </form>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}


export default NavBar;