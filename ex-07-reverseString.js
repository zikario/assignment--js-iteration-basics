
/**
 * reverseString()
 *
 * Write a function called reverseString that takes a string as input
 * and returns a string with the characters in reverse order.
 * (note: can't use .reverse() method )
 *
*/

function reverseString(str) {
  var nstr = []
  var long = str.length
  for (var i = 0; i <= str.length; i++) {
    var x = long - i
    var list = str[x]
    nstr.push(list)
    var rstr = nstr.join('')
  }
  return rstr
}





//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
console.assert( reverseString('books') === 'skoob')
console.assert( reverseString('coolness') === 'ssenlooc')
console.assert( reverseString('bedtime') === 'emitdeb')
console.assert( reverseString('yah sure') === 'erus hay')
