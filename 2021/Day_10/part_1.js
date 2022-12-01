"use strict";

let fs = require("fs");
let path = require("path");
let { performance } = require("perf_hooks");

let contentArray = String(fs.readFileSync(path.join(__dirname, "input.txt"))).split(require("os").EOL).map(e => e.split(""));

let pStart = performance.now();

function filterSyntaxError(contentArray) {

    let syntaxerrorvalue = 0;
    let char = "";
    let bracketarr = [];

    for (let i = 0; i < contentArray.length; i++) {

        for (let j = 0; j < contentArray[i].length; j++) {
            char = contentArray[i][j];
            switch(char) {
                case "(":
                    bracketarr.push("(");
                    break;
                case ")":
                    if(bracketarr[bracketarr.length - 1 ] !== "(") {
                        syntaxerrorvalue += errorval(char);
                        j = contentArray[i].length;
                    } else {
                        bracketarr.splice(bracketarr.length - 1, 1);
                    }
                    break;
                case "<":
                    bracketarr.push("<");
                    break;
                case ">":
                    if(bracketarr[bracketarr.length - 1] !== "<") {
                        syntaxerrorvalue += errorval(char);
                        j = contentArray[i].length;
                    } else {
                        bracketarr.splice(bracketarr.length - 1, 1);
                    }
                    break;
                case "[":
                    bracketarr.push("[");
                    break;
                case "]":
                    if(bracketarr[bracketarr.length - 1] !== "[") {
                        syntaxerrorvalue += errorval(char);
                        j = contentArray[i].length;
                    } else {
                        bracketarr.splice(bracketarr.length - 1, 1);
                    }
                    break;
                case "{":
                    bracketarr.push("{");
                    break;
                case "}":
                    if(bracketarr[bracketarr.length - 1] !== "{") {
                        syntaxerrorvalue += errorval(char);
                        j = contentArray[i].length;
                    } else {
                        bracketarr.splice(bracketarr.length - 1, 1);
                    }
                    break;
            }
        }
        bracketarr = [];
    }


    return syntaxerrorvalue;
}

function errorval(char) {
    switch(char) {
        case ")":
            return 3;
        case ">":
            return 25137;
        case "]":
            return 57;
        case "}":
           return 1197;
        default:
            break;
    }
}

console.log(filterSyntaxError(contentArray));


let pEnd = performance.now();

console.log(pEnd - pStart);

/*
()
{}
<>
[]
*/