import { log, show } from './helpers.mjs';
import { tests, getMinMaxOf } from './mini-max-sum.mjs';
import { main as runWithInput } from './runWithInput.mjs';

const message = 'Hello, World!';
log(message);

log('Running tests...');
const successful = tests();
if (successful) {
    log('Yay, all tests passed!');
}
log('Done!');

// Does this count as dependency injection?
function myMainProc(readFunction) {
    // Most of the interesting code goes here
    log('What is your name? : ');
    let yourName = readFunction();
    log(`Greetings, ${yourName}!}`);
}

runWithInput(myMainProc);
