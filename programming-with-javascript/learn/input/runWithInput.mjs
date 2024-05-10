import { log, show } from './helpers.mjs';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
let inputLines = []; // note: we could also simply re-use 'input'
let currentLine = 0;

process.stdin.on('data', function(in_str) {
    input += in_str;
});

process.stdin.on('end', function() {
    inputLines = input.split('\n');
    input = '';
    main();
});

function readLine() {
    return inputLines[currentLine++];
}

/*
  Pass in a function that will be run, and it provides a function for grabbing the next line of input..
*/
export function main(myMainProc) {

    // This cleans the data somewhat, removing extra spaces at the end of the line
    // example:
    // const inputData = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    myMainProc(readLine);
}