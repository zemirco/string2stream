var should = require('should')
var string2stream = require('../string2stream')
var fs = require('fs')
var Stream = require('stream')

describe('string2stream', function () {
  
  it('should be readable', function() {
    string2stream('string').should.have.property('readable', true)
  })
  
  it('should not be writeable', function() {
    string2stream('string').should.have.property('writeable', false)
  })
  
  it('should stream a string and be an instanceof Stream', function() {
    string2stream('some input string').should.be.an.instanceof(Stream)
  })
  
  it('should throw an error when input is not a string', function() {
    (function() {string2stream(4)}).should.throw('string2stream expects a string')
  })

})