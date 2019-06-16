import React from 'react'
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



var Heroroll = 0;
var Monsterroll = 0;

var Herodidhit = " ";
var Monsterdidhit = " ";


function heroattackroll() {
    //Heroroll = Math.floor((Math.random() * 20) + 1);
    if (Heroroll >= (MonsteradjStats.MonsterAc + HeroadjStats.HeroHitAdj)) {
        Herodidhit = "yes";
        MonsteradjStats.MonsterHp = (MonsteradjStats.MonsterHp - 10);
        if (MonsteradjStats.MonsterHp <= 0 ) {
            MonsteradjStats.MonsterHp = "Monster is dead";
        }
    } else {
        Herodidhit = "no";
    };
}

function Monsterattackroll() {
    if (Monsterroll >= (HeroadjStats.HeroAc + MonsteradjStats.MonsterHitAdj)) {
        Monsterdidhit = "yes";
        HeroadjStats.HeroHp = (HeroadjStats.HeroHp - 10);
        if (HeroadjStats.HeroHp <= 0 ) {
            HeroadjStats.HeroHp = "Hero is dead";
        }
    } else {
        Monsterdidhit = "no";
    };
}


class HeroAttackSim extends React.Component {
    constructor (props) {
        super(props);
        this.heroattack = this.heroattack.bind(this);
        this.Monsterattack = this.Monsterattack.bind(this);
        this.refresh = this.refresh.bind(this);
    }

    heroattack() {
        Heroroll = Math.floor((Math.random() * 20) + 1);
        heroattackroll();
        this.forceUpdate();
    }
    Monsterattack() {
        Monsterroll = Math.floor((Math.random() * 20) + 1);
        Monsterattackroll();
        this.forceUpdate();
    }

    refresh() {
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <div className="DandD_attack">    
                    <div className="Attack-container">
                        
                        <p>MonsterAC = { MonsteradjStats.MonsterAc }</p>
                        <p>Hero Hit Adjustment = { HeroadjStats.HeroHitAdj }</p>
                        <button onClick={this.heroattack}>
                            Roll to hit
                        </button>
                        <p>Result of attack = { Herodidhit }</p>
                        
                    </div>
                    <div className="Attack-container">
                    <button className="Reset_stat-button" onClick={this.refresh}>Refresh stats</button>
                    <p> Hero hit points = { HeroadjStats.HeroHp }</p>
                    <p> Monster hit points = { MonsteradjStats.MonsterHp }</p>
                    </div>
                    <div className="Attack-container">
                        <p>HeroAC = { HeroadjStats.HeroAc }</p>
                        <p>Monster Hit Adjustment = { MonsteradjStats.MonsterHitAdj }</p>
                        <button onClick={this.Monsterattack}>
                            Roll to hit
                        </button>
                    <p>Result of attack = { Monsterdidhit }</p>
                    
                    </div>
                </div>
            </div>
    
        );
    }
}

export default HeroAttackSim