"use strict";

const { count } = require("console");
let fs = require("fs");
let path = require("path");
let { performance } = require("perf_hooks");

let contentArray = String(fs.readFileSync(path.join(__dirname, "input.txt"))).split(require("os").EOL).map(e => {
    let string = e.split("->");
    string = string.map(e => e.split(","));
    let obj = {
        xstart: Number(string[0][0]),
        ystart: Number(string[0][1]),
        xend:   Number(string[1][0]),
        yend:   Number(string[1][1])
    };
    
    return obj;
});

const pStart = performance.now();

function checkForCrossing(array) {

    let crossingArray = []; //Uses objects with x and y and sum
    let xvalstart;
    let yvalstart;
    let xvalend;
    let yvalend;
    let trader;
    let obj = 0;
    let loopCondition;

    for(let i = 0; i < array.length; i++) {

        xvalstart = array[i].xstart;
        yvalstart = array[i].ystart;
        xvalend = array[i].xend;
        yvalend = array[i].yend;

        

        if(xvalstart !== xvalend && yvalstart !== yvalend) {
            let val1 = xvalstart;
            let val2 = yvalstart;

            if(Math.abs(yvalstart - yvalend) == Math.abs(xvalstart - xvalend)){
                loopCondition = Math.abs(yvalstart - yvalend);
                for(let j = 0; j <= loopCondition; j++){
                    obj = crossingArray.find(e => e.x === val1 && e.y === val2);

                    if(obj !== undefined) {
                        obj.sum++;
                    } else {
                        crossingArray.push({x: val1,
                        y: val2,
                        sum: 1});
                    }
                    if(xvalstart > xvalend) {
                        val1--;
                    } else {
                        val1++;
                    }
                    if(yvalstart > yvalend) {
                        val2--;
                    } else {
                        val2++;
                    }
                }
            }
        } else if((xvalstart !== xvalend && yvalstart === yvalend) || (xvalstart === xvalend && yvalstart !== yvalend)){
                if(xvalstart > xvalend) {
                    trader = xvalstart;
                    xvalstart = xvalend;
                    xvalend = trader;
                }
        
                if(yvalstart > yvalend) {
                    trader = yvalstart;
                    yvalstart = yvalend;
                    yvalend = trader;
                }
                if(xvalstart !== xvalend && yvalstart === yvalend) {
        
                for(let j = xvalstart; j <= xvalend; j++) {
                    obj = crossingArray.find(e => e.x === j && e.y === yvalend);

                        if(obj !== undefined) {
                            obj.sum++;
                        } else {
                            crossingArray.push({x: j,
                            y: yvalend,
                            sum: 1});
                        }
                }
        
        } else if(xvalstart === xvalend && yvalstart !== yvalend) {

            for(let k = yvalstart; k <= yvalend; k++) {
                obj = crossingArray.find(e => e.x === xvalend && e.y === k);

                if(obj !== undefined) {
                    obj.sum++;
                } else {
                    crossingArray.push({x: xvalend,
                    y: k,
                    sum: 1});
                }
            }
        }
    
    }
}
return crossingArray.filter(e => e.sum > 1).length;
}

console.log(checkForCrossing(contentArray));


const pEnd = performance.now();

console.log(pEnd - pStart);