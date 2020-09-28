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

describe('TST challenge', function() {
	it('show one', function() {
		assert.equal(one("AAABBB"), 205);
	});
});

describe('TST challenge', function() {
	it('show one', function() {
		assert.equal(one("ABCD"), 115);
	});
});

describe('TST challenge', function() {
	it('show one', function() {
		assert.equal(one("CDCD"), 70);
	});
});

describe('TST challenge', function() {
	it('show one', function() {
		assert.equal(one("BBCAAAD"), 210);
	});
});