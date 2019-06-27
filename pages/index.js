import React, { Component } from 'react'
import Layout from '../components/layout.js'


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
            </Layout>
        )
    }
}

export default Home;