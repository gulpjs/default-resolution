'use strict';

var expect = require('expect');

var defaultResolution = require('../');
var nodeVersion = require('../node-version');

describe('nodeVersion', function () {
  it('has all integers and not strings', function (done) {
    expect(typeof nodeVersion.major).toEqual('number');
    expect(typeof nodeVersion.minor).toEqual('number');
    expect(typeof nodeVersion.patch).toEqual('number');
    done();
  });
});

describe('defaultResolution', function () {
  // Typically I don't unit test helpers, but this reduces the last run tests
  var major = nodeVersion.major;
  var minor = nodeVersion.minor;

  afterEach(function (done) {
    nodeVersion.major = major;
    nodeVersion.minor = minor;
    done();
  });

  it('should return default resolution to 1000 (1 second) on node v0.10', function (done) {
    nodeVersion.major = 0;
    nodeVersion.minor = 10;
    expect(defaultResolution()).toEqual(1000);
    done();
  });

  it('should return default resolution to 1 (millisecond) on node v0.11', function (done) {
    nodeVersion.major = 0;
    nodeVersion.minor = 11;
    expect(defaultResolution()).toEqual(1);
    done();
  });

  it('should return default resolution to 1 (millisecond) on node v0.12', function (done) {
    nodeVersion.major = 0;
    nodeVersion.minor = 12;
    expect(defaultResolution()).toEqual(1);
    done();
  });

  it('should return default resolution to 1 (millisecond) on node v4.3', function (done) {
    nodeVersion.major = 4;
    nodeVersion.minor = 3;
    expect(defaultResolution()).toEqual(1);
    done();
  });

  it('should return default resolution passed as argument', function (done) {
    expect(defaultResolution(2000)).toEqual(2000);
    done();
  });
});
