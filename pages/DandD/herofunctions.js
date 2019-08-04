


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
