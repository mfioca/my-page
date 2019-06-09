import React, { Component } from 'react'
import Layout from '../components/layout.js'
import Link from 'next/link'
import Test from './app'


const numbers = [1, 2, 3, 4, 5, 6];

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
                <div id="Test">
                    <Test />
                </div>
                <div>
                    <NumberList numbers ={numbers}  />
                </div>
                
            </Layout>
        )
    }
}

function ListItem(props) {
    return <li>{props.value}</li>;
}

function NumberList(props) {
    const numbers = props.numbers;

    return(
        <ul>
            {numbers.map((number) =>
                <ListItem key={number.toString()}
                value={number} />
                )}
        </ul>
    );
}


export default Home;