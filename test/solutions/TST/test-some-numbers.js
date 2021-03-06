var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('assert');

const one = require('../../../lib/solutions/CHK/checkout');


describe('TST challenge', function() {
	it('test1', function() {
		assert.equal(one("AAAAAAA"), 300);
	});
});

describe('TST challenge', function() {
	it('test2', function() {
		assert.equal(one("BB"), 45);
	});
});

describe('TST challenge', function() {
	it('test3', function() {
		assert.equal(one("FFFF"), 30);
	});
});

describe('TST challenge', function() {
	it('test4', function() {
		assert.equal(one("ABCD"), 115);
	});
});

describe('TST challenge', function() {
	it('test5', function() {
		assert.equal(one("CDCD"), 70);
	});
});

describe('TST challenge', function() {
	it('test6', function() {
		assert.equal(one("EEEEBBAAAAABBBCDCAAAA"), 670);
	});
});

describe('TST challenge', function() {
	it('test7', function() {
		assert.equal(one("EEEEBBAAFAAABBFBCDCAAFAAFF"), 710);
	});
});

describe('TST challenge', function() {
	it('test8', function() {
		assert.equal(one("S"), 20);
	});
});

describe('TST challenge', function() {
	it('test9', function() {
		assert.equal(one("ST"), 40);
	});
});

describe('TST challenge', function() {
	it('test10', function() {
		assert.equal(one("ZTSX"), 62);
	});
});

describe('TST challenge', function() {
	it('test11', function() {
		assert.equal(one("ZTSZYXX"), 107);
	});
});