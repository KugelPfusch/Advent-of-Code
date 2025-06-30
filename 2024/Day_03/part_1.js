import fs from "node:fs";
import path from "node:path";
import { performance } from "node:perf_hooks";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ========================= //
// = Copyright (c) NullDev = //
// ========================= //

const INPUT = String(fs.readFileSync(path.join(__dirname, "input.txt"))).trim();

const pStart = performance.now();

let first,
    second = 0;
let result = 0;

INPUT.match(/mul\([0-9]{1,3},[0-9]{1,3}\)/g).forEach((element) => {
    [first, second] = element.match(/[0-9]{1,3}/g);
    result += first * second;
});

const pEnd = performance.now();

console.log("<DESCRIPTION>: " + result);
console.log(pEnd - pStart);
