// length method
var uzunlik = 'sdfghjklsdfghj'
console.log(`legth:${uzunlik.length}`)

// charAt() method

var index1 = '"abcd"'
console.log(`index[0]:${index1.charAt(0)}`) // "
console.log(`index[index.length-2]:${index1.charAt(index1.length-2)}`)

// charCodeAt()
var utf_16 = 'ABCD'
console.log(`utf_16: > B: ${utf_16.charCodeAt(1)} `) 

// charPointAt() new version of charCodeAt()
var utf_16 = 'ABCD'
console.log(`utf_16: > C: ${utf_16.codePointAt(2)} `)

// concat() method
var str1 = 'abcd,';
var str2 = 'efgh,';
var str3 = 'ijkl,';
console.log(str1.concat(str2,str3))


// at()
var index2 = 'ABCD';
console.log(`index2[2]: ${index2.at(2)}`) // C

// at(-)
console.log(`index2[-2]: ${index2.at(-2)}`) // C

// []
var index3 = 'ABCDEFG';
console.log(`index3[3]: ${index3[3]} `) //D

// [-index]
console.log(`index3[2]: ${index3[index3.length-2]} `) // F

// method slice()
var slice1 = 'ABCD-EFG'
console.log(`slice1:'BCD ':${slice1.slice(1,5)}`)

// method slice(single index)
console.log(`slice1:'BCD ':${slice1.slice(3)}`) //D-EFG

// method slice(minus index)
console.log(`slice1:'BCD ':${slice1.slice(-1)}`) // G
console.log(`slice1:'BCD ':${slice1.slice(-3,-1)}`) // EF

// method substring(start , end)
var substring = 'ABCD'
console.log(`substring:'BC':${substring.substring(1,3)}`) // BC

// substring(single index)
console.log(`substring:'BC':${substring.substring(1)}`) // BCD

/* method substr() -> was removed -> now it is not available in js6 but 
still working
*/

// substr(start, length)
var substr = 'ABCD'
console.log(`substr: ${substr.substr(1,3)}`) // BCD
// substr(start)
console.log(`substr: ${substr.substr(2)}`) // CD
// substr(-start)
console.log(`substr: ${substr.substr(-4)}`) // ABCD

// toUpperCase()
var upperCase = 'abcdef'
console.log(`uppercase:${upperCase.toUpperCase()}`)

//toLowerCase()
var lowerCase = 'ABCDEF';
console.log(`lowercase:${lowerCase.toLowerCase()}`)

// isWellFormed -> returns true if the following strings are included to utf -16

var trueString  = 'afdgf'
console.log(trueString.isWellFormed()) //true

var falseString = 'ghjkl;\uD800';
console.log(falseString.isWellFormed()) // false

// toWellFormed() -> returns the string charater that are not inlcuded to utf-16

var returnString = 'what is your name \uD800'
console.log(returnString.toWellFormed())


// method trim -> removes the whitespaces from both start an endpoints
var whitespace = ' abcd ';
var no_whitespace = '1345';
var no_whitespace1 = 'boolean';
console.log(`overall: ${no_whitespace + whitespace.trim()+no_whitespace1}`)


// trimStart() -> remove the whitespace from the beginning
var white_space_start = ' Jack'
console.log('my name is'+white_space_start.trimStart())

// trimEnd() -> removes the whitespace at tbe endpoint
var white_space_end = 'Jack '
console.log(white_space_end.trimEnd()+'Jons')

// padStart() -> adds strings at the begining until its length 

var number = '12';
console.log(number.padStart(4,25)) // '2512'

// padEnd() adds strings at the end until its length 
var number = '12';
console.log(number.padEnd(4,25)) // '1225'

// repeat() -> it repeats the string
var rep = 'abcd,';
console.log(rep.repeat(3))

// replace() -> replaces the first coming string

var pets = 'horses , cats , dogs , chiken, cats';
console.log(pets.replace('cats','cows')) // 'horses , cows , dogs , chiken, cats'

// //g - it means global that helps us to change all singular strings
console.log(pets.replace(/cats/g,'cows'))//'horses , cows , dogs , chiken, cows'

// the method replace() - is registersensetive to fix it we use // i (insensetive)
console.log(pets.replace(/DOGS/i,'rabits')) // 'horses , cows , rabits , chiken, cats'

//replaceAll() it helps with replacing all similar strings to another one
var domesticAnimals = 'horse, rabbit, cat, horse'
console.log(domesticAnimals.replaceAll('horse', 'cows')) // cows, rabbit, cat, cows

