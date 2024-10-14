import fs from "node:fs";
import path from "node:path";
import { performance } from "node:perf_hooks";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ========================= //
// = Copyright (c) NullDev = //
// ========================= //

const INPUT = String(fs.readFileSync(path.join(__dirname, "input.txt"))).trim().split("\n");
const stack = [];
const OC = ["([{<", ")]}>"];

const pStart = performance.now();

let RES = 0;

INPUT.forEach(line => line.split("").forEach(char => {
    if (OC[0].indexOf(char) !== -1) stack.push(char);
    else if (OC[1].indexOf(char) !== -1){
        if (OC[0].indexOf(stack.pop()) === OC[1].indexOf(char)) return;
        RES += ([3, 57, 1197, 25137])[OC[1].indexOf(char)];
    }
}));

const pEnd = performance.now();

console.log("SYNTAX ERROR SCORE: " + RES);
console.log(pEnd - pStart);
