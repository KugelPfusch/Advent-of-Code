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
                //MAS nach rechts unten und MAS nach links unten
                data[i]?.charAt(j) == "M" &&
                data[i + 1]?.charAt(j + 1) == "A" &&
                data[i + 2]?.charAt(j + 2) == "S" &&
                data[i]?.charAt(j + 2) == "M" &&
                data[i + 1]?.charAt(j + 1) == "A" &&
                data[i + 2]?.charAt(j + 0) == "S"
            ) {
                cnt++;
            }
            if (
                data[i]?.charAt(j) == "S" &&
                data[i + 1]?.charAt(j + 1) == "A" &&
                data[i + 2]?.charAt(j + 2) == "M" &&
                data[i]?.charAt(j + 2) == "S" &&
                data[i + 1]?.charAt(j + 1) == "A" &&
                data[i + 2]?.charAt(j + 0) == "M"
            ) {
                cnt++;
            }
            if (
                data[i]?.charAt(j) == "S" &&
                data[i + 1]?.charAt(j + 1) == "A" &&
                data[i + 2]?.charAt(j + 2) == "M" &&
                data[i]?.charAt(j + 2) == "M" &&
                data[i + 1]?.charAt(j + 1) == "A" &&
                data[i + 2]?.charAt(j + 0) == "S"
            ) {
                cnt++;
            }
            if (
                data[i]?.charAt(j) == "M" &&
                data[i + 1]?.charAt(j + 1) == "A" &&
                data[i + 2]?.charAt(j + 2) == "S" &&
                data[i]?.charAt(j + 2) == "S" &&
                data[i + 1]?.charAt(j + 1) == "A" &&
                data[i + 2]?.charAt(j + 0) == "M"
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
