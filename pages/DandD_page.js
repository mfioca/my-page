import React, { Component } from 'react'
import Layout from '../components/layout.js'
import Hero from './DandD/hero'
import Monster from './DandD/monster'
import HeroAttackSim from './DandD/hero_attacksim'

class DandD extends Component {

    render() {
        return (
            <Layout>
                <div className="DandD_section">
                    <div>
                        <span className="Stats">
                            <Hero />
                        </span>
                        
                            <img className="DnD_avatar" src="../static/images/hero.png" /> 
                    </div>
                    <div>
                        <span className="Stats">
                            <Monster />
                        </span>
                        <span>
                            <img className="DnD_avatar" src="../static/images/monster.png" />
                        </span>
                    </div>
                </div>
                <div>
                    <div className= "HeroAttackSim">
                        <HeroAttackSim />
                    </div>
                </div>
            </Layout>
        );
    }
}

export default DandD;

