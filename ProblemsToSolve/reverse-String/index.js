"use strict";
let str = "hello world";
const reverseString = (stringto) => {
    let newString = stringto.split("").reverse().join("");
    return newString;
};
console.log("Here is the string:", reverseString("hello ther now"));
