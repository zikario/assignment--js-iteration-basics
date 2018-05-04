
/**
 * getFirstLetters()
 *
 * Write a function called `getFirstLetters` that takes an array of strings
 * and returns another array of strings with only the first letter
 *
 * Hint: you may want to invoke the `reverseString` function you wrote earlier
 * from the previous queestion
*/

function getFirstLetters(arry) {
  var nstr = []
  for (var i = 0; i < arry.length; i++) {
    var list = arry[i]
    var str = list[0]
    nstr.push(str)
  }
  return nstr
}




//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
let outputArray1 = getFirstLetters(['wow', 'milk', 'howdy', 'sweet', 'bye'])
console.assert( Array.isArray(outputArray1) === true )
console.assert( outputArray1[0] === 'w')
console.assert( outputArray1[1] === 'm')
console.assert( outputArray1[2] === 'h')
console.assert( outputArray1[3] === 's')
console.assert( outputArray1[4] === 'b')



let outputArray2 = getFirstLetters(['kayak', 'chair', 'jacket', 'nice!'])
console.assert( Array.isArray(outputArray2) === true )
console.assert( outputArray2[0] === 'k' )
console.assert( outputArray2[1] === 'c' )
console.assert( outputArray2[2] === 'j' )
console.assert( outputArray2[3] === 'n' )
