import { log, show } from './helpers.mjs';
import { tests, getMinMaxOf } from './mini-max-sum.mjs';

const message = 'Hello, World!';
log(message);

log('Running tests...');
const successful = tests();
if (successful) {
    log('Yay, all tests passed!');
}
log('Done!');
