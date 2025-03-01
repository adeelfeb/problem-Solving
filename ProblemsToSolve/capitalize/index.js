"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const capitalize = (array) => {
    return array.map((value) => {
        return value.charAt(0).toUpperCase() + value.slice(1).toLocaleLowerCase();
    });
};
const arryaTocheck = ["here", "there", "Now", "thEn"];
console.log(`${capitalize(arryaTocheck)}`);
