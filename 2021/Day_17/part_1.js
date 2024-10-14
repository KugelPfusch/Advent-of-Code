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

// (-x - 1) * (-x) / 2
// is equal to
// ((1 / 8) * (((2 * x) + 1) ** 2)) - (1 / 8)
// thus factorizing x, leaving us with a one-liner

// @ts-ignore
const RES = ((1 / 8) * (((2 * INPUT.match(/target area: x=(-?\d+)\.\.(-?\d+), y=(-?\d+)..(-?\d+)/).slice(1).map(Number)[2]) + 1) ** 2)) - (1 / 8);

const pEnd = performance.now();

console.log("HIGHEST Y POSITION: " + RES);
console.log(pEnd - pStart);
