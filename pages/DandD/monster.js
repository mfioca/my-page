import React from 'react';
import { SetConstAdj } from './monsterfunctions';
import { setHitAdj } from './monsterfunctions';
import { setDmgAdj } from './monsterfunctions';
import { setacAdj } from './monsterfunctions';
import { MonsteradjStats } from './attacksim';
export { newMonster }


var newMonster = {
    Str: 0,
    Const: 0,
    Dext: 0,
    BaseHitPoints: 50,
    BaseArmorClass: 10,
    BaseDamage: 10,
    BaseHitAdj: 0
};

class Monster extends React.Component {
    constructor(props) {
        super(props);
        //sets states for stats in the new monster object
        this.state = {str: newMonster.Str};
        this.state = {const: newMonster.Const};
        this.state = {dext: newMonster.Dext};
        this.state = {hp: MonsteradjStats.MonsterHp};
        this.state = {dmg: MonsteradjStats.MonsterDmg};
        this.setMonsterstats = this.setMonsterstats.bind(this);
        //sets Name on form
        this.state = {Name: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({Name: event.target.value});
    }

    setMonsterstats() {
        //random number 1-20 to set newmonster stats
        newMonster.Str = Math.floor((Math.random() * 20) + 1);
        newMonster.Const = Math.floor((Math.random() * 20) + 1);
        newMonster.Dext = Math.floor((Math.random() * 20) + 1);
        //calls the adjusted functions in monster_functions to set adjusted monster
        //stats in the attacksim.js
        MonsteradjStats.MonsterHp = (newMonster.BaseHitPoints) + (SetConstAdj());
        MonsteradjStats.MonsterAc = (newMonster.BaseArmorClass) + (setacAdj());
        MonsteradjStats.MonsterDmg = (newMonster.BaseDamage) + (setDmgAdj());
        MonsteradjStats.MonsterHitAdj = (newMonster.BaseHitAdj) + (setHitAdj());
        //sets new state for each variable
        this.setState({str: newMonster.Str});
        this.setState({const: newMonster.Const});
        this.setState({dext: newMonster.Dext});
        this.setState({hp: MonsteradjStats.MonsterHp});
        this.setState({dmg: MonsteradjStats.MonsterDmg});
    }

    
    render() {
        return (
            <div className="Monster">
                <div className="MonsterBox">
                    <div>
                        <p><b>Name: </b>{ this.state.Name }</p>
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
                        <img className="DnD_Monster Float-right" src="../static/images/monster.png" alt="monster"/>
                    </div>
                </div>
                <div className="Stats-roll align-center">
                    <button onClick={this.setMonsterstats}>Set Attrubutes</button>
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


export default Monster;