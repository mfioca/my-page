import React from 'react';
import { SetConstAdj } from './monster_functions';
import { setHitAdj } from './monster_functions';
import { setDmgAdj } from './monster_functions';
import { setacAdj } from './monster_functions';
export { newMonster }


var newMonster = {
    Str: 0,
    Const: 0,
    Dext: 0,
    BaseHitPoints: 20,
    BaseArmorClass: 10,
    BaseDamage: 10,
    BaseHitAdj: 0
};

var MonsterHp = 0;
var MonsterAc = 0;
var MonsterDmg = 0;
var MonsterHitAdj = 0;


class Monster extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        newMonster.Str = Math.floor((Math.random() * 20) + 1);
        newMonster.Const = Math.floor((Math.random() * 20) + 1);
        newMonster.Dext = Math.floor((Math.random() * 20) + 1);
        MonsterHp = (newMonster.BaseHitPoints) + (SetConstAdj());
        MonsterAc = (newMonster.BaseArmorClass) + (setacAdj());
        MonsterDmg = (newMonster.BaseDamage) + (setDmgAdj());
        MonsterHitAdj = (newMonster.BaseHitAdj) + (setHitAdj());
        this.forceUpdate();
    }

    
    render() {
        return (
            <div>
            <div>
                <p>Strength: {newMonster.Str}</p>
                <p>Constitution: {newMonster.Const}</p>
                <p>Dexterity: {newMonster.Dext}</p>
                <p>Hitpoints: {MonsterHp}</p>
                <p>Armor Class: {MonsterAc}</p>
                <p>Base Damage: {MonsterDmg  }</p>
                <p>Hit Adjust: {MonsterHitAdj}</p>
            </div>
            <div>
            <button onClick={this.handleClick}>Set Attrubutes</button>
            </div>
            </div>
        );
    }
}

export default Monster;