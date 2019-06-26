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
                        <li>After each round, repeat until simulation is finished.</li>
                    </ol>
                </div>
                <div className="DandD_stats Fsize-2">
                    <div>
                        <span className="Stats">
                            <Hero />
                        </span>
                        
                            <img className="DnD_avatar ImgSize200" src="../static/images/hero.png" alt="hero"/> 
                    </div>
                    <div>
                        <span className="Stats">
                            <Monster />
                        </span>
                        <span>
                            <img className="DnD_avatar ImgSize200" src="../static/images/monster.png" alt="monster"/>
                        </span>
                    </div>
                </div>
                        <AttackSim />
                   
            </Layout>
        );
    }
}

export default DandD;

