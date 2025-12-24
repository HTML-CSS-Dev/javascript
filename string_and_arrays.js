// Oson (Easy)

// 1

const numbers = [1, 2 ,3 , 4, 5]
console.log(numbers.toSorted())

// 2

const string = 'hello';
console.log(string.toUpperCase())


// 3
const num1 = [1, 2, 3]
num1.push(4)
console.log(num1)

// 4
const len = [7,8,9]
console.log(len.length)

// 5
var str2 = 'Hello World';
console.log(str2.replace('World' , 'JavaScirpt'))

// 6
const num2 = [4, 5, 6]
console.log(String(num2.toSpliced(1,2)))

// 7

let len1 = 'Izbekistan';
console.log(len1.length) 

// 8

const num3 = [2,3,4]
num3.unshift(1)
console.log(num3)

// 9 

let str3 = 'JAVASCRIPT'
console.log(str3.toLowerCase())

// 10

const array1 = ['apple' , 'banana' ,  'cherry']
console.log(array1.toString())



// Orta daraja 
// 1

var arr1 = [5 , 2, 9 , 1, 7]
console.log(arr1.toSorted())

// 2

var str1 = "apple , banana , cherry"
console.log(str1.split())

// 3

var arr1 = [1 ,2 , 3 , 4, 5]
console.log(arr1.includes(3)) 

// 4

var arr2 = 'JavaScript'
console.log(arr2.substring(0,4))

5
const massivlars = [1 ,2 ,3 , 4 , 5 , 6]
console.log(massivlars.filter((index) =>{if ( index % 2 === 0 ) {return index}}))

// 6

var massiv = 'hello world'
console.log(massiv.includes('world')) // true

// 7

const arr3 = [10 , 20 , 30 , 40]
console.log(arr3.indexOf(30)) // 2

// 8

const arr4 = [1 ,2 ,3, 4, 5]
console.log(arr4.slice(1,3))

// 9
const arr5 = [5, 10 , 15]
console.log(arr5.reduce((summa,value) => {return summa + value}))

// 10

var str1 = '123-456-789'
console.log(str1.replaceAll('-','\t'))

// 11
const arr6 = [1 , 5, 3, 9 , 2]
console.log(Math.max(...arr6))

// 13
const arr9 = [2 , 4, 6]

function newMethod(index) {
    if (index % 2 === 1 ) {
    console.log(false)
    } else {
    console.log(true)
    }
}

console.log(arr9.every(newMethod))

// 14
var str1 = "javascript"
console.log(str1.split("").reverse().join(""))

// 15

const arr8 = [1 , 2 , 3, 4]

function man(index) {
    return index+2
}

console.log(arr8.map(man))


// 13
const arr = [2 , 4, 6]

for ( let i = 0; i < arr9.length; i++ ) {
    if ( arr[i] % 2 === 1 ) {
    console.log(false)
    break;
    } else {
    console.log(true)
    break;
    }
}


//  Murakkab

// 1

var str = 'madam';

if ( str.split('').reverse().join('') === str ) {
    console.log(true)
} else {
    console.log(false)
}

//2 

const points = [40, 100, 1, 5, 25, 10];

function math() {
    return 0.5 - Math.random()    
}

console.log(points.sort(math).slice(0,3))


// 3

var str = "apple banana apple orange banana";
var umumiy = str.slice(0,12) + ' ' + str.slice(-13,-6)
console.log(umumiy.split(' '))

// 4
const arr10 = [ 1, [2,3] , [4, [5,6]] ]
console.log(arr10.flat().flat())


// 5
var most = 'hello world from javascript'
var arr1 = most.split(' ')

console.log(arr1.reduce((sum , index) => {return sum.replace(sum[0], ' ' + sum[0].toUpperCase()) + (index.replace(index[0], ' ' + index[0].toUpperCase()))} ))