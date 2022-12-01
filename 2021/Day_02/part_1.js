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

function moveSubmarine(contentArray){
    let x = 0;
    let y = 0;
    for (let index = 0; index < contentArray.length; index++) {
        if(contentArray[index][0] === "forward") {
            x += contentArray[index][1];
        } else if(contentArray[index][0] === "down") {
            y += contentArray[index][1];
        } else if(contentArray[index][0] === "up") {
            y -= contentArray[index][1];
        }
    }
    return x*y;
}

console.log(moveSubmarine(contentArray));

const pEnd = performance.now();

console.log(pEnd-pStart);