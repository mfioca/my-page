import React, { Component } from 'react'
import Layout from '../components/layout.js'
import AttackSim from './DandD/attacksim'

function DandD(){
    return (
        <Layout>
            <div className="ml-5">
                <h1>Dungeons and Dragons attack simulation</h1>
                    <h4>Calculations are based on SE 2 rules from late 80's and early 90's.</h4>
            </div>
            <div className="ml-5">
                <ol><b>Instructions:</b>
                    <li>Press the "Set Attributes" buttons for both Hero and Monster.</li>
                    <li>Press the "Roll for Initiative" button to see who attacks first.</li>
                    <li>Follow the instructions and press the "Roll for Attack" buttons.</li>
                    <li>After each round, repeat by rolling for Initiative and continue attacking until
                        a character dies.</li>
                </ol>
            </div>
                <AttackSim />
        </Layout>
    );
}

export default DandD;

