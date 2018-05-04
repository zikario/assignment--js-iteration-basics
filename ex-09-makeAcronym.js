// ex-04 makeAcronym()

//
// Write a function called makeAcronym() that converts a name like Portable Network Graphics
// to its acronym (PDF).
//
// makeAcronym('PNG')
//  => 'PDF'

function makeAcronym(arry) {
var n = []
var nstr = []
var nestr = []
var arry = arry.toUpperCase()
for (var i = 0; i < arry.length; i++) {
  var list = arry[i]
  if (list === ' ') {
    var x = i
    n.push(x)
  }
}
var y = n[0]
var str = arry.slice(0, y)
nstr.push(str)
for (var z = 0; z < n.length; z++) {
  var a = n[z]
  var b = n[z + 1]
  var strs = arry.slice((a + 1), b)
  nstr.push(strs)
}
for (var i = 0; i < nstr.length; i++) {
  var listx = nstr[i]
  var st = listx[0]
  nestr.push(st)
  var acr = nestr.join('')
}
return acr
}






//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

console.assert( makeAcronym('Portable Document Format') === 'PDF' );
console.assert( makeAcronym('be right back') === 'BRB' )
console.assert( makeAcronym('Bring Your Own Beverage') === 'BYOB' )
console.assert( makeAcronym('National Broadcasting Company') === 'NBC' )
console.assert( makeAcronym('Department of Defense') === 'DOD' )
console.assert( makeAcronym('in case you missed it') === 'ICYMI' )
console.assert( makeAcronym('if I recall correctly') === 'IIRC' )
console.assert( makeAcronym('Rest in Peace') === 'RIP' )



//Explorer Mode -- pass the argument a true/false value to
//                 capture prepositions or not.
// ---------------------------------------------------
// console.assert( makeAcronym('president of the United States', true) === 'POTUS' )
// console.assert( makeAcronym('greatest of all time', true) === 'GOAT' )
// console.assert( makeAcronym('earnings before insurance taxes depreciation and amortization', false) === 'EBITDA' )
// console.assert( makeAcronym('National Association for the Advancement of Colored People', false) === 'NAACP' )
