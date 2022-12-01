"use strict";

let fs = require("fs");
let path = require("path");
let { performance } = require("perf_hooks");

let contentArray = String(fs.readFileSync(path.join(__dirname, "input.txt"))).split(require("os").EOL).map(e => { 
    e = e.split(" | ");
    e = e[1].split(" ");
    return e;
});

let pStart = performance.now();


function getDigits(contentArray) {
    let val = 0;
    for (let index = 0; index < contentArray.length; index++) {
        val += contentArray[index].filter(e => e.length === 2 || e.length === 4 || e.length === 3 || e.length === 7).length;
    }
    return val;
}

console.log(getDigits(contentArray));

let pEnd = performance.now();

console.log(pEnd - pStart);
