"use strict";

const fs = require("fs");
const path = require("path");
const { performance } = require("perf_hooks");

const INPUT = String(fs.readFileSync(path.join(__dirname, "input.txt")))
    .split(require("os").EOL)
    .map((s) => s.split(" "));

const pStart = performance.now();
let score = 0;

//A, X == ROCK 1
//B, Y == Paper 2
//C, Z == Scissors 3

INPUT.forEach((e) => {
    if (e[1] === "X") {
        if (e[0] === "A") {
            score += 3;
        } else if (e[0] === "B") {
            score++;
        } else if (e[0] === "C") {
            score += 2;
        }
    } else if (e[1] === "Y") {
        score += 3;
        if (e[0] === "A") {
            score++;
        } else if (e[0] === "B") {
            score += 2;
        } else if (e[0] === "C") {
            score += 3;
        }
    } else if (e[1] === "Z") {
        score += 6;
        if (e[0] === "A") {
            score += 2;
        } else if (e[0] === "B") {
            score += 3;
        } else if (e[0] === "C") {
            score += 1;
        }
    }
});

const result = score;

const pEnd = performance.now();

console.log("Score: " + result);
console.log(pEnd - pStart);
