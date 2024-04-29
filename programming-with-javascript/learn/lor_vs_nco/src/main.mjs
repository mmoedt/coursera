import { log } from './helpers.mjs';

const emptyStr = '';
const zero = 0;
const falseVal = false;
const nullVal = null;
const undefVal = undefined;

function show(expr) {
    log(`The value of '${expr}' is '${JSON.stringify(eval(expr))}'.`);
}

// show('zero');
// show('undefVal');
// show('zero || 1');
// show('zero ?? 1');

const vals = ['emptyStr', 'zero', 'falseVal', 'nullVal', 'undefVal'];
for (const name of vals) {
    show(`${name} || 'defaultValue'`);
    show(`${name} ?? 'defaultValue'`);
}

// EOF
