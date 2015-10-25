'use strict';

var lab = exports.lab = require('lab').script();
var code = require('code');

var defaultResolution = require('../');
var nodeVersion = require('../node-version');

lab.describe('defaultResolution', function() {
  // Typically I don't unit test helpers, but this reduces the last run tests
  var major = nodeVersion.major;
  var minor = nodeVersion.minor;

  lab.afterEach(function(done) {
    nodeVersion.major = major;
    nodeVersion.minor = minor;
    done();
  });

  lab.it('should return default resolution to 1000 on node v0.10', function(done) {
    nodeVersion.major = 0;
    nodeVersion.minor = 10;
    code.expect(defaultResolution()).to.equal(1000);
    done();
  });

  lab.it('should return default resolution to 0 on node v0.11', function(done) {
    nodeVersion.major = 0;
    nodeVersion.minor = 11;
    code.expect(defaultResolution()).to.equal(0);
    done();
  });

  lab.it('should return default resolution to 0 on node v0.12', function(done) {
    nodeVersion.major = 0;
    nodeVersion.minor = 12;
    code.expect(defaultResolution()).to.equal(0);
    done();
  });

  lab.it('should return default resolution to 0 on iojs v1.5', function(done) {
    nodeVersion.major = 1;
    nodeVersion.minor = 1;
    code.expect(defaultResolution()).to.equal(0);
    done();
  });

  lab.it('should return default resolution passed as argument', function(done) {
    code.expect(defaultResolution(2000)).to.equal(2000);
    done();
  });

});
