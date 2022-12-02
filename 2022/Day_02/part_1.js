"use strict";

const fs = require("fs");
const path = require("path");
const { performance } = require("perf_hooks");

const INPUT = String(fs.readFileSync(path.join(__dirname, "input.txt")))
    .split(require("os").EOL)
    .map((s) => s.split(" "));

const pStart = performance.now();
let score = 0;

//A, X == ROCK
//B, Y == Paper
//C, Z == Scissors

INPUT.forEach((e) => {
    if (e[1] === "X") {
        score++;
    } else if (e[1] === "Y") {
        score += 2;
    } else if (e[1] === "Z") {
        score += 3;
    }

    if (
        (e[0] === "A" && e[1] === "X") ||
        (e[0] === "B" && e[1] === "Y") ||
        (e[0] === "C" && e[1] === "Z")
    ) {
        score += 3;
    } else if (
        (e[0] === "A" && e[1] === "Y") ||
        (e[0] === "B" && e[1] === "Z") ||
        (e[0] === "C" && e[1] === "X")
    ) {
        score += 6;
    }
});

const result = score;

const pEnd = performance.now();

console.log("Score: " + result);
console.log(pEnd - pStart);
