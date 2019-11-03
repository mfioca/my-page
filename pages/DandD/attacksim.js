import React from 'react'
import { SetConstAdj, SetAcAdj, SetDmgHitAdj, setherostats, setmonsterstats,
    RollforIniative, AttackRoll, AttackTurn } from './mainfunctions'

import { CharacterSheet, NameForm, AttackSection, CenterFlexWrapDiv, AttackStatusDisplay } from '../customComponents'
import { Row, Col, Button } from 'reactstrap'


class AttackSim extends React.Component {
    constructor (props) {
        super(props);
        
        this.state = { 
            base: {
                Hp: 50,
                ArmorClass: 10,
                Damage: 10
            },
            herostats: {
                Str: 0,
                Const: 0,
                Dext: 0
            },
            monsterstats: {
                Str: 0,
                Const: 0,
                Dext: 0
            },
            heroHp: 0,
            heroAc: 0,
            heroDmg: 0,
            heroHitAdj: 0,
            heroNametext: '',
            heroName: 'Hero',
            heroInitiative: 0,
            heroAttackVisible: false,
            heroRoll: 0,
            heroDidHit: '',
            monsterHp: 0,
            monsterAc: 0,
            monsterDmg: 0,
            monsterHitAdj: 0,
            monsterNametext: '',
            monsterName: 'Monster',
            monsterInitiative: 0,
            monsterAttackVisible: false,
            monsterRoll: 0,
            monsterDidHit: '',
        };

        //Hero bind function statements
        this.setherostats = setherostats.bind(this);
        this.heroNameChange = this.heroNameChange.bind(this);
        this.heroNameSubmit = this.heroNameSubmit.bind(this);
        
        //monster bind function statements
        this.setmonsterstats = setmonsterstats.bind(this);
        this.monsterNameChange = this.monsterNameChange.bind(this);
        this.monsterNameSubmit = this.monsterNameSubmit.bind(this);

        //combined hero/monster function statesments
        this.SetConstAdj = SetConstAdj.bind(this);
        this.SetAcAdj = SetAcAdj.bind(this);
        this.SetDmgHitAdj = SetDmgHitAdj.bind(this);
        this.RollforIniative = RollforIniative.bind(this);
        this.AttackRoll = AttackRoll.bind(this);
        this.AttackTurn = AttackTurn.bind(this);
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

    render() {  
        return (
            <div>
                <CenterFlexWrapDiv className="m-0 p-0"> 
                    <Row className="w-100">
            {/**********Hero Character Sheet*********/}
                        <Col className="m-1 bg-dark text-white">
                            <h5 className="mt-5 ml-5"><b>Hero Name: </b>
                                <span className="text-info ml-5 h3">
                                    {this.state.heroName}
                                </span>
                            </h5>
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
                            <NameForm
                                Value = {this.state.value}
                                NameChange = {this.heroNameChange}
                                NameSubmit = {this.heroNameSubmit}
                            />
                        </Col>
            {/**********Monster Character Sheet*********/}
                        <Col className="m-1 bg-dark text-white">
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
                            <NameForm
                                Value = {this.state.value}
                                NameChange = {this.monsterNameChange}
                                NameSubmit = {this.monsterNameSubmit}
                            />
                        </Col>
                    </Row>
                </CenterFlexWrapDiv>
                <CenterFlexWrapDiv className="m-0 p-0">
                    <div  className="bg-dark m-1 p-0 mb-2 col">
            {/**********Hero Display Area*********/}
                        <AttackSection
                            AC = {this.state.heroAc}
                            HitAdj = {this.state.heroHitAdj}
                            AttackRoll = {this.AttackRoll}
                            RollTitle = "Hero Roll for Attack"
                            Roll = {this.state.heroRoll}
                            DidHit = {this.state.heroDidHit}
                            NextTurn = {this.AttackTurn}
                            AttackTurn = {this.state.heroAttackVisible}
                        /> 
                    </div>
                    <div className="bg-dark m-1 mb-2 p-0 col text-center text-white">
                        <Button 
                            className="m-5 w-50"  
                            onClick={this.RollforIniative}>
                            Roll for iniative
                        </Button>
                        <Row>
                            <Col className="w-50">
                                <AttackStatusDisplay
                                    Name = {this.state.heroName}
                                    Initiative = {this.state.heroInitiative}
                                    HP = {this.state.heroHp}
                                />
                            </Col>
                            <Col>
                                <AttackStatusDisplay
                                    Name = {this.state.monsterName}
                                    Initiative = {this.state.monsterInitiative}
                                    HP = {this.state.monsterHp}
                                />
                            </Col>
                        </Row>
                    </div>
                    <div className="bg-dark m-1 p-0 mb-2 col">
            {/**********Monster Display Area*********/}
                        <AttackSection
                            AC = {this.state.monsterAc}
                            HitAdj = {this.state.monsterHitAdj}
                            AttackRoll = {this.AttackRoll}
                            RollTitle = "Monster Roll for Attack"
                            Roll = {this.state.monsterRoll}
                            DidHit = {this.state.monsterDidHit}
                            NextTurn = {this.AttackTurn}
                            AttackTurn = {this.state.monsterAttackVisible}
                        />
                    </div>
                </CenterFlexWrapDiv>
            </div>
        );
    }
}



export default AttackSim;

