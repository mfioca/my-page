import React, { Component } from 'react'
import Layout from '../components/layout.js'
import Hero from './DandD/hero'
import Monster from './DandD/monster'
import AttackSim from './DandD/attacksim'

class DandD extends Component {

    render() {
        
        return (
            <Layout>
                <div className="center">
                    <h1>Dungeons and Dragons attack simulation</h1>
                    Calculations are based on SE 2 rules from late 80's and early 90's.
                </div>
                <div>
                    <ol><b>Instructions:</b>
                        <li>Press the "Set Attributes" buttons for both Hero and Monster.</li>
                        <li>Press the "Refresh Stats" button.</li>
                        <li>Press the "Roll for Initiative" button to see who attacks first.</li>
                        <li>Follow the instructions and press the "Roll for Attack" buttons.</li>
                        <li>After each round, repeat by rolling for Initiative and continue attacking until
                            a character dies.</li>
                    </ol>
                </div>
                <div className="DandD_character Fsize-2">
                    <div>
                        <Hero />
                    </div>
                    <div>
                        <Monster />
                    </div>
                </div>
                <div className="Attack-container">
                    <AttackSim />
                </div>
            </Layout>
        );
    }
}

export default DandD;

