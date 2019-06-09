import React, { Component } from 'react'
import Layout from '../components/layout.js'
import Test from './app'

const numbers = [1, 2, 3, 4, 5, 6];

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

class Testpage extends Component {
    render() {
        return (
            <Layout>
                <h1>This page is for current dev projects</h1>
                <div id="Test">
                    <Test />
                </div>
                <div>
                    <NumberList numbers={numbers} />
                </div>
            </Layout>
        )
    }
}


export default Testpage;