import { log, show } from './helpers.mjs';

export function tests() {
    log('to-do: run tests');
    test1();
}

function test1() {
    let arr1 = [1, 3, 5, 7, 9]; // given in problem description
    let [min, max] = getMinMaxOf(arr1);
    const e_min = 16, e_max = 24;
    if (min != e_min) {
        log(`ERROR: minimum is not correct. expected: ${e_min}, got: ${min}`);
    }
    if (max != e_max) {
        log(`ERROR: maximum is not correct. expected: ${e_max}, got: ${max}`);
    }
}

// fail first!
export function getMinMaxOf(arr) {
    // NOTE: Problem spec currently expects only 5 values, and we include the sum of 4 of them in the answer
    //  so there's an easy way to compute this without even tracking which elements are min and max,
    //  or sorting (maybe not the worst idea)
    return 5; // this better fail! we're expecting two elements back
}