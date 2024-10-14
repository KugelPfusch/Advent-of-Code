import fs from "node:fs";
import path from "node:path";
import { performance } from "node:perf_hooks";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ========================= //
// = Copyright (c) NullDev = //
// ========================= //

const INPUT = [
    String(fs.readFileSync(path.join(__dirname, "input.txt"))).split("\n").filter(e => !!e),
    [], [], [],
];

const pStart = performance.now(); // @ts-ignore

for (let i = 0; i < INPUT[0].length; i += 18) INPUT[1].push([4, 5, 15].map(j => Number(INPUT[0][i + j].split(" ")[2])));

for (const [i, [a, b, c]] of Object.entries(INPUT[1])){ // @ts-ignore
    if (Number(a) === 1) INPUT[2].push([i, c]);
    else { // @ts-ignore
        const [prevI, prevC] = INPUT[2].pop(); // @ts-ignore
        (INPUT[3][prevI] = Math.max(1, 1 - Number(Number(prevC) + b))) && (INPUT[3][i] = Number(INPUT[3][prevI]) + Number(Number(prevC) + b));
    }
}
const RES = INPUT[3].join("");

const pEnd = performance.now();

console.log("SMALLEST MODEL NUMBER: " + RES);
console.log(pEnd - pStart);
