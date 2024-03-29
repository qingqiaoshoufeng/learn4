'use strict';

const cli2 = require('..');
const assert = require('assert').strict;

assert.strictEqual(cli2(), 'Hello from cli2');
console.info('cli2 tests passed');
