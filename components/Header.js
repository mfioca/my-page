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
                <div className="navbartable">
                <table>
                    <tr>
                    <th>
                <Link href="/">
                    <a style={linkStyle}>Home</a>
                </Link>
                </th>
                <th>
                <Link href="/about">
                    <a style={linkStyle}>About</a>
                </Link>
                </th>
                <th>
                <Link href="/tictactoe">
                    <a style={linkStyle}>TicTacToe</a>
                </Link>
                </th>
                </tr>
                </table>
            </div>
            <div className="google">
                <table>
                    <tr>
                        <td>
                            <img src="/static/google.png" height="20"/>
                        </td>
                        <td>
                            <form action="http://google.com/search" target="_blank">
                                <input name="q"/>
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