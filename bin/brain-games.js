#!/usr/bin/env node

import acquaintance from './cli.js';
import parityCheck from './brain-even.js';

console.log('Welcome to the Brain Games!');
const name = acquaintance();
parityCheck(name);
