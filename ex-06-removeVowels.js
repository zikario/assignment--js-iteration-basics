/**
 * removeVowels()
 *
 * Write a function called `removeVowels()`.
 * It should accept a string as input,
 * and it should return a new string without the vowels.
 *
*/

function removeVowels(str) {
  var nstr = []
  var strs = str.toLowerCase()
  for (var i = 0; i < strs.length; i++) {
    var list = strs[i]
    if ('a' !== list && 'e' !== list && 'i' !== list && 'o' !== list && 'u' !== list) {
      nstr.push(list)
      var nestr = nstr.join('')
    }
  }
  return nestr
}






//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

console.assert( removeVowels('milk') === 'mlk' );
console.assert( removeVowels('christmas') === 'chrstms' )
console.assert( removeVowels('moo shoo pork') === 'm sh prk' )

//should handle capital letters
console.assert( removeVowels('Out of Order') === 't f rdr' )
console.assert( removeVowels('Estados Unidos') === 'stds nds' )
