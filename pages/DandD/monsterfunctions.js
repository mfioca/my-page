import { newMonster } from './monster';

//sets hero hit adjustment based on strength stat number.
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

//sets hero damage adjustment based on strength stat number.
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

//sets hero armor class based on dexterity stat number.
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

//sets hero hitpoints based on constitution stat number.
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
}


