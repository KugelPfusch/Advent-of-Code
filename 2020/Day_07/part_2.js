import fs from "node:fs";
import path from "node:path";
import { performance } from "node:perf_hooks";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ========================= //
// = Copyright (c) NullDev = //
// ========================= //

const CONTENT_READ = String(fs.readFileSync(path.join(__dirname, "input.txt"))).split("\n");

const pStart = performance.now();

let TOTAL = -1;

/**
 * Recursive function to count possible bags
 *
 * @param {Array} bags
 * @param {String} bag
 * @param {Number} quantifier
 * @returns {Number} count
 */
const countBags = (bags, bag, quantifier) => {
    const line = bags.find(row => row.indexOf(`${bag} bags contain `) === 0);
    TOTAL += quantifier;
    if (!line.includes("no other bags")){
        const bagLines = line.replace(`${bag} bags contain `, "").replace(".", "").split(", ");
        bagLines.forEach(bagLine => {
            const [ amount, adjective, color ] = bagLine.split(" ");
            countBags(bags, `${adjective} ${color}`, quantifier * Number(amount));
        });
    }
    return TOTAL;
};

const RES = countBags(CONTENT_READ, "shiny gold", 1);

const pEnd = performance.now();

console.log("REQUIRED BAG COUNT: " + RES);
console.log(pEnd - pStart);
