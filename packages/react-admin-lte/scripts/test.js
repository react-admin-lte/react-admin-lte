'use strict';

process.env.NODE_ENV = 'test';

const jest = require('jest');
const argv = process.argv.slice(2);

if (!process.env.CI && argv.indexOf('--coverage') < 0) {
  argv.push('--watch');
}

jest.run(argv);
