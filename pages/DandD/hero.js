import React from 'react';
import { SetConstAdj } from './hero_functions';
import { setHitAdj } from './hero_functions';
import { setDmgAdj } from './hero_functions';
import { setacAdj } from './hero_functions';
import { HeroadjStats } from './attacksim';
export { newHero }
export { Hero }


var newHero = {
    Str: 0,
    Const: 0,
    Dext: 0,
    BaseHitPoints: 50,
    BaseArmorClass: 10,
    BaseDamage: 10,
    BaseHitAdj: 0
};


class Hero extends React.Component {
    constructor(props) {
        super(props);
        this.setherostats = this.setherostats.bind(this);
    }

    setherostats() {
        //random number between 1-20 to set stats
        newHero.Str = Math.floor((Math.random() * 20) + 1);
        newHero.Const = Math.floor((Math.random() * 20) + 1);
        newHero.Dext = Math.floor((Math.random() * 20) + 1);
        //calls functions in hero_functions to adjust stats in
        //heroadjstats variable in the attacksim.js
        HeroadjStats.HeroHp = (newHero.BaseHitPoints) + (SetConstAdj());
        HeroadjStats.HeroAc = (newHero.BaseArmorClass) + (setacAdj());
        HeroadjStats.HeroDmg = (newHero.BaseDamage) + (setDmgAdj());
        HeroadjStats.HeroHitAdj = (newHero.BaseHitAdj) + (setHitAdj());
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <div>
                    <p><b>Name: </b>Insert random Name Here</p>
                </div> 
                <div>
                    <table className="DandDstat_table">
                        <tr>
                            <td>Strength:</td>
                            <td> { newHero.Str }</td>
                        </tr>
                        <tr>
                            <td>Constitution:</td>
                            <td> { newHero.Const }</td>
                        </tr>
                        <tr>
                            <td>Dexterity:</td>
                            <td> { newHero.Dext }</td>
                        </tr>
                        <tr>
                            <td>Hitpoints:</td>
                            <td> { HeroadjStats.HeroHp }</td>
                        </tr>
                        <tr>
                            <td>Base Damage:</td>
                            <td> { HeroadjStats.HeroDmg }</td>
                        </tr>
                    </table>
                </div>
                <div className="Stats-roll">
                    <button onClick={this.setherostats}>Set Attrubutes</button>
                </div>
            </div>
        );
    }
}

export default Hero