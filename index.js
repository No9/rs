var ffi = require('ffi');
var path = require('path')
var assert = require('assert')
console.log(path.join(__dirname, 'target/debug/rscalc'))
var rscalc = ffi.Library(path.join(__dirname, 'target/debug/rscalc'), {  
  fibonacci: ['int', ['int']]
});

rscalc.fibonacci.async(20, function (err, res) {
  if (err) throw err
  assert(6765, res)
  console.log("mycall returned " + res)
})
