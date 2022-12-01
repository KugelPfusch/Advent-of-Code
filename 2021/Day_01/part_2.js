"use strict";

let fs = require("fs");
let path = require("path");
let { performance } = require("perf_hooks");

let contentArray = String(fs.readFileSync(path.join(__dirname, "input.txt"))).split(require("os").EOL).map(Number);

const pStart = performance.now();

function countIncrease(contentArray) {

    let cnt = 0;
    let value = 0;
    let resultArr = [];
    let i = 0;


    while((i+3) <= contentArray.length){
        resultArr.push(contentArray[i] + contentArray[i+1] + contentArray[i+2]);
        i++;
    }

    value = resultArr[0];
    for(let i = 1; i < resultArr.length; i++){
        if (resultArr[i] > value){
            cnt++;
        }
        value = resultArr[i];
    }

    return cnt;
}

console.log(countIncrease(contentArray));

const pEnd = performance.now();

console.log(pEnd - pStart);
