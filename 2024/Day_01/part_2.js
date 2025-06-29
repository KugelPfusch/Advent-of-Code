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
let cnt = 0;

INPUT.forEach((line, idx) => {
    [left[idx], right[idx]] = line.split("   ");
});

left.forEach((element) => {
    cnt = right.filter((value) => value == element).length;
    res += element * cnt;
});

const result = res;

const pEnd = performance.now();

console.log("<DESCRIPTION>: " + result);
console.log(pEnd - pStart);
