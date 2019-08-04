import React from 'react'
import { SetheroConstAdj, SetheroHitAdj, SetheroDmgAdj, SetheroacAdj } from './herofunctions'
import { SetmonsterConstAdj, SetmonsterHitAdj, SetmonsterDmgAdj, SetmonsteracAdj } from './monsterfunctions'



/* determins if the hero successfully hits the monster.  adjusts for monster
armor class and hero hit adjustment.  on successful attack role, applies damage
to monster hp and if hp reaches zero alerts that monster is dead */

function heroattackroll() {
    this.setState ({heroroll: Math.floor((Math.random() * 20) + 1)});
    if (this.state.heroroll >= (this.state.monsterAc + this.state.heroHitAdj )) {
        this.setState({herodidhit: 'Hit'})
        if ((this.state.monsterHp - this.state.heroDmg) <= 0) {
            this.setState ({monsterHp: 'Dead'})
        } else {
            this.setState ({monsterHp: this.state.monsterHp - this.state.heroDmg})
        }
    
    } else {
        this.setState ({herodidhit: 'Miss'});
    };
};



/* determins if the monster successfully hits the hero.  adjusts for hero
armor class andmonster hit adjustment.  on successful attack role, applies damage
to hero hp and if hp reaches zero alerts that hero is dead */

function monsterattackroll() {
    this.setState ({monsterroll: Math.floor((Math.random() * 20) + 1)});
    if (this.state.monsterroll >= (this.state.heroAc + this.state.monsterHitAdj )) {
        this.setState({monsterdidhit: 'Hit'})
        if ((this.state.heroHp - this.state.monsterDmg) <= 0) {
            this.setState ({heroHp: 'Dead'})
        } else {
            this.setState ({heroHp: this.state.heroHp - this.state.monsterDmg})
        }
    
    } else {
        this.setState ({monsterdidhit: 'Miss'});
    };
};


class AttackSim extends React.Component {
    constructor (props) {
        super(props);
        this.heroinitiative = 0;
        this.monsterinitiative = 0;
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
            heroHp: 0,
            heroAc: 0,
            heroDmg: 0,
            heroHitAdj: 0,
            heroName: '',
            heroinitiative: 0,
            heroroll: 0,
            herodidhit: '',
            monsterHp: 0,
            monsterAc: 0,
            monsterDmg: 0,
            monsterHitAdj: 0,
            monsterName: '',
            monsterinitiative: 0,
            monsterroll: 0,
            monsterdidhit: '',

        };

        this.setherostats = this.setherostats.bind(this);
        this.SetheroConstAdj = SetheroConstAdj.bind(this);
        this.SetheroacAdj = SetheroacAdj.bind(this);
        this.SetheroDmgAdj = SetheroDmgAdj.bind(this);
        this.SetheroHitAdj = SetheroHitAdj.bind(this);
        this.heroNameChange = this.heroNameChange.bind(this);

        this.setMonsterstats = this.setMonsterstats.bind(this);
        this.SetmonsterConstAdj = SetmonsterConstAdj.bind(this);
        this.SetmonsteracAdj = SetmonsteracAdj.bind(this);
        this.SetmonsterDmgAdj = SetmonsterDmgAdj.bind(this);
        this.SetmonsterHitAdj = SetmonsterHitAdj.bind(this);
        this.monsterNameChange = this.monsterNameChange.bind(this);


        this.heroattackroll = heroattackroll.bind(this);
        this.monsterattackroll = monsterattackroll.bind(this);
        this.rollforiniative = this.rollforiniative.bind(this);
        
    }

    setherostats() {
        for (let key in this.state.herostats) {
            this.state.herostats[key] = Math.floor((Math.random() * 20) + 1);
        };
        this.setState ({
            heroHp: this.state.herobase.Hp + this.SetheroConstAdj(),
            heroAc: this.state.herobase.ArmorClass + this.SetheroacAdj(),
            heroDmg: this.state.herobase.Damage + this.SetheroDmgAdj(),
            heroHitAdj: this.state.herobase.HitAdj + this.SetheroHitAdj(),
        });
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

    heroNameChange(event) {
        this.setState ({heroName : event.target.value});
    };

    monsterNameChange(event) {
        this.setState ({monsterName : event.target.value});
    };

    rollforiniative() {
        this.Heroinitiative = Math.floor((Math.random() * 10) + 1);
        this.Monsterinitiative = Math.floor((Math.random() * 10) + 1);
        if (this.Heroinitiative < this.Monsterinitiative) {
            this.setState ({
                heroinitiative: 'First',
                monsterinitiative: 'Second'
            });
        } else if (this.Heroinitiative > this.Monsterinitiative) {
            this.setState ({
                monsterinitiative: 'First',
                heroinitiative: 'Second'
            });
        } else {
            this.setState ({
                heroinitiative: 'ReRoll',
                monsterinitiative: 'ReRoll'
            })   
        };
        this.setState ({
            herodidhit: '',
            monsterdidhit: ''
        });
    };

    

    render() {
        return (
            <div>
                <div className="DandD_character Fsize-2">
                    
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
                    
                </div>
                


                {/*displays hero stats and attack information */}
                <div className="Attack-section">
                    <div className="AC-Icon">
                        <img src="../static/images/acicon.png" alt="shield"/>
                        <p className="AC-Icon-text Fsize-3">
                            { this.state.heroAc }
                        </p>
                    </div>
                    <div className="HitAdj-Icon">
                        <img src="../static/images/hitadjust.png" alt="icon"/>
                        <p className="HitAdj-Icon-text Fsize-3">
                            { this.state.heroHitAdj }
                        </p>
                    </div>
                    <div className="Attack-roll">
                        <button  onClick={this.heroattackroll}>
                            Hero Roll for Attack
                        </button>
                    </div>
                    <div className="Attack-result Fsize-3 center">
                        { this.state.herodidhit }
                    </div>
                </div>
                  {/*main field to control attack simulation placed between
                     hero info and monster info */}  
                <div className="Attack-section">    
                    
                    <div className="Initiative DandD_button">
                        <button onClick={this.rollforiniative}>Roll for iniative</button>
                    </div>
                    <div className="Heroinitiative center Fsize-2">
                        <p>Hero <br/>iniative:</p>
                        <p className="Fsize-3">{this.state.heroinitiative}</p>
                    </div>
                    <div className="Monsterinitiative center Fsize-2">
                        <p>Monster initiative:</p>
                        <p className="Fsize-3">{this.state.monsterinitiative}</p>
                    </div>  
                    <div className="HeroHP-icon">
                        <img src="../static/images/herohp.png" alt="icon"/>
                        <p className="HeroHP-text Fsize-3 center">
                            { this.state.heroHp }
                        </p>
                    </div>
                    <div className="MonsterHP-icon">
                        <img src="../static/images/monsterhp.png" alt="icon"/>
                        
                        <p className="MonsterHP-text Fsize-3 center">
                            
                            { this.state.monsterHp }
                        </p>
                    </div>
                </div>
                {/*displays Monster stats and attack information */}
                <div className="Attack-section">
                    <div className="AC-Icon">
                        <img src="../static/images/acicon.png" alt="shield" />
                        <p className="AC-Icon-text Fsize-3">
                            { this.state.monsterAc }
                        </p>
                    </div>
                    <div className="HitAdj-Icon">
                        <img src="../static/images/hitadjust.png" alt="icon"/>
                        <p className="HitAdj-Icon-text Fsize-3">
                            { this.state.monsterHitAdj }
                        </p>
                    </div>
                    <div className="Attack-roll">
                        <button onClick={this.monsterattackroll}>
                            Monster Roll for Attack
                        </button>
                    </div>
                    <div className="Attack-result Fsize-3 center">
                        { this.state.monsterdidhit }
                    </div>
                </div>
            </div>
        );
    }
}

export default AttackSim