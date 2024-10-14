import fs from "node:fs";
import path from "node:path";
import { performance } from "node:perf_hooks";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ========================= //
// = Copyright (c) NullDev = //
// ========================= //

/* eslint-disable curly */

// @ts-ignore
const [ minX, maxX, minY, maxY ] = String(fs.readFileSync(path.join(__dirname, "input.txt")))
    .trim()
    .match(/target area: x=(-?\d+)\.\.(-?\d+), y=(-?\d+)..(-?\d+)/)
    ?.slice(1)
    .map(Number);

const pStart = performance.now();

let RES = 0;

for (let x = -maxX; x <= maxX; x++)
    for (let y = -maxX; y <= maxX; y++){
        const MAP = [x, y, 0, 0];
        while (MAP[2] <= maxX && MAP[3] >= minY){
            ((((MAP[2] += MAP[0]) || 1) && (MAP[3] += MAP[1]) && 0) || (((MAP[0] < 0) && MAP[0]++) || ((MAP[0] > 0) && MAP[0]--)) && 0) || MAP[1]--;
            if (MAP[2] <= maxX && MAP[2] >= minX && MAP[3] >= minY && MAP[3] <= maxY){
                RES++;
                break;
            }
        }
    }

const pEnd = performance.now();

console.log("DISTINCT VALUE COUNT: " + RES);
console.log(pEnd - pStart);
