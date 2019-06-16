import React from 'react';
import { SetConstAdj } from './hero_functions';
import { setHitAdj } from './hero_functions';
import { setDmgAdj } from './hero_functions';
import { setacAdj } from './hero_functions';
import { HeroadjStats } from './hero_attacksim';
export { newHero }
export { Hero }


var newHero = {
    Str: 0,
    Const: 0,
    Dext: 0,
    BaseHitPoints: 20,
    BaseArmorClass: 10,
    BaseDamage: 10,
    BaseHitAdj: 0
};


class Hero extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        newHero.Str = Math.floor((Math.random() * 20) + 1);
        newHero.Const = Math.floor((Math.random() * 20) + 1);
        newHero.Dext = Math.floor((Math.random() * 20) + 1);
        HeroadjStats.HeroHp = (newHero.BaseHitPoints) + (SetConstAdj());
        HeroadjStats.HeroAc = (newHero.BaseArmorClass) + (setacAdj());
        HeroadjStats.HeroDmg = (newHero.BaseDamage) + (setDmgAdj());
        HeroadjStats.HeroHitAdj = (newHero.BaseHitAdj) + (setHitAdj());
        this.forceUpdate();
    }

    
    render() {
        return (
            <div>
            <div>
                <p>Strength: {newHero.Str}</p>
                <p>Constitution: {newHero.Const}</p>
                <p>Dexterity: {newHero.Dext}</p>
                <p>Hitpoints: {HeroadjStats.HeroHp}</p>
                <p>Armor Class: {HeroadjStats.HeroAc}</p>
                <p>Base Damage: {HeroadjStats.HeroDmg  }</p>
                <p>Hit Adjust: {HeroadjStats.HeroHitAdj}</p>
            </div>
            <div>
            <button onClick={this.handleClick}>Set Attrubutes</button>
            </div>
            </div>
        );
    }
}

export default Hero;