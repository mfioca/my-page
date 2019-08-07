import React from 'react';
import { SetheroConstAdj, SetheroHitAdj, SetheroDmgAdj, SetheroacAdj, setherostats, heroattackroll } from './herofunctions';
import { SetmonsterConstAdj, SetmonsterHitAdj, SetmonsterDmgAdj, SetmonsteracAdj, setmonsterstats, monsterattackroll } from './monsterfunctions';



class CharacterSheet extends React.Component {
    render() {
        return (
            <div>
                <table className="DandDstat_table inline-block">
                    <tbody>
                        <tr>
                            <td>Strength:</td>
                            <td> { this.props.Strength }</td>
                        </tr>
                        <tr>
                            <td>Constitution:</td>
                            <td> { this.props.Constitution }</td>
                        </tr>
                        <tr>
                            <td>Dexterity:</td>
                            <td> { this.props.Dexterity }</td>
                        </tr>
                        <tr>
                            <td>Hitpoints:</td>
                            <td> { this.props.Hitpoints }</td>
                        </tr>
                        <tr>
                            <td>Damage per Hit:</td>
                            <td> { this.props.Damage }</td>
                        </tr>
                    </tbody>
                </table>    
            </div>
        );
    }
}


class Avatar extends React.Component {
    render() {
        if (this.props.avatar === "hero") {
            return (
                <div>
                    <img className="DnD_Hero Float-right" src="../static/images/hero.png" alt="hero"/> 
                </div>
            );
        }
        if (this.props.avatar === "monster") {
            return (
                <div>
                    <img className="DnD_Monster Float-right" src="../static/images/monster.png" alt="monster"/>
                </div>
            );
        }  
    }
}


class NameForm extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <label>
                        Name:
                        <input
                            type="text"
                            maxLength="20"
                            value={ this.props.value }
                            onChange={ this.props.NameChange }
                            //Prevent enter key submit
                            onKeyPress={event => {
                                if (event.which === 13 /* Enter */) {
                                event.preventDefault();
                                }
                            }}
                        />
                    </label>
                    <button type="button" onClick={ this.props.NameSubmit }>Submit</button>
                </form> 
            </div>
        );
    }
}

class AttackSection extends React.Component {
    render() {
        return (
            <div className="Attack-section">
                <div className="AC-Icon">
                    <img src="../static/images/acicon.png" alt="shield"/>
                    <p className="AC-Icon-text Fsize-3">
                        { this.props.AC }
                    </p>
                </div>
                <div className="HitAdj-Icon">
                    <img src="../static/images/hitadjust.png" alt="icon"/>
                    <p className="HitAdj-Icon-text Fsize-3">
                        { this.props.HitAdj }
                    </p>
                </div>
                <div className="Attack-roll">
                    <button  onClick={ this.props.AttackRoll }>
                        { this.props.RollTitle }
                    </button>
                </div>
                <div className="Attack-result Fsize-3 center">
                    { this.props.DidHit }
                </div>
            </div>
        );
    }
}

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
                                <CharacterSheet 
                                    Strength = { this.state.herostats.Str }
                                    Constitution = { this.state.herostats.Const }
                                    Dexterity = { this.state.herostats.Dext }
                                    Hitpoints = { this.state.heroHp }
                                    Damage = { this.state.heroDmg }
                                />
                            </div>
                            <Avatar avatar = "hero" />
                        </div>
                        <div className="Stats-roll align-center">
                            <button onClick={ this.setherostats }>Set Attrubutes</button>
                        </div>
                        <NameForm 
                            value = { this.state.value }
                            NameChange = { this.heroNameChange }
                            NameSubmit = { this.heroNameSubmit }
                        />
                    </div>

                    <div className="Monster">
                        <div className="MonsterBox">
                            <div>
                                <p><b>Name: </b>{ this.state.monsterName }</p>
                                <CharacterSheet
                                    Strength = { this.state.monsterstats.Str }
                                    Constitution = { this.state.monsterstats.Const }
                                    Dexterity = { this.state.monsterstats.Dext }
                                    Hitpoints = { this.state.monsterHp }
                                    Damage = { this.state.monsterDmg }
                                />
                            </div>
                            <Avatar avatar = "monster" />
                        </div>
                        <div className="Stats-roll align-center">
                            <button onClick={ this.setmonsterstats }>Set Attrubutes</button>
                        </div>
                        <NameForm 
                            value = { this.state.value }
                            NameChange = { this.monsterNameChange }
                            NameSubmit = { this.monsterNameSubmit }
                        />
                    </div>      
                </div>
                
                <AttackSection
                    AC = { this.state.heroAc }
                    HitAdj = { this.state.heroHitAdj }
                    AttackRoll = { this.heroattackroll }
                    RollTitle = "Hero Roll for Attack"
                    DidHit = { this.state.heroDidHit }
                />

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
                
                <AttackSection
                    AC = { this.state.monsterAc }
                    HitAdj = { this.state.monsterHitAdj }
                    AttackRoll = { this.monsterattackroll }
                    RollTitle = "Monster Roll for Attack"
                    DidHit = { this.state.monsterDidHit }
                />
            </div>
        );
    }
}

export default AttackSim