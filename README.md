# string2stream

Converts a string into a stream by emitting one character after the other.

## Installation

    npm install string2stream

## Example

    var string2stream = require('string2stream')

    string2stream('a super nice string').pipe(process.stdout)
    
or

    var string2stream = require('string2stream')
    var fs = require('fs')

    var writer = fs.createWriteStream('out.txt')
    string2stream('a super nice string').pipe(writer)


    
## Test

Tests are written using [mocha](http://mochajs.org/) and [should](https://github.com/visionmedia/should.js).

    npm test

or

    make test
    
## Acknowledgements

Inspired by Dominic's [readArray](https://github.com/dominictarr/event-stream#readarray-array).
    
## License

Copyright (C) 2012 [Mirco Zeiss](mailto: mirco.zeiss@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
