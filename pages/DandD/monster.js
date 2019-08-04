import React from 'react';
import { SetmonsterConstAdj } from './monsterfunctions';
import { SetmonsterHitAdj } from './monsterfunctions';
import { SetmonsterDmgAdj } from './monsterfunctions';
import { SetmonsteracAdj } from './monsterfunctions';
//import { MonsteradjStats } from './attacksim';
//export { newMonster }

/*
var newMonster = {
    Str: 0,
    Const: 0,
    Dext: 0,
    BaseHitPoints: 50,
    BaseArmorClass: 10,
    BaseDamage: 10,
    BaseHitAdj: 0
};  */

class Monster extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            monsterstats: {
                Str: 0,
                Const: 0,
                Dext: 0
            },
            monsterbase: {
                Name: '',
                Hp: 50,
                ArmorClass: 10,
                Damage: 10,
                HitAdj: 0
            },
            monsterHp: 0,
            monsterAc: 0,
            monsterDmg: 0,
            monsterHitAdj: 0,
            monsterName: ''
        };
        this.setMonsterstats = this.setMonsterstats.bind(this);
        this.SetmonsterConstAdj = SetmonsterConstAdj.bind(this);
        this.SetmonsteracAdj = SetmonsteracAdj.bind(this);
        this.SetmonsterDmgAdj = SetmonsterDmgAdj.bind(this);
        this.SetmonsterHitAdj = SetmonsterHitAdj.bind(this);
        this.monsterNameChange = this.monsterNameChange.bind(this);
    }

    setMonsterstats() {
        for (let key in this.state.monsterstats) {
            this.state.monsterstats[key] = Math.floor((Math.random() * 20) + 1);
        };
        this.setState ({
            monsterHp: this.state.monsterbase.Hp + this.SetmonsterConstAdj(),
            monsterAc: this.state.monsterbase.ArmorClass + this.SetmonsteracAdj(),
            monsterDmg: this.state.monsterbase.Damage + this.SetmonsterDmgAdj(),
            monsterHitAdj: this.state.monsterbase.HitAdj + this.SetmonsterHitAdj(),
        });
    }
    //displays name as entered into the name field. currently is
    //a live event rather than on submit event.
    monsterNameChange(event) {
        this.setState ({monsterName : event.target.value});
    }

    /*
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
        this.setState({
            str: newMonster.Str,
            const: newMonster.Const,
            dext: newMonster.Dext,
            hp: MonsteradjStats.MonsterHp,
            dmg: MonsteradjStats.MonsterDmg
        });
    } */

    
    render() {
        return (
            <div className="Monster">
                <div className="MonsterBox">
                    <div>
                        <p><b>Name: </b>{ this.state.monsterName }</p>
                        <table className="DandDstat_table">
                            <tr>
                                <td>Strength:</td>
                                <td> { this.state.monsterstats.Str }</td>
                            </tr>
                            <tr>
                                <td>Constitution:</td>
                                <td> { this.state.monsterstats.Const }</td>
                            </tr>
                            <tr>
                                <td>Dexterity:</td>
                                <td> { this.state.monsterstats.Dext }</td>
                            </tr>
                            <tr>
                                <td>Hitpoints:</td>
                                <td> { this.state.monsterHp }</td>
                            </tr>
                            <tr>
                                <td>Base Damage:</td>
                                <td> { this.state.monsterDmg }</td>
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
                                onChange={this.monsterNameChange}
                            />
                        </label>
                    </form>
                </div>
            </div>
        );
    }
}


export default Monster;