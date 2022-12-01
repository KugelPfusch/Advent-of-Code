"use strict";

let fs = require("fs");
let path = require("path");
let { performance } = require("perf_hooks");

let contentArray = String(fs.readFileSync(path.join(__dirname, "input.txt"))).split(require("os").EOL).map(e => {
    let splitter;

    splitter = e.split(" ");
    splitter[1] = Number(splitter[1]);
    return splitter;
});

const pStart = performance.now();

function moveSubmarine(resultArray){
    let x = 0;
    let aim = 0;
    let y = 0;
    for (let index = 0; index < resultArray.length; index++) {
        if(resultArray[index][0] === "forward") {
            x += resultArray[index][1];
            y += aim * resultArray[index][1];
        } else if(resultArray[index][0] === "down") {
            aim += resultArray[index][1];
        } else if(resultArray[index][0] === "up"){
            aim -= resultArray[index][1];
        }
    }
    return x * y;
}

console.log(moveSubmarine(contentArray));

const pEnd = performance.now();

console.log(pEnd - pStart);
