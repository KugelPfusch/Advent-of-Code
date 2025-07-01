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

let result: number = 0;

function findOccurences(data: string[]): number {
    let cnt: number = 0;
    for (let i: number = 0; i < data.length; i++) {
        for (let j: number = 0; j < data[i].length; j++) {
            if (
                data[i].charAt(j) == "X" &&
                data[i].charAt(j - 1) == "M" &&
                data[i].charAt(j - 2) == "A" &&
                data[i].charAt(j - 3) == "S"
            ) {
                cnt++;
            }
            if (
                data[i].charAt(j) == "X" &&
                data[i].charAt(j + 1) == "M" &&
                data[i].charAt(j + 2) == "A" &&
                data[i].charAt(j + 3) == "S"
            ) {
                cnt++;
            }
            if (
                data[i].charAt(j) == "X" &&
                data[i - 1]?.charAt(j) == "M" &&
                data[i - 2]?.charAt(j) == "A" &&
                data[i - 3]?.charAt(j) == "S"
            ) {
                cnt++;
            }
            if (
                data[i].charAt(j) == "X" &&
                data[i + 1]?.charAt(j) == "M" &&
                data[i + 2]?.charAt(j) == "A" &&
                data[i + 3]?.charAt(j) == "S"
            ) {
                cnt++;
            }
            if (
                data[i].charAt(j) == "X" &&
                data[i - 1]?.charAt(j - 1) == "M" &&
                data[i - 2]?.charAt(j - 2) == "A" &&
                data[i - 3]?.charAt(j - 3) == "S"
            ) {
                cnt++;
            }
            if (
                data[i].charAt(j) == "X" &&
                data[i - 1]?.charAt(j + 1) == "M" &&
                data[i - 2]?.charAt(j + 2) == "A" &&
                data[i - 3]?.charAt(j + 3) == "S"
            ) {
                cnt++;
            }
            if (
                data[i].charAt(j) == "X" &&
                data[i + 1]?.charAt(j - 1) == "M" &&
                data[i + 2]?.charAt(j - 2) == "A" &&
                data[i + 3]?.charAt(j - 3) == "S"
            ) {
                cnt++;
            }
            if (
                data[i].charAt(j) == "X" &&
                data[i + 1]?.charAt(j + 1) == "M" &&
                data[i + 2]?.charAt(j + 2) == "A" &&
                data[i + 3]?.charAt(j + 3) == "S"
            ) {
                cnt++;
            }
        }
    }
    return cnt;
}

result = findOccurences(INPUT);

const pEnd = performance.now();

console.log("<DESCRIPTION>: " + result);
console.log(pEnd - pStart);
