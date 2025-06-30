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

let result = 0;
let enabled = true;

// Match all instructions (`mul(...)`, `do()`, `don't()`) in order
const tokens = INPUT.match(/mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\)/g);

for (const token of tokens) {
    if (token === "do()") {
        enabled = true;
    } else if (token === "don't()") {
        enabled = false;
    } else if (enabled && token.startsWith("mul(")) {
        const [a, b] = token.match(/\d+/g).map(Number);
        result += a * b;
    }
}

const pEnd = performance.now();

console.log("Enabled Muls Sum: " + result);
console.log("Execution time (ms):", pEnd - pStart);
