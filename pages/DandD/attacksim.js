import React from 'react';
import { SetheroConstAdj, SetheroHitAdj, SetheroDmgAdj, 
    SetheroacAdj, setherostats, heroattackroll 
} from './herofunctions'
import { SetmonsterConstAdj, SetmonsterHitAdj, SetmonsterDmgAdj, 
    SetmonsteracAdj, setmonsterstats, monsterattackroll 
} from './monsterfunctions'
import { CharacterSheet, NameForm, AttackSection } from '../customComponents'
import { Row, Col, Button } from 'reactstrap'



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
            heroName: 'Hero',
            heroInitiative: 0,
            heroRoll: 0,
            heroDidHit: '',
            monsterHp: 0,
            monsterAc: 0,
            monsterDmg: 0,
            monsterHitAdj: 0,
            monsterNametext: '',
            monsterName: 'Monster',
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
        
        if (this.Heroinitiative < this.Monsterinitiative) {
            this.setState ({
                heroInitiative: 'First',
                monsterInitiative: 'Second'
            });
        
        } else if (this.Heroinitiative > this.Monsterinitiative) {
            this.setState ({
                monsterInitiative: 'First',
                heroInitiative: 'Second'
            });
        } else {
            this.setState ({
                heroInitiative: 'ReRoll',
                monsterInitiative: 'ReRoll'
            })   
        };
        //clears out the hit/miss comments since it is a new round.
        this.setState ({
            heroDidHit: '',
            monsterDidHit: '',
            heroRoll: 0,
            monsterRoll: 0
        });
    }

    render() {
        return (
            <div >
                <div className="d-flex row justify-content-center m-0 p-0"> 
                    <Row className="w-100">
                        <Col className=" m-1 bg-dark text-white ">
                            <div>
                                <h5 className="mt-5 ml-5"><b>Hero Name: </b>
                                    <span className="text-info ml-5 h3">
                                        {this.state.heroName}
                                    </span>
                                </h5>
                            </div>
                            <CharacterSheet 
                                Strength = {this.state.herostats.Str}
                                Constitution = {this.state.herostats.Const}
                                Dexterity = {this.state.herostats.Dext}
                                Hitpoints = {this.state.heroHp}
                                Damage = {this.state.heroDmg}
                                ImgUrl= "../static/images/hero.png"
                            />
                            <div className="text-center m-3">
                                <Button onClick={this.setherostats}>Set Attrubutes</Button>
                            </div>
                            <div className="ml-2 p-2">
                                <NameForm 
                                    value = {this.state.value}
                                    NameChange = {this.heroNameChange}
                                    NameSubmit = {this.heroNameSubmit}
                                />
                            </div>
                        </Col>
                        <Col className="m-1  bg-dark text-white">
                            <h5 className="mt-5 ml-5"><b>Monster Name: </b>
                                <span className="text-info ml-5 h3">
                                    {this.state.monsterName}
                                </span>
                            </h5>
                            <CharacterSheet
                                Strength = {this.state.monsterstats.Str}
                                Constitution = {this.state.monsterstats.Const}
                                Dexterity = {this.state.monsterstats.Dext}
                                Hitpoints = {this.state.monsterHp}
                                Damage = {this.state.monsterDmg}
                                ImgUrl = "../static/images/monster.png"
                            />
                            <div className="text-center m-3">
                                <Button onClick={this.setmonsterstats}>Set Attrubutes</Button>
                            </div>
                            <div className="ml-3 p-2">
                                <NameForm 
                                    value = {this.state.value}
                                    NameChange = {this.monsterNameChange}
                                    NameSubmit = {this.monsterNameSubmit}
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="d-flex flex-wrap justify-content-center m-0 p-0">
                    <div  className="bg-dark m-1 p-0">
                        <AttackSection
                            AC = {this.state.heroAc}
                            HitAdj = {this.state.heroHitAdj}
                            AttackRoll = {this.heroattackroll}
                            RollTitle = "Hero Roll for Attack"
                            Roll = {this.state.heroRoll}
                            DidHit = {this.state.heroDidHit}
                        /> 
                    </div>
                    <div className="bg-dark m-1 p-0 col" xs="3">
                        <div className="text-center bg-dark m-0 p-0 text-white">
                            <Button 
                                type="button" 
                                className="m-5 w-50"  
                                onClick={this.rollforiniative}>
                                Roll for iniative
                            </Button>
                            <Row>
                                <Col className="border-info border-right w-50">
                                    <h4 className="text-info">{this.state.heroName}</h4>
                                    <div className="text-center pt-4">
                                        <div className="p-3">
                                            <h4>iniative:</h4>
                                            <h4 className="text-info">
                                                {this.state.heroInitiative != "Second" && 
                                                    <span className="text-info">
                                                        {this.state.heroInitiative}
                                                    </span> ||  
                                                    <span className="text-warning">
                                                        {this.state.heroInitiative}
                                                    </span>
                                                }
                                            </h4>
                                        </div>
                                        <div className="p-3">
                                            <h4>Hit Points:</h4>
                                            <h4 className="text-center mt-4">
                                                {this.state.heroHp != "Dead" &&
                                                    <span className="text-success">{this.state.heroHp}</span> ||
                                                    <span className="text-danger">{this.state.heroHp}</span>
                                                }
                                            </h4>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <h4 className="text-info">{this.state.monsterName}</h4>
                                    <div className="text-center pt-4">
                                        <div className="p-3">
                                            <h4>iniative:</h4>
                                            <h4>
                                                {this.state.monsterInitiative != "Second" &&
                                                    <span className="text-info">
                                                        {this.state.monsterInitiative}</span> ||
                                                    <span className="text-warning">
                                                        {this.state.monsterInitiative}
                                                    </span>
                                                }
                                            </h4>
                                        </div>
                                        <div className="p-3">
                                            <h4>Hit Points:</h4>
                                            <h4 className="text-center mt-4">
                                                {this.state.monsterHp != "Dead" &&
                                                    <span className="text-success">
                                                        {this.state.monsterHp}
                                                    </span> || 
                                                    <span className="text-danger h4">
                                                        {this.state.monsterHp}
                                                    </span>
                                                }
                                            </h4>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="bg-dark m-1 p-0">
                        <AttackSection
                            AC = {this.state.monsterAc}
                            HitAdj = {this.state.monsterHitAdj}
                            AttackRoll = {this.monsterattackroll}
                            RollTitle = "Monster Roll for Attack"
                            Roll = {this.state.monsterRoll}
                            DidHit = {this.state.monsterDidHit}
                        />
                    </div>
                </div>
            </div>
        );
    }
}



export default AttackSim;

