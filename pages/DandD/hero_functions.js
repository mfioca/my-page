import { newHero } from './hero'


//sets hero hitpoints based on constitution stat number.
export function SetConstAdj() {
    if (newHero.Const == 1) {
        return -3;
    }
    if (newHero.Const == 2 || newHero.Const == 3) {
        return -2;
    }
    if (newHero.Const >= 4 && newHero.Const <= 6) {
        return -1;
    }
    if (newHero.Const >= 7 && newHero.Const <= 14) {
        return 0;
    }
    if (newHero.Const == 15) {
        return 1;
    }
    if (newHero.Const == 16) {
        return 2;
    }
    if (newHero.Const == 17) {
        return 3;
    }
    if (newHero.Const == 18) {
        return 4;
    }
    if (newHero.Const == 19) {
        return 5;
    }
    if (newHero.Const == 20) {
        return 6;
    }
}

//sets hero hit adjustment based on strength stat number.
export function setHitAdj() {
    if (newHero.Str == 1) {
        return -4;
    }
    if (newHero.Str == 2 || newHero.Str == 3) {
        return -3;
    }
    if (newHero.Str == 4 || newHero.Str == 5) {
        return -2;
    }
    if (newHero.Str == 6 || newHero.Str == 7) {
        return -1;
    }
    if (newHero.Str >= 8 && newHero.Str <= 16) {
        return 0;
    }
    if (newHero.Str == 17 ) {
        return 1;
    }
    if (newHero.Str == 18 ) {
        return 2;
    }
    if (newHero.Str == 19 ) {
        return 3;
    }
    if (newHero.Str == 20 ) {
        return 4;
    }
}

//sets hero damage adjustment based on strength stat number.
export function setDmgAdj() {
    if (newHero.Str == 1) {
        return -4;
    }
    if (newHero.Str == 2 || newHero.Str == 3) {
        return -3;
    }
    if (newHero.Str == 4 || newHero.Str == 5) {
        return -2;
    }
    if (newHero.Str == 6 || newHero.Str == 7) {
        return -1;
    }
    if (newHero.Str >= 8 && newHero.Str <= 16) {
        return 0;
    }
    if (newHero.Str == 17 ) {
        return 1;
    }
    if (newHero.Str == 18 ) {
        return 2;
    }
    if (newHero.Str == 19 ) {
        return 3;
    }
    if (newHero.Str == 20 ) {
        return 4;
    }
}

//sets hero armor class based on dexterity stat number.
export function setacAdj() {
    if (newHero.Dext == 1 || newHero.Dext == 2) {
        return -5;
    }
    if (newHero.Dext == 3) {
        return -4;
    }
    if (newHero.Dext == 4) {
        return -3;
    }
    if (newHero.Dext == 5) {
        return -2;
    }
    if (newHero.Dext == 6) {
        return -1;
    }
    if (newHero.Dext >= 7 && newHero.Dext <= 14) {
        return 0;
    }
    if (newHero.Dext == 15) {
        return 1;
    }
    if (newHero.Dext == 16) {
        return 2;
    }
    if (newHero.Dext == 17) {
        return 3;
    }
    if (newHero.Dext == 18 || newHero.Dext == 19) {
        return 4;
    }
    if (newHero.Dext == 20) {
        return 5;
    }
}



