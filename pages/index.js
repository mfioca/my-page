import React, { Component } from 'react'
import Layout from '../components/layout.js'
import Link from 'next/link'
import Test from './app'




class Home extends Component {
    render() {
        return (
            <Layout>
                <h1>Home Page Under Construction</h1>
                <p>
                    I will be placing test items on this page as I go
                </p>
                <img className="Lemons" src="../static/images/lemons.jpg" />
                <p className="copywrite-text center">
                    This picture and everything in it is owned by the Valve Corpration.
                    All Rights Reserved.
                </p>
            </Layout>
        )
    }
}




export default Home;