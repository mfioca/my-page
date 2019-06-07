import React, { Component } from 'react'
import Layout from '../components/layout.js'
import Link from 'next/link'
import Test from './app'



class Home extends Component {
    render() {
        return (
            <Layout>
                <h1>Home Page Under Construction</h1>
                <img className="Lemons" src="../static/images/lemons.jpg" />
                <p className="copywrite-text center">
                    All pictures currently used and everything in them are owned by the Valve Corpration.
                    All Rights Reserved.
                </p>
                <div id="Test"><Test /></div>
            </Layout>
        )
    }
}


export default Home;