"use strict";

const fs = require("fs");
const path = require("path");
const { performance } = require("perf_hooks");

const INPUT = String(fs.readFileSync(path.join(__dirname, "input.txt")))
    .split(/\r?\n/)
    .map(String);

const pStart = performance.now();
let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];
let priority = 0;
let alreadyDone = false;
for (let index = 0; index < INPUT.length; index += 3) {
    for (let s1 of INPUT[index]) {
        for (let s2 of INPUT[index + 1]) {
            if (s1 == s2) {
                //To avoid useless iterations
                for (let s3 of INPUT[index + 2]) {
                    if (s2 == s3) {
                        priority += alphabet.indexOf(s2) + 1;
                        alreadyDone = true;
                        break;
                    }
                }
            }
            if (alreadyDone) break;
        }
        if (alreadyDone) break;
    }
    alreadyDone = false;
}
const result = priority;

const pEnd = performance.now();

console.log("<DESCRIPTION>: " + result);
console.log(pEnd - pStart);
