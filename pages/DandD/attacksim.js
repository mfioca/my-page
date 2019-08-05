import React from 'react';
import { SetheroConstAdj, SetheroHitAdj, SetheroDmgAdj, SetheroacAdj, setherostats, heroattackroll } from './herofunctions';
import { SetmonsterConstAdj, SetmonsterHitAdj, SetmonsterDmgAdj, SetmonsteracAdj, setmonsterstats, monsterattackroll } from './monsterfunctions';





class AttackSim extends React.Component {
    constructor (props) {
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
            monsterstats: {
                Str: 0,
                Const: 0,
                Dext: 0
            },
            monsterbase: {
                Hp: 50,
                ArmorClass: 10,
                Damage: 10,
                HitAdj: 0
            },
            heroHp: 0,
            heroAc: 0,
            heroDmg: 0,
            heroHitAdj: 0,
            heroNametext: '',
            heroName: '',
            heroInitiative: 0,
            heroRoll: 0,
            heroDidHit: '',
            monsterHp: 0,
            monsterAc: 0,
            monsterDmg: 0,
            monsterHitAdj: 0,
            monsterNametext: '',
            monsterName: '',
            monsterInitiative: 0,
            monsterRoll: 0,
            monsterDidHit: ''
        };

        //Hero bind function statements
        this.setherostats = setherostats.bind(this);
        this.SetheroConstAdj = SetheroConstAdj.bind(this);
        this.SetheroacAdj = SetheroacAdj.bind(this);
        this.SetheroDmgAdj = SetheroDmgAdj.bind(this);
        this.SetheroHitAdj = SetheroHitAdj.bind(this);
        this.heroNameChange = this.heroNameChange.bind(this);
        this.heroNameSubmit = this.heroNameSubmit.bind(this);
        this.heroattackroll = heroattackroll.bind(this);
        //monster bind function statements
        this.setmonsterstats = setmonsterstats.bind(this);
        this.SetmonsterConstAdj = SetmonsterConstAdj.bind(this);
        this.SetmonsteracAdj = SetmonsteracAdj.bind(this);
        this.SetmonsterDmgAdj = SetmonsterDmgAdj.bind(this);
        this.SetmonsterHitAdj = SetmonsterHitAdj.bind(this);
        this.monsterNameChange = this.monsterNameChange.bind(this);
        this.monsterNameSubmit = this.monsterNameSubmit.bind(this);
        this.monsterattackroll = monsterattackroll.bind(this);

        this.rollforiniative = this.rollforiniative.bind(this);
    }

    heroNameChange(event) {
        this.setState ({heroNametext : event.target.value});
    }

    heroNameSubmit(event) {
        this.setState ({heroName: this.state.heroNametext})
    }

    monsterNameChange(event) {
        this.setState ({monsterNametext : event.target.value});
    }

    monsterNameSubmit(event) {
        this.setState ({monsterName: this.state.monsterNametext});
    }

    //initiative shows what character attacks first
    rollforiniative() {
        this.Heroinitiative = Math.floor((Math.random() * 10) + 1);
        this.Monsterinitiative = Math.floor((Math.random() * 10) + 1);
        //if hero 1-10 role is lower, hero goes first.
        if (this.Heroinitiative < this.Monsterinitiative) {
            this.setState ({
                heroInitiative: 'First',
                monsterInitiative: 'Second'
            });
        //if monster 1-10 role is lower, monster goes first
        } else if (this.Heroinitiative > this.Monsterinitiative) {
            this.setState ({
                monsterInitiative: 'First',
                heroInitiative: 'Second'
            });
        } else {
            //if both have same result, roll again
            this.setState ({
                heroInitiative: 'ReRoll',
                monsterInitiative: 'ReRoll'
            })   
        };
        //clears out the hit/miss comments since it is a new round.
        this.setState ({
            heroDidHit: '',
            monsterDidHit: ''
        });
    }

    render() {
        return (
            <div>
                <div className="DandD_character Fsize-2">
                    <div className="Hero">
                        <div className="HeroBox">
                            <div>
                                <p><b>Name: </b>{ this.state.heroName }</p>
                                <table className="DandDstat_table">
                                    <tbody>
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
                                            <td>Damage per Hit:</td>
                                            <td> { this.state.heroDmg }</td>
                                        </tr>
                                    </tbody>
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
                                        value={ this.state.value }
                                        onChange={ this.heroNameChange }
                                        //Prevent enter key submit
                                        onKeyPress={event => {
                                            if (event.which === 13 /* Enter */) {
                                            event.preventDefault();
                                            }
                                        }}
                                    />
                                </label>
                                <button type="button" onClick={ this.heroNameSubmit }>Submit</button>
                            </form> 
                        </div>
                    </div>

                    <div className="Monster">
                        <div className="MonsterBox">
                            <div>
                                <p><b>Name: </b>{ this.state.monsterName }</p>
                                <table className="DandDstat_table">
                                    <tbody>
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
                                            <td>Damage per Hit:</td>
                                            <td> { this.state.monsterDmg }</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <img className="DnD_Monster Float-right" src="../static/images/monster.png" alt="monster"/>
                            </div>
                        </div>
                        <div className="Stats-roll align-center">
                            <button onClick={ this.setmonsterstats }>Set Attrubutes</button>
                        </div>
                        <div>
                            <form>
                                <label>
                                    Name:
                                    <input
                                        type="text"
                                        maxLength="20"
                                        value={ this.state.value }
                                        onChange={ this.monsterNameChange }
                                        //Prevent enter key submit
                                        onKeyPress={event => {
                                            if (event.which === 13 /* Enter */) {
                                            event.preventDefault();
                                            }
                                        }}
                                    />
                                </label>
                                <button type="button" onClick={this.monsterNameSubmit}>Submit</button>
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
                        <button  onClick={ this.heroattackroll }>
                            Hero Roll for Attack
                        </button>
                    </div>
                    <div className="Attack-result Fsize-3 center">
                        { this.state.heroDidHit }
                    </div>
                </div>

                  {/*main field to control attack simulation placed between
                     hero info and monster info */}  
                <div className="Attack-section">    
                    
                    <div className="Initiative DandD_button">
                        <button onClick={ this.rollforiniative }>Roll for iniative</button>
                    </div>
                    <div className="Heroinitiative center Fsize-2">
                        <p>Hero <br/>iniative:</p>
                        <p className="Fsize-3">{ this.state.heroInitiative }</p>
                    </div>
                    <div className="Monsterinitiative center Fsize-2">
                        <p>Monster initiative:</p>
                        <p className="Fsize-3">{ this.state.monsterInitiative }</p>
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
                        <button onClick={ this.monsterattackroll }>
                            Monster Roll for Attack
                        </button>
                    </div>
                    <div className="Attack-result Fsize-3 center">
                        { this.state.monsterDidHit }
                    </div>
                </div>
            </div>
        );
    }
}

export default AttackSim