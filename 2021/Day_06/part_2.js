"use strict";

const { count } = require("console");
let fs = require("fs");
let path = require("path");
let { performance } = require("perf_hooks");

let contentArray = String(fs.readFileSync(path.join(__dirname, "input.txt"))).split(",").map(e => Number(e));

let obj = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0};
for(let i = 0; i < contentArray.length; i++) {
    obj[contentArray[i]]++;
}

const pStart = performance.now();

function checkLantern(fishobj) {

    let zerofish = 0;
    for(let day = 0; day < 256; day++) {
        zerofish = fishobj[0];
        for(let fish = 0; fish < 8; fish++) {
            fishobj[fish] = fishobj[fish+1];
        }
        fishobj[6] += zerofish;
        fishobj[8] = zerofish;
    }

    let val = 0;

    for(let key in fishobj) {
        val += fishobj[key];
    }
    return val;
}

console.log(checkLantern(obj));

const pEnd = performance.now();

console.log(pEnd - pStart);
