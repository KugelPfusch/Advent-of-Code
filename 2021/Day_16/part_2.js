import fs from "node:fs";
import path from "node:path";
import { performance } from "node:perf_hooks";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ========================= //
// = Copyright (c) NullDev = //
// ========================= //

// Yea yea I know. It's sh*tcode... Thus, eslint-disable go brrr
/* eslint-disable no-param-reassign, default-case, no-use-before-define, no-unused-vars, consistent-return  */

const INPUT = String(fs.readFileSync(path.join(__dirname, "input.txt"))).trim();

const pStart = performance.now();

const STORE = [0, "", 0];

const parser = function(amount){
    STORE[2] += amount; // @ts-ignore
    while (STORE[1].length < amount) STORE[1] = STORE[1] + parseInt(INPUT[STORE[0]++], 16).toString(2).padStart(4, "0"); // @ts-ignore
    const bite = STORE[1].slice(0, amount); // @ts-ignore
    STORE[1] = STORE[1].slice(amount);
    return bite;
};

const literal = function(stop = false, message = ""){
    while (!stop) ((stop = parser(1) === "0") || 1) && (message += parser(4));
    return parseInt(message, 2);
};

const operator = function(){
    const tmp = [];
    if (parser(1) === "0"){
        const len = parseInt(parser(15), 2); // @ts-ignore
        const res = STORE[2] + len;
        while (STORE[2] < res) tmp.push(solver());
    }
    else {
        const count = parseInt(parser(11), 2);
        for (let i = 0; i < count; i++) tmp.push(solver());
    }

    return tmp;
};

function solver(_ = parser(3)){
    switch (parseInt(parser(3), 2)){
        case 0: return operator().reduce((p, c) => p + c, 0);
        case 1: return operator().reduce((p, c) => p * c, 1);
        case 2: return operator().reduce((p, c) => p < c ? p : c, Infinity);
        case 3: return operator().reduce((p, c) => p > c ? p : c, -Infinity);
        case 4: return literal();
        case 5: return operator().reduce((p, c) => p > c ? 1 : 0);
        case 6: return operator().reduce((p, c) => p < c ? 1 : 0);
        case 7: return operator().reduce((p, c) => p === c ? 1 : 0);
    }
}
const RES = solver();

const pEnd = performance.now();

console.log("EVALUATION: " + RES);
console.log(pEnd - pStart);
