"use strict";

const { count } = require("console");
let fs = require("fs");
const { get } = require("http");
let path = require("path");
let { performance } = require("perf_hooks");

let contentArray = String(fs.readFileSync(path.join(__dirname, "input.txt"))).split(",").map(Number);

const pStart = performance.now();

function getMinFuel(contentArray) {
    let avg = findAvg(contentArray);
    let res1 = 0;
    let res2 = 0;

    if(!Number.isInteger()) {
        
        res1 = getFuel(contentArray, Math.ceil(avg));
        res2 = getFuel(contentArray, Math.floor(avg))
        return res1 > res2 ? res2 : res1;
    }

    return getFuel(contentArray, avg);;
}

function getFuel(contentArray, avg) {
    let loopingCondition = 0;
    let fuel = 0;

    for(let i = 0; i < contentArray.length; i++) {
        loopingCondition = Math.abs(contentArray[i] - avg);
        for(let horizontalval = 1; horizontalval <= loopingCondition; horizontalval++) {
            fuel += horizontalval;
        }
    }
    return fuel;
}

function findAvg(contentArray) {
    let avg = 0;

    for(let i = 0; i < contentArray.length; i++) {
        avg += contentArray[i];
    }

    return avg / contentArray.length;
}


console.log(getMinFuel(contentArray));

const pEnd = performance.now();

console.log(pEnd - pStart);