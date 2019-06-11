import React, { Component } from 'react'
import Layout from '../components/layout.js'
import Test from './app'
import Testapp5 from './transition_item'

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
    state = {
        boxactive: false
    };

    switch = () => {
        this.setState(prevState => ({
            boxactive: !prevState.boxactive
        }));
    };

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
                    <div className="box" onClick={this.switch}>
                    <img src="https://www.google.com/images/srpr/logo11w.png" width="100"/>
                     
                </div>
                <div className="Testapp5">
                    <Testapp5 />
                </div>
            </Layout>
        )
    }
}


export default Testpage;