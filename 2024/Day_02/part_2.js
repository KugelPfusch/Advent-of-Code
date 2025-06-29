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
let result = 0;

function isSafe(report) {
    if (report.length < 2) return true;
    const diffs = [];
    for (let i = 0; i < report.length - 1; i++) {
        const diff = report[i + 1] - report[i];
        if (diff === 0 || Math.abs(diff) > 3) return false;
        diffs.push(diff);
    }

    const allIncreasing = diffs.every((d) => d > 0);
    const allDecreasing = diffs.every((d) => d < 0);

    return allIncreasing || allDecreasing;
}

INPUT.forEach((line) => {
    const numbers = line.split(" ").map(Number);

    if (isSafe(numbers)) {
        result++;
        return;
    }

    // Try removing one element at a time (Problem Dampener)
    let canBeSafe = false;
    for (let i = 0; i < numbers.length; i++) {
        const shortened = numbers.slice(0, i).concat(numbers.slice(i + 1));
        if (isSafe(shortened)) {
            canBeSafe = true;
            break;
        }
    }

    if (canBeSafe) result++;
});
const pEnd = performance.now();

console.log("<DESCRIPTION>: " + result);
console.log(pEnd - pStart);
