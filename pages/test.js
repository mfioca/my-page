import React from 'react'
import { Component } from 'react'
import Layout from '../components/layout.js'
import CSS from '../components/style.css'
import Testapp5 from './test_items/transition_item.js'




const numbers = [1, 2, 3, 4, 5, 6];

var test = {
    str: 0,
    const: 0
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


class Testpage extends Component {
    constructor(props) {
        super(props);
        this.state = {str: test.str};
        this.setstr = this.setstr.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    setstr() {
        //this.setState({str: Math.floor((Math.random() * 20) + 1)});
       test.str = Math.floor((Math.random() * 20) + 1);
       this.setState({str: test.str});
    }

    onChange() {
        this.setState({str: test.str});
    }
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
                <h1>This page is for testing and learning different concepts.</h1>
                <div>
                    <NumberList numbers={numbers} />
                </div>
                    <p>Click on the Google Image and hold down the mouse button:</p>
                    <div className="box pointer" onClick={this.switch}>
                    <img src="https://www.google.com/images/srpr/logo11w.png" width="100"/>
                     
                </div>
                <div className="Testapp5">
                    <Testapp5 />
                </div>
                <div>
                    <p>STR: {test.str}</p>
                    <p>str 2: {this.state.str}</p>
                    <button onClick={this.setstr}>Set Srength</button>
                </div>
                <div>
                    <p>importing local JSON file:</p>
                    
                </div>
            </Layout>
        )
    }
}




export default Testpage;