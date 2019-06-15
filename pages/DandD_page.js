import React, { Component } from 'react'
import Layout from '../components/layout.js'
import Hero from './DandD/hero'
import Monster from './DandD/monster'

class DandD extends Component {
    render() {
        return (
            <Layout>
                <div className="flex-container">
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
            </Layout>
        );
    }
}

export default DandD;

/*
<Layout>
                
                <div className="DnD_characters">
                    <div className= "Char_element">
                        <div className="Stats">
                            <Hero />
                        </div>  
                        <div>
                            <img className="DnD_avatar" src="../static/images/hero.png" />
                        </div>
                    </div>
                    <div className="Char_element">
                        <div className="Stats">
                            <Monster />
                        </div>
                    
                        <div className="Char_element">
                            <img className="DnD_avatar" src="../static/images/monster.png" />
                        </div>
                    </div>
                </div>
            </Layout> */