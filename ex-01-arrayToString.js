/**
 * arrayToString()
 *
 * Write a function called `arrayToString` that takes
 *  an array of string values and returns a string with
 *  all of the values combined together.
 *
 *  Example:
 *    var ex1 = arrayToString(['my','name','is','lina'])
 *    console.log(ex1)
 *        //-> 'mynameislina'
 *
 * You must use a for-loop to solve this problem.
 **/


function arrayToString(arrayInput){

var arrayToString = arrayInput.join('')
return arrayToString
  /* Your code below. Look at the console.asserts to se*/
}







//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var output1 = arrayToString(["Hello", "how", "are", "you"])

var coolArr = ['cool', 'great', 'nice', 'awesome', 'sweet']
var output2 = arrayToString(coolArr)

var newArray = ['cool', 'great', 'awesome', 'super']
var output3 = arrayToString(newArray)

var lastArray = ['wow', 'great', 'wow', 'neat']
var output4 = arrayToString(lastArray)

console.assert( output1 === "Hellohowareyou" )
console.assert( output2 === 'coolgreatniceawesomesweet' )
console.assert( output3 === 'coolgreatawesomesuper' )
console.assert( output4 === 'wowgreatwowneat' )
