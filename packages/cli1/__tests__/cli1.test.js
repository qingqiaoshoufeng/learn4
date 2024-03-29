'use strict';

const cli1 = require('..');
const assert = require('assert').strict;

assert.strictEqual(cli1(), 'Hello from cli1');
console.info('cli1 tests passed');
