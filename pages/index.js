import React, { Component } from 'react'
import Layout from '../components/layout.js'
import Link from 'next/link'
import Test from './app'




class Home extends Component {
    render() {
        return (
            <Layout>
                <div className="center-page center Fsize-3 Text-shadow">
                    <h1>Welcome to my page!</h1>
                    <p>
                        This page has been created during my efforts to learn JavaScript <br /> 
                        and the React development structure.
                    </p>
                    <p>
                        I will be posting different projects on these pages through <br />
                        Development to fully formatted pages.
                    </p>
                    <p>
                    It is my intent to use this page as a professional page and portfolio as <br />
                    I progress as a developer.
                    </p>
                    <p>
                    Please feel free to look around and email me with any questions or suggestions.
                    </p>

                </div>
                <div className="center-page center Text-shadow">
                <h1>Home Page Under Construction</h1>
                <img className="Lemons center-page" src="../static/images/lemons.jpg" />
                <p className="copywrite-text center">
                    This picture and everything in it is owned by the Valve Corpration.
                    All Rights Reserved.
                </p>
                </div>
            </Layout>
        )
    }
}




export default Home;