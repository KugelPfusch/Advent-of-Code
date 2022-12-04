"use strict";

const fs = require("fs");
const path = require("path");
const { performance } = require("perf_hooks");

const INPUT = String(fs.readFileSync(path.join(__dirname, "input.txt")))
    .split(/\r?\n/)
    .map((e) => {
        return e.split(",").map((e) => {
            return e.split("-").map(Number);
        }, 0);
    });
INPUT.splice(INPUT.length - 1, 1);

const pStart = performance.now();

const result = INPUT.reduce(
    (acc, e) =>
        (e[0][0] >= e[1][0] && e[0][1] <= e[1][1]) ||
        (e[0][0] <= e[1][0] && e[0][1] >= e[1][1]) ||
        (e[0][0] <= e[1][0] && e[0][1] >= e[1][0] && e[0][1] <= e[1][1]) ||
        (e[0][0] <= e[1][1] && e[0][0] >= e[1][0] && e[0][1] >= e[1][1])
            ? acc + 1
            : acc + 0,
    0
);

const pEnd = performance.now();

console.log("Pairs: " + result);
console.log(pEnd - pStart);
