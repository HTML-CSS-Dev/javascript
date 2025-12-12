// array 1
console.log('array 1')
const number = new Array()

let n = 9;
for (let i = 1; i <=n; i++ ) { // 1 , 2, 3 , 4, 5
    if (i%2 === 0 ) {
    } else {
    number[number.length] = i;
    }
}

console.log(number.toString())

// array 2
console.log('array 2')
let c = []
let n1 = 5;
let t;
for (let j = 0; j < n1; j++) {  //  0 , 1, 2, 3, 4 
    t = 2 ** j
    c.push(t)
}

console.log(c.toString())

// array 3 
console.log('array 3')

let n2 = 7;
let a = 0;
let d;
let array =[]

for (let i = 1; i <= n2; i++) { // 1 , 2, 3 , 4 , 5
    a = a + i; // 15
    d = parseInt(n2 - a / n2)  // 2
}

let c1 = parseInt(a / n2); // 3
let d1 = parseInt(a / n2);
let k;

array[0] = d1
for (let j = 1; j < n2; j++) { // 1 ,2 ,3 ,4
    c1 = c1 + d; // 3 + 2 = 5
    array.push(c1)
}

console.log(array.toString())


// array 18

const n4 = [1,2,9,3,5]

n4[0]  = 0;
if (n4[n4.length - 1] > n4[n4.length - 2]) {
    console.log(n4[n4.length - 2])
} else {
    console.log(n4[0]) 
}


// array 19

const $n = [1,2,4,7]

$n[0] = 0
if ($n[$n.length - 1] >  $n[$n.length - 2] && $n[$n.length - 2] > $n[$n.length - 3] ) {
    console.log($n[$n.length - 2])
} else {
    console.log($n[0])
} 


// array 20 , array 21

// array 20
console.log('array 20')
const massiv = [];
let _n = 6;

for (let i = 0; i <= _n; i++) {
    massiv.push(i)
}

// console.log(massiv);

if ( massiv[0] >= 0 && massiv[massiv.length - 1] > massiv[massiv.length - 2] ) {
    let summs = massiv[1] + massiv[2] + massiv[3] + massiv[4] + massiv[5]
    console.log(summs)
}  else {
    console.log('poshel')
}

// array 21
console.log('array 21')

if ( massiv[0] >= 0 && massiv[massiv.length - 1] > massiv[massiv.length - 2] ) {
    let summs =(massiv[1] + massiv[2] + massiv[3] + massiv[4] + massiv[5]) / 5
    console.log(summs)
}  else {
    console.log('poshel')
}

// array 22
console.log('array 22')
if ( massiv[0] >= 0 && massiv[massiv.length - 1] > massiv[massiv.length - 2] ) {
    let summs = massiv[0] + massiv[6];
    console.log(summs)
}  else {
    console.log('poshel')
}

// array 23

console.log('array 23')
if ( massiv[0] >= 0 && massiv[massiv.length - 1] > massiv[massiv.length - 2] ) {
    let summs = (massiv[0] + massiv[6])/2;
    console.log(summs)
}  else {
    console.log('poshel')
}

// array 24
console.log('array 24')

const maths = [1 , 4, 7 ,5]
let sum = maths[0] + maths[1] + maths[2] + maths[3]
let minus = maths[0] - maths[1] - maths[2] - maths[3]
if ( sum % 2   === 0 ) { 
     console.log(minus)
} else {
   console.log(0)
} 

// array 25
console.log('array 25')

let n$ = [2,4,8,16]


if (n$[0] / n$[1]  ===  n$[n$.length - 1] / n$[n$.length - 2]) {
    console.log(n$[0] / n$[1])
} else {
    console.log(0)
}



// array 66

console.log('array 66')


