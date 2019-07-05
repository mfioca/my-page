import React from 'react';
import { SetConstAdj } from './herofunctions';
import { setHitAdj } from './herofunctions';
import { setDmgAdj } from './herofunctions';
import { setacAdj } from './herofunctions';
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
        //sets states for stats in the new hero object
        this.state = {str: newHero.Str};
        this.state = {const: newHero.Const};
        this.state = {dext: newHero.Dext};
        this.state = {hp: HeroadjStats.HeroHp};
        this.state = {dmg: HeroadjStats.HeroDmg};
        this.setherostats = this.setherostats.bind(this);
        //sets Name on form
        this.state = {Name: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
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
        //sets new state for each variable
        this.setState({str: newHero.Str});
        this.setState({const: newHero.Const});
        this.setState({dext: newHero.Dext});
        this.setState({hp: HeroadjStats.HeroHp});
        this.setState({dmg: HeroadjStats.HeroDmg});
    }

    handleChange(event) {
        this.setState({Name: event.target.value});
    }

    handleSubmit() {
        this.setState(prevState => ({
            showNameForm: !prevState.showNameForm
        }));
    }

    render() {
        return (
            <div className="Hero">
                <div className="HeroBox">
                    <div>
                        <p><b>Name:</b> { this.state.Name }</p>
                        <table className="DandDstat_table">
                            <tr>
                                <td>Strength:</td>
                                <td> { this.state.str }</td>
                            </tr>
                            <tr>
                                <td>Constitution:</td>
                                <td> { this.state.const }</td>
                            </tr>
                            <tr>
                                <td>Dexterity:</td>
                                <td> { this.state.dext }</td>
                            </tr>
                            <tr>
                                <td>Hitpoints:</td>
                                <td> { this.state.hp }</td>
                            </tr>
                            <tr>
                                <td>Base Damage:</td>
                                <td> { this.state.dmg }</td>
                            </tr>
                        </table>
                    </div>
                    <div>
                        <img className="DnD_Hero Float-right" src="../static/images/hero.png" alt="hero"/> 
                    </div>
                </div>
                <div className="Stats-roll align-center">
                    <button onClick={this.setherostats}>Set Attrubutes</button>
                </div>
                <div>
                    <form>
                        <label>
                            Name: 
                            <input 
                                type="text"
                                maxLength="20"
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                        </label>
                    </form>
                </div>
            </div>
            
        );
    }
}

export default Hero