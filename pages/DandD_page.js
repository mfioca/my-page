import React, { Component } from 'react'
import Layout from '../components/layout.js'
import Hero from './DandD/hero'
import Monster from './DandD/monster'
import AttackSim from './DandD/attacksim'

class DandD extends Component {

    render() {
        return (
            <Layout>
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

