'use strict';

var expect = require('expect');
var sinon = require('sinon');

var originalCacheKeys = Object.keys(require.cache);

function cleanupCache(key) {
  if (originalCacheKeys.indexOf(key) === -1) {
    delete require.cache[key];
  }
}

function cleanup(done) {
  // restore the require.cache to startup state
  Object.keys(require.cache).forEach(cleanupCache);

  done();
}

describe('defaultResolution', function () {
  afterEach(cleanup);

  it('should return default resolution to 1 (millisecond) on supported platforms', function (done) {
    var defaultResolution = require('../');

    expect(defaultResolution()).toEqual(1);
    done();
  });

  it('should return default resolution to 1000 (1 second) on node v0.10', function (done) {
    // Only stub around the import of the module
    var stub = sinon.stub(process, 'version').value('v0.10.0');

    var defaultResolution = require('../');

    stub.restore();

    expect(defaultResolution()).toEqual(1000);

    done();
  });

  it('should return default resolution to 1 (millisecond) on node v0.11', function (done) {
    // Only stub around the import of the module
    var stub = sinon.stub(process, 'version').value('v0.11.0');

    var defaultResolution = require('../');

    stub.restore();

    expect(defaultResolution()).toEqual(1);
    done();
  });

  it('should return default resolution to 1 (millisecond) on node v0.12', function (done) {
    // Only stub around the import of the module
    var stub = sinon.stub(process, 'version').value('v0.12.0');

    var defaultResolution = require('../');

    stub.restore();

    expect(defaultResolution()).toEqual(1);
    done();
  });

  it('should return default resolution to 1 (millisecond) on node v4.3', function (done) {
    // Only stub around the import of the module
    var stub = sinon.stub(process, 'version').value('v4.3.0');

    var defaultResolution = require('../');

    stub.restore();

    expect(defaultResolution()).toEqual(1);
    done();
  });

  it('should return default resolution passed as argument', function (done) {
    var defaultResolution = require('../');

    expect(defaultResolution(2000)).toEqual(2000);
    done();
  });
});
