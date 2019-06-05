import React, { Component } from 'react'
import Layout from '../components/layout'
import Link from 'next/link'
import ReactDOM from 'react-dom'
import App from './about_content/aboutapp'


class Aboutpage extends React.Component {
    render() {
        return (
            <div>
            <Layout>
                <div id="App">
                    <App />
                </div>
            </Layout>
            </div>
        )
    }
}

export default Aboutpage