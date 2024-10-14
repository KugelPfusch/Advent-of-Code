import fs from "node:fs";
import path from "node:path";
import { performance } from "node:perf_hooks";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ========================= //
// = Copyright (c) NullDev = //
// ========================= //

const [INPUT, OPS] = String(fs.readFileSync(path.join(__dirname, "input.txt"))).trim().split("\n\n");
const OPERATIONS = [{}, [ INPUT.charAt(0), INPUT.charAt(INPUT.length - 1) ]];
OPS.split("\n").forEach(inst => (OPERATIONS[0][inst.split(" -> ")[0]] = inst.split(" -> ")[1]));

const pStart = performance.now();

const inPlaceInsert = (o, k, v = 1) => (o[k] = (k in o) ? o[k] + v : v);

let vals = {};
for (let i = 0; i < INPUT.length - 1; i++) inPlaceInsert(vals, INPUT.charAt(i) + INPUT.charAt(i + 1), 1);

for (let i = 0, result = {}; i < 40; i++, result = {}){
    for (const val in vals) inPlaceInsert(result, val[0] + OPERATIONS[0][val], vals[val]) && inPlaceInsert(result, OPERATIONS[0][val] + val[1], vals[val]);
    vals = result;
}

const resVals = {};
for (const e of Object.entries(vals)) inPlaceInsert(resVals, e[0].charAt(0), e[1]) && inPlaceInsert(resVals, e[0].charAt(1), e[1]);
resVals[OPERATIONS[1][0]]++ && resVals[OPERATIONS[1][1]]++;

const S = Object.entries(resVals).sort((a, b) => b[1] - a[1]);
const RES = (S[0][1] / 2) - (S[S.length - 1][1] / 2);

const pEnd = performance.now();

console.log("DIFFERENCE BETWEEN QUANTITY OF MOST COMMON AND LEAST COMMON ELEMENT (40 STEPS): " + RES);
console.log(pEnd - pStart);
