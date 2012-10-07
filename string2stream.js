var Stream = require('stream');

module.exports = function (string) {
  var stream = new Stream(),
      i = 0,
      paused = false,
      ended = false;
    
  stream.readable = true;
  stream.writeable = false;
    
  if (typeof string !== 'string') {
    throw new Error('string2stream expects a string');
  }
  
  stream.pause = function() {
    paused = true;
  }
  
  stream.resume = function() {
    if (ended) return;
    paused = false;
    var l = string.length;
    while(i < l && !paused && !ended) {
      stream.emit('data', string[i++])
    }
    if (i == l && !ended) {
      ended = true;
      stream.readable = false;
      stream.emit('end');
    }
  }
  
  stream.destroy = function () {
    ended = true;
    stream.emit('close');
  }
  
  process.nextTick(stream.resume);
  return stream;
}