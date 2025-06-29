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
let increase = true;
let diff = 0;
let safe = true;

INPUT.forEach((line) => {
    safe = true;
    line.split(" ").forEach((element, idx, arr) => {
        if (idx < arr.length - 1) {
            diff = arr[idx + 1] - element;
            if (idx == 0 && diff > 0) {
                increase = true;
            } else if (idx == 0 && diff < 0) {
                increase = false;
            }

            if (
                ((increase && diff >= 1 && diff <= 3) ||
                    (!increase && diff <= -1 && diff >= -3)) &&
                safe
            ) {
                safe = true;
            } else {
                safe = false;
            }
        }
    });
    if (safe) {
        result++;
    }
});

const pEnd = performance.now();

console.log("<DESCRIPTION>: " + result);
console.log(pEnd - pStart);
