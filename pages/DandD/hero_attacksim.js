import React from 'react'
export { MonsteradjStats}
export { HeroadjStats }


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

/* determins if the hero successfully hits the monster.  adjusts for monster
armor class and hero hit adjustment.  on successful attack role, applies damage
to monster hp and if hp reaches zero alerts that monster is dead */

function heroattackroll() {
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

/* determins if the monster successfully hits the hero.  adjusts for hero
armor class andmonster hit adjustment.  on successful attack role, applies damage
to hero hp and if hp reaches zero alerts that hero is dead */

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


class AttackSim extends React.Component {
    constructor (props) {
        super(props);
        this.heroinitiative = 0;
        this.monsterinitiative = 0;
        this.heroattack = this.heroattack.bind(this);
        this.Monsterattack = this.Monsterattack.bind(this);
        this.refresh = this.refresh.bind(this);
        this.rollforiniative = this.rollforiniative.bind(this);
    }

    /*hero attack roll, radomly generates number between 1 to 20.  Then
    calls the hero attack roll function to determine successful attack.*/

    heroattack() {
        Heroroll = Math.floor((Math.random() * 20) + 1);
        heroattackroll();
        this.forceUpdate();
    }
    
    /*monster attack roll, randomly generates number between 1 to 20.  Then 
    calls the monster attack roll function to determine successful attack. */

    Monsterattack() {
        Monsterroll = Math.floor((Math.random() * 20) + 1);
        Monsterattackroll();
        this.forceUpdate();
    }

    refresh() {
        this.forceUpdate();
    }

    /*initiative role to determine if hero or monster attacks first.  sets 
    variable for initiative to determine first attack.  Who ever has lower 
    number goes first, on equal role, alerts that a reroll is necessary. */

    rollforiniative() {
        this.heroinitiative = Math.floor((Math.random() * 10) + 1);
        this.monsterinitiative = Math.floor((Math.random() * 10) + 1);
        if (this.heroinitiative < this.monsterinitiative) {
            this.heroinitiative = "Hero goes first";
        } else if (this.heroinitiative > this.monsterinitiative) {
            this.monsterinitiative = "Monster goes first";
        } else {
            this.heroinitiative = "ReRoll";
            this.monsterinitiative = "ReRoll";
        }
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <div className="DandD_attack">    
                    <div className="Attack-container">
                        <div className="Attack-section">
                            <div className="Ac-title Fsize-2">
                                Armor &nbsp;&nbsp;&nbsp;&nbsp; Class
                            </div>
                            <div className="AC-Icon">
                                <img src="../static/images/ac.png" />
                                <p className="AC-Icon-text Fsize-3">
                                    { HeroadjStats.HeroAc }
                                </p>
                            </div>
                            <div div className="Attack-hitadj">
                                Hero Hit <br />Adjustment = { HeroadjStats.HeroHitAdj }
                            </div>
                            <div className="Attack-roll">
                                <button onClick={this.heroattack}>
                                    Roll for Attack
                                </button>
                            </div>
                            <div className="Attack-result">
                            Result of attack = { Herodidhit }
                            </div>
                        </div>
                        
                    </div>  
                    
                    <div className="Attack-container">
                        <div className="Attack-section">    
                            <div>
                                <button className="Reset_stat-button" onClick={this.refresh}>Refresh stats</button>
                                <button onClick={this.rollforiniative}>Roll for iniative</button>
                            
                                <p>Hero iniative = {this.heroinitiative}</p>
                                <p>Monster iniative = {this.monsterinitiative}</p>
                            
                            
                                <p> Monster hit points = { MonsteradjStats.MonsterHp }</p>
                            
                                
                                <p className=" center">Hero HP { HeroadjStats.HeroHp }</p>
                    
                            </div>
                            
                            <div className="HeroHP-icon">
                                <img src="../static/images/herohp.png" />
                            
                            <p className="HeroHP-text Fsize-3 center">
                                { HeroadjStats.HeroHp }
                            </p>
                            </div>
                        </div>
                    </div>



                    <div className="Attack-container">
                        <div className="Attack-section">
                        <div className="Ac-title Fsize-2">
                                Armor &nbsp;&nbsp;&nbsp;&nbsp; Class
                            </div>
                            <div className="AC-Icon">
                                <img src="../static/images/ac.png" />
                                <p className="AC-Icon-text Fsize-3">
                                    { MonsteradjStats.MonsterAc }
                                </p>
                            </div>
                            <div className="Attack-hitadj">
                                Monster Hit <br />Adjustment = { MonsteradjStats.MonsterHitAdj }
                            </div>
                            <div className="Attack-roll">
                                <button onClick={this.Monsterattack}>
                                    Roll for Attack
                                </button>
                            </div>
                            <div className="Attack-result">
                                Result of attack = { Monsterdidhit }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
        );
    }
}

export default AttackSim