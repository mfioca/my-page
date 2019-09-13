export { SetmonsterConstAdj, SetmonsterDmgAdj, SetmonsterHitAdj, 
    SetmonsteracAdj, setmonsterstats, monsterattackroll
}

//sets monster hit point adjustment based on constitution stat number.
function SetmonsterConstAdj() {
    if (this.state.monsterstats.Const == 1) {
        return -3;
    }
    if (this.state.monsterstats.Const == 2 || this.state.monsterstats.Const == 3) {
        return -2;
    }
    if (this.state.monsterstats.Const >= 4 && this.state.monsterstats.Const <= 6) {
        return -1;
    }
    if (this.state.monsterstats.Const >= 7 && this.state.monsterstats.Const <= 14) {
        return 0;
    }
    if (this.state.monsterstats.Const == 15) {
        return 1;
    }
    if (this.state.monsterstats.Const == 16) {
        return 2;
    }
    if (this.state.monsterstats.Const == 17) {
        return 3;
    }
    if (this.state.monsterstats.Const == 18) {
        return 4;
    }
    if (this.state.monsterstats.Const == 19) {
        return 5;
    }
    if (this.state.monsterstats.Const == 20) {
        return 6;
    }
};

//sets monster armor class adjustment based on dexterity stat number.
function SetmonsteracAdj() {
    if (this.state.monsterstats.Dext == 1 || this.state.monsterstats.Dext == 2) {
        return -5;
    }
    if (this.state.monsterstats.Dext == 3) {
        return -4;
    }
    if (this.state.monsterstats.Dext == 4) {
        return -3;
    }
    if (this.state.monsterstats.Dext == 5) {
        return -2;
    }
    if (this.state.monsterstats.Dext == 6) {
        return -1;
    }
    if (this.state.monsterstats.Dext >= 7 && this.state.monsterstats.Dext <= 14) {
        return 0;
    }
    if (this.state.monsterstats.Dext == 15) {
        return 1;
    }
    if (this.state.monsterstats.Dext == 16) {
        return 2;
    }
    if (this.state.monsterstats.Dext == 17) {
        return 3;
    }
    if (this.state.monsterstats.Dext == 18 || this.state.monsterstats.Dext == 19) {
        return 4;
    }
    if (this.state.monsterstats.Dext == 20) {
        return 5;
    }
}

//sets monster damage based on strength stat number.
function SetmonsterDmgAdj() {
    if (this.state.monsterstats.Str == 1) {
        return -4;
    }
    if (this.state.monsterstats.Str == 2 || this.state.monsterstats.Str == 3) {
        return -3;
    }
    if (this.state.monsterstats.Str == 4 || this.state.monsterstats.Str == 5) {
        return -2;
    }
    if (this.state.monsterstats.Str == 6 || this.state.monsterstats.Str == 7) {
        return -1;
    }
    if (this.state.monsterstats.Str >= 8 && this.state.monsterstats.Str <= 16) {
        return 0;
    }
    if (this.state.monsterstats.Str == 17 ) {
        return 1;
    }
    if (this.state.monsterstats.Str == 18 ) {
        return 2;
    }
    if (this.state.monsterstats.Str == 19 ) {
        return 3;
    }
    if (this.state.monsterstats.Str == 20 ) {
        return 4;
    }
}

//sets monster hit adjustment based on strength stat number.
function SetmonsterHitAdj() {
    if (this.state.monsterstats.Str == 1) {
        return -4;
    }
    if (this.state.monsterstats.Str == 2 || this.state.monsterstats.Str == 3) {
        return -3;
    }
    if (this.state.monsterstats.Str == 4 || this.state.monsterstats.Str == 5) {
        return -2;
    }
    if (this.state.monsterstats.Str == 6 || this.state.monsterstats.Str == 7) {
        return -1;
    }
    if (this.state.monsterstats.Str >= 8 && this.state.monsterstats.Str <= 16) {
        return 0;
    }
    if (this.state.monsterstats.Str == 17 ) {
        return 1;
    }
    if (this.state.monsterstats.Str == 18 ) {
        return 2;
    }
    if (this.state.monsterstats.Str == 19 ) {
        return 3;
    }
    if (this.state.monsterstats.Str == 20 ) {
        return 4;
    }
}

//sets stats including base role 1-20 than applies above functions.
function setmonsterstats() {
    //performs a 1-20 roll for every item in the "monsterstats" object/state
    for (let key in this.state.monsterstats) {
        this.state.monsterstats[key] = Math.floor((Math.random() * 20) + 1);
    };
    this.setState ({
        //sets adjusted items based on monsterstats numbers in the set..adj functions
        monsterHp: this.state.monsterbase.Hp + this.SetmonsterConstAdj(),
        monsterAc: this.state.monsterbase.ArmorClass + this.SetmonsteracAdj(),
        monsterDmg: this.state.monsterbase.Damage + this.SetmonsterDmgAdj(),
        monsterHitAdj: this.state.monsterbase.HitAdj + this.SetmonsterHitAdj(),
    });
}

/* determins if the monster successfully hits the hero.  adjusts for hero
armor class andmonster hit adjustment.  on successful attack role, applies damage
to hero hp and if hp reaches zero alerts that hero is dead */
function monsterattackroll() {
    let attackroll = (parseInt((Math.random() * 20) + 1));
    let adjattackroll = attackroll + (this.state.monsterHitAdj);
    let critstrike = (this.state.monsterDmg * 2);
    
    if (attackroll < 20 && adjattackroll >= this.state.heroAc) {
        this.setState({monsterDidHit: 'Hit', monsterRoll: adjattackroll})
        //performs check to see if the hero hp after monster damange is 0 or lower
        if ((this.state.heroHp - this.state.monsterDmg) <= 0) {
            this.setState ({heroHp: 'Dead', monsterRoll: adjattackroll})  // if yes, hero is dead
        } else {
            //if no, sets the herohp state to reflect new damage
            this.setState ({heroHp: this.state.heroHp - this.state.monsterDmg})
        }
    } else if (attackroll >= 20) {
        this.setState({monsterDidHit: 'Hit', monsterRoll: 'Crit Strike'});
        if ((this.state.heroHp - critstrike) <= 0) {
            this.setState ({heroHp: 'Dead', monsterRoll: 'Crit Strike'}) // if yes, monster is dead
        } else {
            this.setState ({heroHp: this.state.heroHp - critstrike})
        } 
    } else {
        this.setState ({monsterDidHit: 'Miss', monsterRoll: adjattackroll});
    };
};