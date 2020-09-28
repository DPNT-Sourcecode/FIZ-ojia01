var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('assert');

const one = require('../../../lib/solutions/CHK/checkout');


describe('TST challenge', function() {
	it('show one', function() {
		assert.equal(one("AAAAAAA"), 310);
	});
});

describe('TST challenge', function() {
	it('show one', function() {
		assert.equal(one("AAABBCAAABBDAABD"), 530);
	});
});