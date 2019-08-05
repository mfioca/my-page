
//sets hero hitpoints based on constitution stat number.
export function SetheroConstAdj() {
    if (this.state.herostats.Const == 1) {
        return -3;
    }
    if (this.state.herostats.Const == 2 || this.state.herostats.Const == 3) {
        return -2;
    }
    if (this.state.herostats.Const >= 4 && this.state.herostats.Const <= 6) {
        return -1;
    }
    if (this.state.herostats.Const >= 7 && this.state.herostats.Const <= 14) {
        return 0;
    }
    if (this.state.herostats.Const == 15) {
        return 1;
    }
    if (this.state.herostats.Const == 16) {
        return 2;
    }
    if (this.state.herostats.Const == 17) {
        return 3;
    }
    if (this.state.herostats.Const == 18) {
        return 4;
    }
    if (this.state.herostats.Const == 19) {
        return 5;
    }
    if (this.state.herostats.Const == 20) {
        return 6;
    }
};

//sets hero Armorclass based on dexterity stat number.
export function SetheroacAdj() {
    if (this.state.herostats.Dext == 1 || this.state.herostats.Dext == 2) {
        return -5;
    }
    if (this.state.herostats.Dext == 3) {
        return -4;
    }
    if (this.state.herostats.Dext == 4) {
        return -3;
    }
    if (this.state.herostats.Dext == 5) {
        return -2;
    }
    if (this.state.herostats.Dext == 6) {
        return -1;
    }
    if (this.state.herostats.Dext >= 7 && this.state.herostats.Dext <= 14) {
        return 0;
    }
    if (this.state.herostats.Dext == 15) {
        return 1;
    }
    if (this.state.herostats.Dext == 16) {
        return 2;
    }
    if (this.state.herostats.Dext == 17) {
        return 3;
    }
    if (this.state.herostats.Dext == 18 || this.state.herostats.Dext == 19) {
        return 4;
    }
    if (this.state.herostats.Dext == 20) {
        return 5;
    }
}

//sets hero damage based on strength stat number.
export function SetheroDmgAdj() {
    if (this.state.herostats.Str == 1) {
        return -4;
    }
    if (this.state.herostats.Str == 2 || this.state.herostats.Str == 3) {
        return -3;
    }
    if (this.state.herostats.Str == 4 || this.state.herostats.Str == 5) {
        return -2;
    }
    if (this.state.herostats.Str == 6 || this.state.herostats.Str == 7) {
        return -1;
    }
    if (this.state.herostats.Str >= 8 && this.state.herostats.Str <= 16) {
        return 0;
    }
    if (this.state.herostats.Str == 17 ) {
        return 1;
    }
    if (this.state.herostats.Str == 18 ) {
        return 2;
    }
    if (this.state.herostats.Str == 19 ) {
        return 3;
    }
    if (this.state.herostats.Str == 20 ) {
        return 4;
    }
}

//sets hero hit adjustment based on strength stat number.
export function SetheroHitAdj() {
    if (this.state.herostats.Str == 1) {
        return -4;
    }
    if (this.state.herostats.Str == 2 || this.state.herostats.Str == 3) {
        return -3;
    }
    if (this.state.herostats.Str == 4 || this.state.herostats.Str == 5) {
        return -2;
    }
    if (this.state.herostats.Str == 6 || this.state.herostats.Str == 7) {
        return -1;
    }
    if (this.state.herostats.Str >= 8 && this.state.herostats.Str <= 16) {
        return 0;
    }
    if (this.state.herostats.Str == 17 ) {
        return 1;
    }
    if (this.state.herostats.Str == 18 ) {
        return 2;
    }
    if (this.state.herostats.Str == 19 ) {
        return 3;
    }
    if (this.state.herostats.Str == 20 ) {
        return 4;
    }
}

//sets stats including base role 1-20 than applies above functions.
export function setherostats() {
    //performs a 1-20 roll for every item in the "herostats" object/state
    for (let key in this.state.herostats) {
        this.state.herostats[key] = Math.floor((Math.random() * 20) + 1);
    };
    this.setState ({
        //sets adjusted items based on herostats numbers in the set..adj functions
        heroHp: this.state.herobase.Hp + this.SetheroConstAdj(),
        heroAc: this.state.herobase.ArmorClass + this.SetheroacAdj(),
        heroDmg: this.state.herobase.Damage + this.SetheroDmgAdj(),
        heroHitAdj: this.state.herobase.HitAdj + this.SetheroHitAdj(),
    });
}

/* determins if the hero successfully hits the monster.  adjusts for monster
armor class and hero hit adjustment.  on successful attack role, applies damage
to monster hp and if hp reaches zero alerts that monster is dead */
export function heroattackroll() {
    //1-20 for attack roll to see if hero hits
    this.setState ({heroRoll: Math.floor((Math.random() * 20) + 1)});
    //if hero hit, set display to show "hit"
    if (this.state.heroRoll >= (this.state.monsterAc + this.state.heroHitAdj )) {
        this.setState({heroDidHit: 'Hit'})
        //performs check to see if the monster hp after hero damange is 0 or lower
        if ((this.state.monsterHp - this.state.heroDmg) <= 0) {
            this.setState ({monsterHp: 'Dead'}) // if yes, monster is dead
        } else {
            //if no, sets the monsterohp state to reflect new damage
            this.setState ({monsterHp: this.state.monsterHp - this.state.heroDmg})
        }
    } else {
        this.setState ({heroDidHit: 'Miss'});
    };
};