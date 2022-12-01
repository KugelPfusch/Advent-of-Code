"use strict";

const fs = require("fs");
const path = require("path");
const { performance } = require("perf_hooks");

const INPUT = String(fs.readFileSync(path.join(__dirname, "input.txt")))
    .split(require("os").EOL)
    .map(Number);

const pStart = performance.now();
let current = 0;
let max = 0;

INPUT.forEach((e) => {
    if (e === 0) {
        if (current > max) {
            max = current;
        }
        current = 0;
    } else {
        current += e;
    }
});

const result = max;

const pEnd = performance.now();

console.log("Calories " + result);
console.log(pEnd - pStart);
