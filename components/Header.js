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
                    <ul className="navbar-default nav-ul">
                        <li className="nav-li">
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li className="nav-li">
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                        </li>
                        <li className="nav-li">
                            <Link href="/tictactoe">
                                <a>TicTacToe</a>
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
                                    <input name="q" value="google search" />
                                    <input type="submit" />
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