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

let n2 = 8;
let a = 0;
let d;
let array =[]

for (let i = 1; i <= n2; i++) { // 1 , 2, 3 , 4 , 5 , 6 , 7 
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

// array 19

console.log('array 19')
const k2 = [ 12 , 5 , 3 , 8]
let car;  // oxirgi elementdan kichgina bolgan indeks

for ( let i = 0; i < k2.length; i++ ) {
    if ( k2[k2.length-1] > k2[i]  ) {   // 8, 12 , 5 , 3 
        car = k2[i]
    }
}

let tam;
for ( let i = 0; i < k2.length; i++ ) {
    if ( car < k2[i]  ) {  // 
    tam = k2[i]
    break;
    }
}

console.log(tam)


// array 20 , 21 , 22 , 23 , 
console.log("array 20")
const n9 = [ -1 , 4 , 8 , 10 , 11 , 12  ]   // 6 ta 
// const n9 = [-1 , 5 , 8 , 10 , 0 ,12]
let l = 5
let k7 = 0

n9[1] = l;
n9[4] = k7;

let shram = n9.slice(1,5)
shram.shift()
shram.pop()

let kal = 0

for (let i= 0; i < shram.length; i++) {
    kal = kal + shram[i];
}

console.log(kal)


// array 21
console.log('array 21')
let kal1 = 0
let rus;
for (let i= 0; i < shram.length; i++) {   
    kal1 = kal1 + shram[i];
    rus = kal1/shram.length
}

    console.log(rus)

// array 22
console.log('array 22')
let sum = n9[1] + n9[4]
console.log(sum)

// array 23
console.log('array 23')
let sum1 = parseInt((n9[1] + n9[4]) / 2)
console.log(sum)

// array 24
console.log('array 24')
const arif = [12 , 14 , 16 , 18 , 20 , 22]
let ayirma = 0;


for ( let i = 0; i < arif.length; i++) {
    if ( arif[1] - arif[0]  === arif.at(-1) - arif.at(-2)  ) {
        ayirma -=arif[i]
    }
}

console.log(ayirma)

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
const massive = [1, 4, 6 ,9, 11]
let ram;

for (let i = 0; i < massive.length; i++) {
    
    if ( massive[i] % 2 === 0 ) {  
        ram = massive[i] 
        break;
    }
}

console.log(ram)


for (let i = 0; i < massive.length; i++) {   // 0 , 1 , 2 ,3 ,4 
    if(massive[i] % 2 === 0) {  // 
        massive[i] = massive[i] + ram;  
    }    
}

console.log(massive)



// array 67
console.log('array 67')

const arrays = [11, 22, 5 , 68]
let kam;

for (let i = 0; i < arrays.length; i++ ) {   // 0 , 1 , 2 , 3
    
    if ( arrays[i] % 2 === 1 ) {
    kam = arrays[i]
    break;
    }
}

for ( let i = 0; i < arrays.length; i++ ) {
    if (arrays[i] % 2 === 1) {
    arrays[i] = arrays[i] + kam;
    }
}

console.log(arrays)


// array 68
console.log('massiv 67:')


const numbers  = [ 2 , 4 ,12 , 25 ]  // min 2 , max = 25

let min = numbers[0]
let max = numbers[3]

for ( let i = 0; i < numbers.length; i++ ) {
    if ( max >= numbers[i]) {   
        numbers[0] = numbers[i] 
    }
}


for ( let i = 0; i < numbers.length; i++ ) {
    if ( min <= numbers[i]) {   
       numbers[3] = min
    } 
}

console.log(numbers)



// array 18
console.log('array 18')
const n4 = [12 , 4, 6, 7]
let last;

for ( let i = 0; i < n4.length; i++) {
     if (n4[n4.length-1] > n4[i] ) {
    last = n4[i]
    } else {
        console.log(0)
    }
}

console.log(last)