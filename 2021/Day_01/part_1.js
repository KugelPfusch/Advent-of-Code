"use strict";

let fs = require("fs");
let path = require("path");
let { performance } = require("perf_hooks");

let contentArray = String(fs.readFileSync(path.join(__dirname, "input.txt"))).split(require("os").EOL).map(Number);

const pStart = performance.now();

function countIncrease(contentArray) {

    let cnt = 0;
    let value = contentArray[0];

    for(let i = 1; i < contentArray.length; i++ ){
        if(value < contentArray[i]){
            cnt++;
        }
        value = contentArray[i];
    }

    return cnt;
}

console.log(countIncrease(contentArray));

const pEnd = performance.now();

console.log(pEnd - pStart);
