"use strict";

const fs = require("fs");
const path = require("path");
const { performance } = require("perf_hooks");

const INPUT = String(fs.readFileSync(path.join(__dirname, "input.txt")))
    .split(require("os").EOL)
    .map(Number);

const pStart = performance.now();
let current = 0;
let max = { first: 0, second: 0, third: 0 };

INPUT.forEach((e) => {
    if (e === 0) {
        if (current > max.first) {
            max.third = max.second;
            max.second = max.first;
            max.first = current;
        } else if (current < max.first && current > max.second) {
            max.third = max.second;
            max.second = current;
        } else if (current < max.second && current > max.third) {
            max.third = current;
        }
        current = 0;
    } else {
        current += e;
    }
});

const result = max.first + max.second + max.third;

const pEnd = performance.now();

console.log("Calories: " + result);
console.log(pEnd - pStart);
