import React from 'react';
import { SetConstAdj } from './monster_functions';
import { setHitAdj } from './monster_functions';
import { setDmgAdj } from './monster_functions';
import { setacAdj } from './monster_functions';
export { newMonster }
import { MonsteradjStats } from './hero_attacksim'



var newMonster = {
    Str: 0,
    Const: 0,
    Dext: 0,
    BaseHitPoints: 20,
    BaseArmorClass: 10,
    BaseDamage: 10,
    BaseHitAdj: 0
};

class Monster extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
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
        this.forceUpdate();
    }

    
    render() {
        return (
            <div>
            <div>
                <p>Strength: {newMonster.Str}</p>
                <p>Constitution: {newMonster.Const}</p>
                <p>Dexterity: {newMonster.Dext}</p>
                <p>Hitpoints: {MonsteradjStats.MonsterHp}</p>
               
                <p>Base Damage: {MonsteradjStats.MonsterDmg  }</p>
                
            </div>
            <div>
            <button onClick={this.handleClick}>Set Attrubutes</button>
            </div>
            </div>
        );
    }
}

export default Monster;