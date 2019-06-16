import React from 'react'
import { newHero } from './hero'
import { HeroHp } from './hero'
import { HeroAc } from './hero'
import { HeroDmg } from './hero'
import { Monster } from './monster'
export { MonsteradjStats}
export { HeroadjStats }
//import { HeroHitAdj } from './hero'

var MonsteradjStats = {
    MonsterHp: 0,
    MonsterAc: 0,
    MonsterDmg: 0,
    MonsterHitAdj: 0
}

var HeroadjStats = {
    HeroHp: 0,
    HeroAc: 0,
    HeroDmg: 0,
    HeroHitAdj: 0
}



var roll = 0;

var didhit = " ";



class HeroAttackSim extends React.Component {
    constructor (props) {
        super(props);
        const didhit = " ";
        this.attackroll = this.attackroll.bind(this);
        this.refresh = this.refresh.bind(this);
    }

    attackroll() {
        roll = Math.floor((Math.random() * 20) + 1);
        if (roll >= (MonsteradjStats.MonsterAc + HeroadjStats.HeroHitAdj)) {
            didhit = "yes";
            MonsteradjStats.MonsterHp = (MonsteradjStats.MonsterHp - 10);
            if (MonsteradjStats.MonsterHp <= 0 ) {
                MonsteradjStats.MonsterHp = "Monster is dead";
            }
        } else {
            didhit = "no";
        };
        
        this.forceUpdate();
    }

    refresh() {
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <button onClick={this.refresh}>Refresh stats</button>
                <p>MonsterAC = { MonsteradjStats.MonsterAc }</p>
                <p>Hero Hit Adjustment = { HeroadjStats.HeroHitAdj }</p>
                <button onClick={this.attackroll}>
                    Roll to hit
                </button>
                <p>Result of attack = { didhit }</p>
                <p> Monster hit points = { MonsteradjStats.MonsterHp }</p>
            </div>
        );
    }
}

export default HeroAttackSim