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
    let oxygenrating = contentArray.map(e => e);
    let len = oxygenrating[0].length;
    let cotworating = contentArray.map(e => e);
    let bitcriteria;
    let index = 0;

    while(index < len && oxygenrating.length > 1) {

        for (let i = 0; i < oxygenrating.length; i++) {
            if(oxygenrating[i][index] === 1){
                one++;
            } else {
                zero++;
            }
        }

        if(one > zero) {
            bitcriteria = 1
        } else if( zero > one){
            bitcriteria = 0;
        } else {
            bitcriteria = 1;
        }

        oxygenrating = oxygenrating.filter(e => e[index] === bitcriteria);

        one = 0;
        zero = 0;
        index++;
    }

    len = cotworating[0].length;
    index = 0;
    while(index < len && cotworating.length > 1){
        for (let i = 0; i < cotworating.length; i++) {
            if(cotworating[i][index] === 1){
                one++;
            } else {
                zero++;
            }
        }

        if(one < zero) {
            bitcriteria = 1
        } else if( zero < one){
            bitcriteria = 0;
        } else {
            bitcriteria = 0;
        }

        cotworating = cotworating.filter(e => e[index] === bitcriteria);

        one = 0;
        zero = 0;
        index++;
    }

    oxygenrating = parseInt(oxygenrating[0].join(""),2);
    cotworating = parseInt(cotworating[0].join(""),2);

    return oxygenrating * cotworating;
}

console.log(powerConsumption(contentArray));

const pEnd = performance.now();

console.log(pEnd - pStart);
