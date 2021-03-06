
//sets hitpoints based on constitution stat number.
export function SetConstAdj(constitution) {
    if (constitution == 1) {
        return -3;
    }
    if (constitution == 2 || constitution == 3) {
        return -2;
    }
    if (constitution >= 4 && constitution <= 6) {
        return -1;
    }
    if (constitution >= 7 && constitution <= 14) {
        return 0;
    }
    if (constitution == 15) {
        return 1;
    }
    if (constitution == 16) {
        return 2;
    }
    if (constitution == 17) {
        return 3;
    }
    if (constitution == 18) {
        return 4;
    }
    if (constitution == 19) {
        return 5;
    }
    if (constitution == 20) {
        return 6;
    }
};

//sets Armorclass based on dexterity stat number.
export function SetAcAdj(dexterity) {
    if (dexterity == 1 || dexterity == 2) {
        return -5;
    }
    if (dexterity == 3) {
        return -4;
    }
    if (dexterity == 4) {
        return -3;
    }
    if (dexterity == 5) {
        return -2;
    }
    if (dexterity == 6) {
        return -1;
    }
    if (dexterity >= 7 && dexterity <= 14) {
        return 0;
    }
    if (dexterity == 15) {
        return 1;
    }
    if (dexterity == 16) {
        return 2;
    }
    if (dexterity == 17) {
        return 3;
    }
    if (dexterity == 18 || dexterity == 19) {
        return 4;
    }
    if (dexterity == 20) {
        return 5;
    }
}

//sets damage and hit adjustment based on strength stat number.
export function SetDmgHitAdj(strength) {
    if (strength == 1) {
        return -4;
    }
    if (strength == 2 || strength == 3) {
        return -3;
    }
    if (strength == 4 || strength == 5) {
        return -2;
    }
    if (strength == 6 || strength == 7) {
        return -1;
    }
    if (strength >= 8 && strength <= 16) {
        return 0;
    }
    if (strength == 17 ) {
        return 1;
    }
    if (strength == 18 ) {
        return 2;
    }
    if (strength == 19 ) {
        return 3;
    }
    if (strength == 20 ) {
        return 4;
    }
}

/* ************************
*   Stat functions        * 
**************************/

//sets stats including base role 1-20 than applies above functions.
export function setherostats() {
    //performs a 1-20 roll for every item in the "herostats" object/state
    for (let Stat in this.state.herostats) {
        this.state.herostats[Stat] = Math.floor((Math.random() * 20) + 1);
    };
    this.setState ({
        //sets adjusted items based on herostats numbers in the set..adj functions
        heroHp: this.state.base.Hp + this.SetConstAdj(this.state.herostats.Const),
        heroAc: this.state.base.ArmorClass + this.SetAcAdj(this.state.herostats.Dext),
        heroDmg: this.state.base.Damage + this.SetDmgHitAdj(this.state.herostats.Str),
        heroHitAdj: this.SetDmgHitAdj(this.state.herostats.Str),
    });
}

//sets stats including base role 1-20 than applies above functions.
export function setmonsterstats() {
    //performs a 1-20 roll for every item in the "monsterstats" object/state
    for (let key in this.state.monsterstats) {
        this.state.monsterstats[key] = Math.floor((Math.random() * 20) + 1);
    };
    this.setState ({
        //sets adjusted items based on monsterstats numbers in the set..adj functions
        monsterHp: this.state.base.Hp + this.SetConstAdj(this.state.monsterstats.Const),
        monsterAc: this.state.base.ArmorClass + this.SetAcAdj(this.state.monsterstats.Dext),
        monsterDmg: this.state.base.Damage + this.SetDmgHitAdj(this.state.monsterstats.Str),
        monsterHitAdj: this.SetDmgHitAdj(this.state.monsterstats.Str),
    });
}

/* ***********************
*    Attack functions    * 
*************************/

//initiative shows what character attacks first
export function RollforIniative() {
    const heroinit = Math.floor((Math.random() * 10) + 1);
    const monsterinit = Math.floor((Math.random() * 10) + 1);
    
    if (heroinit < monsterinit) {
        this.setState ({
            heroInitiative: 'First',
            monsterInitiative: 'Second',
            heroAttackVisible: true,  //displays attack button
            initiativeButtonVisible: false,
        });
    } else if (heroinit > monsterinit) {
        this.setState ({
            monsterInitiative: 'First',
            heroInitiative: 'Second',
            monsterAttackVisible: true, //displays attack button
            initiativeButtonVisible: false,
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


/* determins if attack is successful depending on attack turn(set by attackvisible state).  adjusts for
armor class and hit adjustment.  on successful attack role, applies damage
to hp and if hp reaches zero alerts that character is dead */
export function AttackRoll() {
    if (this.state.heroAttackVisible === true) {
        let attackroll = (parseInt((Math.random() * 20) + 1));
        let adjattackroll = attackroll + (this.state.heroHitAdj); 
        let critstrike = (this.state.heroDmg * 2);
    
        if (attackroll < 20 && adjattackroll >= this.state.monsterAc ) {
            this.setState(
                {
                    heroDidHit: 'Hit', heroRoll: adjattackroll
                }
            );
            //performs check to see if the monster hp after hero damange is 0 or lower
            if ((this.state.monsterHp - this.state.heroDmg) <= 0) {
                this.setState (
                    {
                        monsterHp: 'Dead', heroRoll: adjattackroll  // if yes, monster is dead
                    }
                ) 
            } else {
                this.setState (
                    {
                        monsterHp: this.state.monsterHp - this.state.heroDmg
                    }
                )
            }
        } else if (attackroll === 20) {
            this.setState(
                {
                    heroDidHit: 'Hit', heroRoll: 'Crit Strike'
                }
            );
            if ((this.state.monsterHp - critstrike) <= 0) {
                this.setState (
                    {
                        monsterHp: 'Dead', heroRoll: 'Crit Strike'  // if yes, monster is dead
                    }
                ) 
            } else {
                this.setState (
                    {
                        monsterHp: this.state.monsterHp - critstrike
                    }
                )
            }
        } else {
            this.setState (
                {
                    heroDidHit: 'Miss', heroRoll: adjattackroll
                }
            );
        };
    }

    if (this.state.monsterAttackVisible === true) {
        let attackroll = (parseInt((Math.random() * 20) + 1));
        let adjattackroll = attackroll + (this.state.monsterHitAdj);
        let critstrike = (this.state.monsterDmg * 2);
    
        if (attackroll < 20 && adjattackroll >= this.state.heroAc) {
            this.setState(
                {
                    monsterDidHit: 'Hit', monsterRoll: adjattackroll
                }
            )
            //performs check to see if the hero hp after monster damange is 0 or lower
            if ((this.state.heroHp - this.state.monsterDmg) <= 0) {
                this.setState (
                    {
                        heroHp: 'Dead', monsterRoll: adjattackroll  // if yes, hero is dead
                    }
                )  
            } else {
                //if no, sets the herohp state to reflect new damage
                this.setState (
                    {
                        heroHp: this.state.heroHp - this.state.monsterDmg
                    }
                )
            }
        } else if (attackroll === 20) {
            this.setState({
                monsterDidHit: 'Hit', monsterRoll: 'Crit Strike'
            });

            if ((this.state.heroHp - critstrike) <= 0) {
                this.setState (
                    {
                        heroHp: 'Dead', monsterRoll: 'Crit Strike'  // if yes, monster is dead
                    }
                ) 
            } else {
                this.setState (
                    {
                        heroHp: this.state.heroHp - critstrike
                    }
                )
            } 
        } else {
            this.setState (
                {
                    monsterDidHit: 'Miss', monsterRoll: adjattackroll
                }
            );
        };
    }
    this.AttackTurn();
}


/*function to determine where and when the attack button should be displayed based on initiative
setting. Function is called when the attack button is pressed in attackSection (Attackbutton() ) */ 
export function AttackTurn() {
    if (this.state.heroAttackVisible === true) {
        if (this.state.monsterHp === 'Dead'  || this.state.heroInitiative === 'Second') {
            this.setState(state => (
                {
                    heroAttackVisible: !state.heroAttackVisible
                }
            ));
            this.setState (
                {
                    initiativeButtonVisible: true,
                }
            );
        } 
        else {
            //if hero goes first, makes sure attack button on monster area is hidden 
            //and displays attack button for hero.
            this.setState(state => (
                {
                    monsterAttackVisible: !state.monsterAttackVisible, 
                    heroAttackVisible: !state.heroAttackVisible
                }
            ));
        }
    }
    if (this.state.monsterAttackVisible === true) {
        if (this.state.heroHp === 'Dead' || this.state.monsterInitiative === 'Second') {
            this.setState(state => (
                {
                    monsterAttackVisible: !state.monsterAttackVisible
                }
            ));
            this.setState (
                {
                    initiativeButtonVisible: true,
                }
            );
        }
        else {
            this.setState(state => (
                //if monster goes first, makes sure attack button on hero area is hidden 
                //and displays attack button for monster.
                {
                    monsterAttackVisible: !state.monsterAttackVisible, 
                    heroAttackVisible: !state.heroAttackVisible
                }
            ));
        }
    }
};
