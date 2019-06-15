import React from 'react';
import { SetConstAdj } from './hero_functions';
import { setHitAdj } from './hero_functions';
import { setDmgAdj } from './hero_functions';
import { setacAdj } from './hero_functions';
export { newHero }


var newHero = {
    Str: 0,
    Const: 0,
    Dext: 0,
    BaseHitPoints: 20,
    BaseArmorClass: 10,
    BaseDamage: 10,
    BaseHitAdj: 0
};

var HeroHp = 0;
var HeroAc = 0;
var HeroDmg = 0;
var HeroHitAdj = 0;


class Hero extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        newHero.Str = Math.floor((Math.random() * 20) + 1);
        newHero.Const = Math.floor((Math.random() * 20) + 1);
        newHero.Dext = Math.floor((Math.random() * 20) + 1);
        HeroHp = (newHero.BaseHitPoints) + (SetConstAdj());
        HeroAc = (newHero.BaseArmorClass) + (setacAdj());
        HeroDmg = (newHero.BaseDamage) + (setDmgAdj());
        HeroHitAdj = (newHero.BaseHitAdj) + (setHitAdj());
        this.forceUpdate();
    }

    
    render() {
        return (
            <div>
            <div>
                <p>Strength: {newHero.Str}</p>
                <p>Constitution: {newHero.Const}</p>
                <p>Dexterity: {newHero.Dext}</p>
                <p>Hitpoints: {HeroHp}</p>
                <p>Armor Class: {HeroAc}</p>
                <p>Base Damage: {HeroDmg  }</p>
                <p>Hit Adjust: {HeroHitAdj}</p>
            </div>
            <div>
            <button onClick={this.handleClick}>Set Attrubutes</button>
            </div>
            </div>
        );
    }
}

export default Hero;