"use strict";

const { count } = require("console");
let fs = require("fs");
let path = require("path");
let { performance } = require("perf_hooks");

let contentArray =String(fs.readFileSync(path.join(__dirname, "input.txt"))).split(require("os").EOL).map(e => {
    if(e.includes(",")){
        return e.split(",").map(e => Number(e));
    }
    e = e.split(" ");
    let resultArr = [];
    for (const iterator of e) {
        if(iterator !== "") resultArr.push(Number(iterator));
    }
    return resultArr;
});

const pStart = performance.now();

let array = [];
let helpArray = [];

let numb = contentArray[0];

for(let i = 2; i < contentArray.length; i++){

    if(contentArray[i].length !== 0) { 
        helpArray.push(contentArray[i]);
    } 
    if (contentArray[i].length === 0 || contentArray.length === i + 1 ) {
        array.push(helpArray); 
        helpArray = [];
    }
}





function playBingo(bingonumbers, arr){

    let boolArray = arr.map(e => e.map(e => e.map(e => false)));
    let value = 0;

    for(let i = 0; i < bingonumbers.length; i++){

        for(let j = 0; j < arr.length; j++){

            for(let k = 0; k < arr[j].length; k++){

                for(let l = 0; l < arr[j][k].length; l++){
                  
                    if(arr[j][k][l] === bingonumbers[i]){
                        boolArray[j][k][l] = true;
                        value = bingoSuccessfull(boolArray, arr);
                        if(value){
                            return value * bingonumbers[i];
                        }
                    }
                }
            }
        }

    }

}

function bingoSuccessfull(boolArray, arr){
    let valrow = 0;
    let valcol = 0;
    let countrow = 0;
    let countcolumn = 0;

    for(let i = 0; i < boolArray.length; i++) {

        for(let j = 0; j < boolArray[i].length; j++) {

            for(let k = 0; k < boolArray[i][j].length; k++){
                if(boolArray[i][j][k] && typeof countrow !== "boolean") countrow++;
                
                if(!boolArray[i][j][k]) valrow += arr[i][j][k];

                if(boolArray[i][k][j] && typeof countcolumn !== "boolean") countcolumn++;
                
                if(!boolArray[i][k][j]) valcol += arr[i][k][j];
            }

            if(countrow === boolArray[0][0].length || countrow === true) {
                countrow = true;
            } else if(countcolumn === boolArray[0][0].length || countcolumn === true) {
                countcolumn = true;
            } else {
                countcolumn = 0;
                countrow = 0;
            }
            
        }
        if(typeof countrow === "boolean" && countrow) {
            return valrow;
        } else if(typeof countcolumn === "boolean" && countcolumn) {
            return valcol;
        } else {
            valcol = 0;
            valrow = 0;
        }
        
    }
    return false;
}
console.log(playBingo(numb, array));


const pEnd = performance.now();

console.log(pEnd - pStart);