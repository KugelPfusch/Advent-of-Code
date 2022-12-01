"use strict";

const { count } = require("console");
let fs = require("fs");
let path = require("path");
let { performance } = require("perf_hooks");

let contentArray = String(fs.readFileSync(path.join(__dirname, "input.txt"))).split(",").map(Number);

const pStart = performance.now();

function getMinFuel(contentArray) {
    let val = findMedian(contentArray);
    let result = 0;
    for(let i = 0; i < contentArray.length; i++) {
        result += Math.abs(contentArray[i] - val);
    }
    return result;
}

function findMedian(contentArray) {
    contentArray = contentArray.sort((a, b) => a - b);

    let middle = Math.floor(contentArray.length / 2);
    contentArray = [...contentArray].sort((a, b) => a - b);
    return contentArray.length % 2 !== 0 ? contentArray[middle] : (contentArray[middle - 1] + contentArray[middle]) / 2;
}


console.log(getMinFuel(contentArray));

const pEnd = performance.now();

console.log(pEnd - pStart);