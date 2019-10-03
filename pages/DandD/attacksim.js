import React from 'react';
import { SetheroConstAdj, SetheroHitAdj, SetheroDmgAdj, 
    SetheroacAdj, setherostats, heroattackroll, heroAttackTurn 
} from './herofunctions'
import { SetmonsterConstAdj, SetmonsterHitAdj, SetmonsterDmgAdj, 
    SetmonsteracAdj, setmonsterstats, monsterattackroll, monsterAttackTurn
} from './monsterfunctions'
import { CharacterSheet, NameForm, AttackSection, CenterFlexWrapDiv, AttackStatusDisplay } from '../customComponents'
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
        this.SetheroConstAdj = SetheroConstAdj.bind(this);
        this.SetheroacAdj = SetheroacAdj.bind(this);
        this.SetheroDmgAdj = SetheroDmgAdj.bind(this);
        this.SetheroHitAdj = SetheroHitAdj.bind(this);
        this.heroNameChange = this.heroNameChange.bind(this);
        this.heroNameSubmit = this.heroNameSubmit.bind(this);
        this.heroattackroll = heroattackroll.bind(this);
        this.heroAttackTurn = heroAttackTurn.bind(this);
        //monster bind function statements
        this.setmonsterstats = setmonsterstats.bind(this);
        this.SetmonsterConstAdj = SetmonsterConstAdj.bind(this);
        this.SetmonsteracAdj = SetmonsteracAdj.bind(this);
        this.SetmonsterDmgAdj = SetmonsterDmgAdj.bind(this);
        this.SetmonsterHitAdj = SetmonsterHitAdj.bind(this);
        this.monsterNameChange = this.monsterNameChange.bind(this);
        this.monsterNameSubmit = this.monsterNameSubmit.bind(this);
        this.monsterattackroll = monsterattackroll.bind(this);
        this.monsterAttackTurn = monsterAttackTurn.bind(this);

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
        const heroinit = Math.floor((Math.random() * 10) + 1);
        const monsterinit = Math.floor((Math.random() * 10) + 1);
        
        if (heroinit < monsterinit) {
            this.setState ({
                heroInitiative: 'First',
                monsterInitiative: 'Second',
                heroAttackVisible: true  //displays attack button
            });
        } else if (heroinit > monsterinit) {
            this.setState ({
                monsterInitiative: 'First',
                heroInitiative: 'Second',
                monsterAttackVisible: true //displays attack button
            }); 
        } else {
            this.setState ({
                heroInitiative: 'ReRoll',
                monsterInitiative: 'ReRoll',
                //hides attck buttons due to reroll
                heroAttackVisible: false,  
                monsterAttackVisible: false
            });
        };

        //clears out the hit/miss comments and roll result since it is a new round.
        this.setState ({
            heroDidHit: '',
            monsterDidHit: '',
            heroRoll: 0,
            monsterRoll: 0
        });
    }

    render() {  
        return (
            <div>
                <CenterFlexWrapDiv className="m-0 p-0"> 
                    <Row className="w-100">
                        <Col className="m-1 bg-dark text-white">
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
                            <NameForm
                                value = {this.state.value}
                                NameChange = {this.heroNameChange}
                                NameSubmit = {this.heroNameSubmit}
                            />
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
                            <NameForm 
                                value = {this.state.value}
                                NameChange = {this.monsterNameChange}
                                NameSubmit = {this.monsterNameSubmit}
                            />
                        </Col>
                    </Row>
                </CenterFlexWrapDiv>
                <CenterFlexWrapDiv className="m-0 p-0">
                    <div  className="bg-dark m-1 p-0">
                        <AttackSection
                            AC = {this.state.heroAc}
                            HitAdj = {this.state.heroHitAdj}
                            AttackRoll = {this.heroattackroll}
                            RollTitle = "Hero Roll for Attack"
                            Roll = {this.state.heroRoll}
                            DidHit = {this.state.heroDidHit}
                            NextTurn = {this.heroAttackTurn}
                            AttackTurn = {this.state.heroAttackVisible}
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
                    </div>
                    <div className="bg-dark m-1 p-0">
                        <AttackSection
                            AC = {this.state.monsterAc}
                            HitAdj = {this.state.monsterHitAdj}
                            AttackRoll = {this.monsterattackroll}
                            RollTitle = "Monster Roll for Attack"
                            Roll = {this.state.monsterRoll}
                            DidHit = {this.state.monsterDidHit}
                            NextTurn = {this.monsterAttackTurn}
                            AttackTurn = {this.state.monsterAttackVisible}
                        />
                    </div>
                </CenterFlexWrapDiv>
            </div>
        );
    }
}



export default AttackSim;

