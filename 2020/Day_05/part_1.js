import fs from "node:fs";
import path from "node:path";
import { performance } from "node:perf_hooks";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ========================= //
// = Copyright (c) NullDev = //
// ========================= //

const CONTENT_READ = String(fs.readFileSync(path.join(__dirname, "input.txt")));

const pStart = performance.now();

const IDS = [];

/**
 * Decode the binary space partitioning string
 *
 * @param {String} str - current array element
 * @param {String} lo - low value; either F (front for row) or L (left for column)
 * @returns {Number} offset
 */
const decode = function(str, lo){
    const len = str.length;
    let value = 2 ** len - 1;
    for (let i = 0; i < len; i++) (str[i] === lo) && (value -= 2 ** (len - 1 - i));
    return value;
};

CONTENT_READ.split("\n").filter(e => !!e).forEach(e => {
    const rowCode = e.substring(0, 7);
    const colCode = e.substring(7, 10);

    const row = decode(rowCode, "F");
    const col = decode(colCode, "L");

    IDS.push(row * 8 + col);
});

const res = Math.max(...IDS);

const pEnd = performance.now();

console.log("HIGHEST SEAT ID: " + res);
console.log(pEnd - pStart);
