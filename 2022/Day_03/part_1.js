"use strict";

const fs = require("fs");
const path = require("path");
const { performance } = require("perf_hooks");

const INPUT = String(fs.readFileSync(path.join(__dirname, "input.txt")))
    .split(/\r?\n/)
    .map((e) => {
        return [e.slice(0, e.length / 2), e.slice(e.length / 2)];
    });

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
INPUT.forEach((e) => {
    for (let f of e[0]) {
        for (let g of e[1]) {
            if (f == g) {
                priority += alphabet.indexOf(f) + 1;
                alreadyDone = true;
                break;
            }
        }
        if (alreadyDone) {
            break;
        }
    }
    alreadyDone = false;
});
/**
 * a 1
 * b 2
 * c 3
 * d 4
 * e 5
 * f 6
 * g 7
 * h 8
 * i 9
 * j 10
 * k 11
 * l 12
 * m 13
 * n 14
 * o 15
 * p 16
 * q 17
 * r 18
 * s 19
 * t 20
 * u 21
 * v 22
 * w 23
 * x 24
 * y 25
 * z 26
 */

//
// YOUR CODE HERE
//
const result = priority;

const pEnd = performance.now();

console.log("<DESCRIPTION>: " + result);
console.log(pEnd - pStart);
