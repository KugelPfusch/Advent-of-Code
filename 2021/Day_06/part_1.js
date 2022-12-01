"use strict";

const { count } = require("console");
let fs = require("fs");
let path = require("path");
let { performance } = require("perf_hooks");

let contentArray = String(fs.readFileSync(path.join(__dirname, "input.txt"))).split(",").map(e => Number(e));

const pStart = performance.now();

function checkLantern(fish) {

    let fishlength = 0;

    for(let day = 0; day < 80; day++) {
        fishlength = fish.length;
        for(let i = 0; i < fishlength; i++) {
            if(fish[i] === 0) {
                fish[i] = 6;
                fish.push(8);
            } else {
                fish[i]--;
            }
        }
    }

    return fish.length;
}

console.log(checkLantern(contentArray));

const pEnd = performance.now();

console.log(pEnd - pStart);