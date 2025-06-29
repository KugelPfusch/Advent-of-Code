import fs from "node:fs";
import path from "node:path";
import { performance } from "node:perf_hooks";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ========================= //
// = Copyright (c) NullDev = //
// ========================= //

const INPUT = String(fs.readFileSync(path.join(__dirname, "input.txt")))
    .trim()
    .split("\n");

const pStart = performance.now();

let left = [];
let right = [];
let res = 0;

INPUT.forEach((line, idx) => {
    [left[idx], right[idx]] = line.split("   ");
});

left = left.sort((a, b) => a - b);
right = right.sort((a, b) => a - b);

left.forEach((element, idx) => {
    if (left[idx] > right[idx]) {
        res += left[idx] - right[idx];
    } else {
        res += right[idx] - left[idx];
    }
});

const result = res;

const pEnd = performance.now();

console.log("<DESCRIPTION>: " + result);
console.log(pEnd - pStart);
