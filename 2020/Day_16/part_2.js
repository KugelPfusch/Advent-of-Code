import fs from "node:fs";
import path from "node:path";
import { performance } from "node:perf_hooks";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ========================= //
// = Copyright (c) NullDev = //
// ========================= //

const CONTENT_READ = String(fs.readFileSync(path.join(__dirname, "input.txt"))).split(/\n{2,}/);

const pStart = performance.now();

let RES = 1;

let fields = CONTENT_READ[0].split("\n").map(field => { // @ts-ignore
    const [ , name, ...other ] = /(.*): (\d+)-(\d+) or (\d+)-(\d+)/.exec(field);
    return [ name.trim(), ...other.map(Number) ];
});

const own = CONTENT_READ[1].split("\n").slice(1).map(l => l.split(","))[0];

const cols = Array.from({ length: own.length }).map((_, i) => [
    i,
    CONTENT_READ[2]
        .split("\n")
        .slice(1)
        .map(l => l.split(",").map(Number))
        .filter(t => t.every(n => fields.some(([, row1Min, row1Max, row2Min, row2Max]) =>
            (n >= row1Min && n <= row1Max) || (n >= row2Min && n <= row2Max),
        ))).map(n => n[i]),
]);

// Could be recursive but cant be bothered ^-^
while (cols.length){ // @ts-ignore
    const [ col, nums ] = cols.shift();
    // @ts-ignore
    const matches = fields.filter(([, row1Min, row1Max, row2Min, row2Max]) => nums.every(n =>
        (n >= row1Min && n <= row1Max) || (n >= row2Min && n <= row2Max),
    ));

    (matches.length === 1) // @ts-ignore
        ? (fields = fields.filter(([n]) => n !== matches[0][0])) && (/departure/.test(matches[0][0])) && (RES *= Number(own[col]))
        : cols.push([col, nums]);
}

const pEnd = performance.now();

console.log("PRODUCT OF VALUES: " + RES);
console.log(pEnd - pStart);
