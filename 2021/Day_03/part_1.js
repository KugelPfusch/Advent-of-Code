"use strict";

let fs = require("fs");
let path = require("path");
let { performance } = require("perf_hooks");

let contentArray = String(fs.readFileSync(path.join(__dirname, "input.txt"))).split(require("os").EOL).map(e => {
    let arr = [];
    for(let i = 0; i < e.length; i++){
        arr.push(Number(e.charAt(i)));
    }
    return arr;
});

const pStart = performance.now();

function powerConsumption(contentArray) {

    let one = 0;
    let zero = 0;
    let string = "";
    let gammarate = "";
    let epsilonrate = "";
    let len = contentArray[0].length;

    for (let index = 0; index < len; index++) {

        for (let i = 0; i < contentArray.length; i++) {
            if(contentArray[i][index] === 1){
                one++;
            } else {
                zero++;
            }
        }

        if(one > zero){
            gammarate += "1";
            epsilonrate += "0";
        } else {
            gammarate += "0";
            epsilonrate += "1";
        }
        one = 0;
        zero = 0;
    }

    gammarate = parseInt(gammarate, 2);
    epsilonrate = parseInt(epsilonrate, 2);

    return gammarate * epsilonrate;
}

console.log(powerConsumption(contentArray));

const pEnd = performance.now();

console.log(pEnd - pStart);