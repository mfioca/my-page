import React from 'react';
import { SetheroConstAdj } from './herofunctions';
import { SetheroHitAdj } from './herofunctions';
import { SetheroDmgAdj } from './herofunctions';
import { SetheroacAdj } from './herofunctions';
//import { HeroadjStats } from './attacksim';







class Hero extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            herostats: {
                Str: 0,
                Const: 0,
                Dext: 0
            },
            herobase: {
                Hp: 50,
                ArmorClass: 10,
                Damage: 10,
                HitAdj: 0
            },
            heroHp: 0,
            heroAc: 0,
            heroDmg: 0,
            heroHitAdj: 0,
            heroName: ''
        };
        this.setherostats = this.setherostats.bind(this);
        this.SetheroConstAdj = SetheroConstAdj.bind(this);
        this.SetheroacAdj = SetheroacAdj.bind(this);
        this.SetheroDmgAdj = SetheroDmgAdj.bind(this);
        this.SetheroHitAdj = SetheroHitAdj.bind(this);
        this.heroNameChange = this.heroNameChange.bind(this);
    }
    
    setherostats() {
        for (let key in this.state.herostats) {
            this.state.herostats[key] = Math.floor((Math.random() * 20) + 1);
        };
        //calls functions in hero_functions to adjust stats in
        //heroadjstats variable in the attacksim.js
        this.setState ({
            heroHp: this.state.herobase.Hp + this.SetheroConstAdj(),
            heroAC: this.state.herobase.ArmorClass + this.SetheroacAdj(),
            heroDmg: this.state.herobase.Damage + this.SetheroDmgAdj(),
            heroHitAdj: this.state.herobase.HitAdj + this.SetheroHitAdj(),
        });
    };

    heroNameChange(event) {
        this.setState ({heroName : event.target.value});
    }

    render() {
        return (
            <div className="Hero">
                <div className="HeroBox">
                    <div>
                    <p><b>Name: </b>{ this.state.heroName }</p>
                        <table className="DandDstat_table">
                            <tr>
                                <td>Strength:</td>
                                <td> { this.state.herostats.Str }</td>
                            </tr>
                            <tr>
                                <td>Constitution:</td>
                                <td> { this.state.herostats.Const }</td>
                            </tr>
                            <tr>
                                <td>Dexterity:</td>
                                <td> { this.state.herostats.Dext }</td>
                            </tr>
                            <tr>
                                <td>Hitpoints:</td>
                                <td> { this.state.heroHp }</td>
                            </tr>
                            <tr>
                                <td>Damage per hit:</td>
                                <td> { this.state.heroDmg }</td>
                            </tr>
                        </table>
                    </div>
                    <div>
                        <img className="DnD_Hero Float-right" src="../static/images/hero.png" alt="hero"/> 
                    </div>
                </div>
                <div className="Stats-roll align-center">
                    <button onClick={ this.setherostats }>Set Attrubutes</button>
                </div>
                <div>
                    <form>
                        <label>
                            Name:
                            <input
                                type="text"
                                maxLength="20"
                                value={this.state.value}
                                onChange={this.heroNameChange}
                            />
                        </label>
                    </form> 
                </div>
            </div>
        );
    }
}
/*
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
        this.state = {
            str: newHero.Str,
            const: newHero.Const,
            dext: newHero.Dext,
            hp: HeroadjStats.HeroHp,
            dmg: HeroadjStats.HeroDmg,
            name: '',
        };
        this.setherostats = this.setherostats.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    setherostats() {
        for (let key in newHero) {
            newHero[key] = Math.floor((Math.random() * 20) + 1);
        } 
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
        this.setState({
            str: newHero.Str,
            const: newHero.Const,
            dext: newHero.Dext,
            hp: HeroadjStats.HeroHp,
            dmg: HeroadjStats.HeroDmg
        });
    }
    //displays name as entered into the name field. currently is
    //a live event rather than on submit event.
    handleChange(event) {
        this.setState({Name: event.target.value});
        event.preventDefault();
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
                    <button onClick={ this.setherostats }>Set Attrubutes</button>
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
                            <button onClick = {this.handleChange}>Submit</button>
                        </label>
                    </form>
                </div>
            </div>
        );
    }
}
*/

export default Hero 