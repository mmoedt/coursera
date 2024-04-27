import { mod1_hi as say_hi } from './mod1.mjs';
import { log } from './helpers.mjs';

const message = 'Hello, World!';
console.log(message);

let var3 = 'v3';
const g = globalThis;

say_hi();
log('var3 is: ', var3);
log(`blarg is: '${g?.blarg}'`);
log(`var1 is: '${g?.var1}'`);
log(`var2 is: '${g?.var2}'`);
log(`var4 is: '${g?.var4}'`);
// EOF
