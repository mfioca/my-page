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
        Herodidhit = "HIT";
        MonsteradjStats.MonsterHp = (MonsteradjStats.MonsterHp - 10);
        if (MonsteradjStats.MonsterHp <= 0 ) {
            MonsteradjStats.MonsterHp = "Dead";
        }
    } else {
        Herodidhit = "MISS";
    };
}

/* determins if the monster successfully hits the hero.  adjusts for hero
armor class andmonster hit adjustment.  on successful attack role, applies damage
to hero hp and if hp reaches zero alerts that hero is dead */

function Monsterattackroll() {
    if (Monsterroll >= (HeroadjStats.HeroAc + MonsteradjStats.MonsterHitAdj)) {
        Monsterdidhit = "HIT";
        HeroadjStats.HeroHp = (HeroadjStats.HeroHp - 10);
        if (HeroadjStats.HeroHp <= 0 ) {
            HeroadjStats.HeroHp = "Dead";
        }
    } else {
        Monsterdidhit = "MISS";
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
            this.heroinitiative = "First";
            this.monsterinitiative = "Second";
        } else if (this.heroinitiative > this.monsterinitiative) {
            this.monsterinitiative = "First";
            this.heroinitiative = "Second"
        } else {
            this.heroinitiative = "ReRoll";
            this.monsterinitiative = "ReRoll";
        }
        Herodidhit = " ";
        Monsterdidhit = " ";
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <div className="Attack-section">
                    <div className="AC-Icon">
                        <img src="../static/images/acicon.png" alt="shield"/>
                        <p className="AC-Icon-text Fsize-3">
                            { HeroadjStats.HeroAc }
                        </p>
                    </div>
                    <div className="HitAdj-Icon">
                        <img src="../static/images/hitadjust.png" alt="icon"/>
                        <p className="HitAdj-Icon-text Fsize-3">
                            { HeroadjStats.HeroHitAdj }
                        </p>
                    </div>
                    <div className="Attack-roll">
                        <button  onClick={this.heroattack}>
                            Hero Roll for Attack
                        </button>
                    </div>
                    <div className="Attack-result Fsize-3 center">
                        { Herodidhit }
                    </div>
                </div>
                    
                <div className="Attack-section">    
                        
                    <div className="StatRefresh DandD_button">
                        <button onClick={this.refresh}>Refresh stats</button>
                    </div>
                    <div className="Initiative DandD_button">
                        <button onClick={this.rollforiniative}>Roll for iniative</button>
                    </div>
                    <div className="Heroinitiative center Fsize-2">
                        <p>Hero <br/>iniative:</p>
                        <p className="Fsize-3">{this.heroinitiative}</p>
                    </div>
                    <div className="Monsterinitiative center Fsize-2">
                        <p>Monster initiative:</p>
                        <p className="Fsize-3">{this.monsterinitiative}</p>
                    </div>  
                    <div className="HeroHP-icon">
                        <img src="../static/images/herohp.png" alt="icon"/>
                        <p className="HeroHP-text Fsize-3 center">
                            { HeroadjStats.HeroHp }
                        </p>
                    </div>
                    <div className="MonsterHP-icon">
                        <img src="../static/images/monsterhp.png" alt="icon"/>
                        <p className="MonsterHP-text Fsize-3 center">
                            { MonsteradjStats.MonsterHp }
                        </p>
                    </div>
                </div>
                <div className="Attack-section">
                    <div className="AC-Icon">
                        <img src="../static/images/acicon.png" alt="shield" />
                        <p className="AC-Icon-text Fsize-3">
                            { MonsteradjStats.MonsterAc }
                        </p>
                    </div>
                    <div className="HitAdj-Icon">
                        <img src="../static/images/hitadjust.png" alt="icon"/>
                        <p className="HitAdj-Icon-text Fsize-3">
                            { MonsteradjStats.MonsterHitAdj }
                        </p>
                    </div>
                    <div className="Attack-roll">
                        <button onClick={this.Monsterattack}>
                            Monster Roll for Attack
                        </button>
                    </div>
                    <div className="Attack-result Fsize-3 center">
                        { Monsterdidhit }
                    </div>
                </div>
                
            </div>
        );
    }
}

export default AttackSim