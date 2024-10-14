import fs from "node:fs";
import path from "node:path";
import { performance } from "node:perf_hooks";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ========================= //
// = Copyright (c) NullDev = //
// ========================= //

const INPUT = [];
INPUT[0] = String(fs.readFileSync(path.join(__dirname, "input.txt")))
    .trim()
    .split("\n")
    .flatMap(l => l.split(/\D+/).slice(-1).map(a => Number(a[0])));
INPUT[1] = 0;

const pStart = performance.now();

const solve = ( // @ts-ignore
    p, cp, np, cs = 0, ns = 0, rp = ((cp + Array(3).fill().map(() => (INPUT[1]++ % 100) + 1).reduce((a, b) => a + b) - 1) % 10) + 1, rs = cs + rp,
) => rs < 1000 ? solve(1 - p, np, rp, ns, rs) : ns * INPUT[1];

const RES = solve(0, ...INPUT[0]);

const pEnd = performance.now();

console.log("PRODUCT OF LOSING SCORE AND DIE ROLLS: " + RES);
console.log(pEnd - pStart);
