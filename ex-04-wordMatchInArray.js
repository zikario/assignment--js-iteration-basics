
/**
 * wordMatchInArray()
 *
 * Write a function called `wordMatchInArray` that takes 2 inputs: a string, and an array.
 * The function should return a boolean value if that word is found in the array.
 *
*/


function wordMatchInArray(str, arry){
  for(var i = 0; i < arry.length; i++){
    if (arry.indexOf(str) >= 0 ){
      return true
    }else {
      return false
    }
  }
}







//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var sampleWordsArray = ["because", "girls", "just", "want", "to", "have", "fun"]

console.assert(wordMatchInArray('girls', sampleWordsArray) === true)
console.assert(wordMatchInArray('fun', sampleWordsArray) === true)
console.assert(wordMatchInArray('boys', sampleWordsArray) === false)

var sampleWordsArray2 = ["boys", "there", "is", "no", "way", "out", "of", "here"]
console.assert(wordMatchInArray('boys', sampleWordsArray2) === true)
console.assert(wordMatchInArray('girls', sampleWordsArray2) === false)
