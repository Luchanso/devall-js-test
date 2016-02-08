'use strict';

let promise = require('../src/promise'),
  should = require('should');

describe('Promise tests', () => {
  it('Call function start, one, error', done => {
    promise.start().should.be.Promise();
    promise.second().should.be.Promise();
    promise.error().should.be.Promise();
    
    promise.start()
      .then(promise.second)
      .then(promise.error)
      .catch(function(err) {
        err.should.be.ok();
        err.should.have.property('message');
        err.message.should.be.eql('error');
        
        done();
      });
  });
});