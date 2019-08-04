


//sets monster hit adjustment based on strength stat number.

export function SetmonsterConstAdj() {
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

export function SetmonsteracAdj() {
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

export function SetmonsterDmgAdj() {
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

export function SetmonsterHitAdj() {
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



/*
export function setHitAdj() {
    if (newMonster.Str == 1) {
        return -4;
    }
    if (newMonster.Str == 2 || newMonster.Str == 3) {
        return -3;
    }
    if (newMonster.Str == 4 || newMonster.Str == 5) {
        return -2;
    }
    if (newMonster.Str == 6 || newMonster.Str == 7) {
        return -1;
    }
    if (newMonster.Str >= 8 && newMonster.Str <= 16) {
        return 0;
    }
    if (newMonster.Str == 17 ) {
        return 1;
    }
    if (newMonster.Str == 18 ) {
        return 2;
    }
    if (newMonster.Str == 19 ) {
        return 3;
    }
    if (newMonster.Str == 20 ) {
        return 4;
    }
}

//sets monster damage adjustment based on strength stat number.
export function setDmgAdj() {
    if (newMonster.Str == 1) {
        return -4;
    }
    if (newMonster.Str == 2 || newMonster.Str == 3) {
        return -3;
    }
    if (newMonster.Str == 4 || newMonster.Str == 5) {
        return -2;
    }
    if (newMonster.Str == 6 || newMonster.Str == 7) {
        return -1;
    }
    if (newMonster.Str >= 8 && newMonster.Str <= 16) {
        return 0;
    }
    if (newMonster.Str == 17 ) {
        return 1;
    }
    if (newMonster.Str == 18 ) {
        return 2;
    }
    if (newMonster.Str == 19 ) {
        return 3;
    }
    if (newMonster.Str == 20 ) {
        return 4;
    }
}

//sets monster armor class based on dexterity stat number.
export function setacAdj() {
    if (newMonster.Dext == 1 || newMonster.Dext == 2) {
        return -5;
    }
    if (newMonster.Dext == 3) {
        return -4;
    }
    if (newMonster.Dext == 4) {
        return -3;
    }
    if (newMonster.Dext == 5) {
        return -2;
    }
    if (newMonster.Dext == 6) {
        return -1;
    }
    if (newMonster.Dext >= 7 && newMonster.Dext <= 14) {
        return 0;
    }
    if (newMonster.Dext == 15) {
        return 1;
    }
    if (newMonster.Dext == 16) {
        return 2;
    }
    if (newMonster.Dext == 17) {
        return 3;
    }
    if (newMonster.Dext == 18 || newMonster.Dext == 19) {
        return 4;
    }
    if (newMonster.Dext == 20) {
        return 5;
    }
}

//sets monster hitpoints based on constitution stat number.
export function SetConstAdj() {
    if (newMonster.Const == 1) {
        return -3;
    }
    if (newMonster.Const == 2 || newMonster.Const == 3) {
        return -2;
    }
    if (newMonster.Const >= 4 && newMonster.Const <= 6) {
        return -1;
    }
    if (newMonster.Const >= 7 && newMonster.Const <= 14) {
        return 0;
    }
    if (newMonster.Const == 15) {
        return 1;
    }
    if (newMonster.Const == 16) {
        return 2;
    }
    if (newMonster.Const == 17) {
        return 3;
    }
    if (newMonster.Const == 18) {
        return 4;
    }
    if (newMonster.Const == 19) {
        return 5;
    }
    if (newMonster.Const == 20) {
        return 6;
    }
} */


