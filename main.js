// if 1 , if 2 , if 3
let x = 10;
let y = -10;
let z = 0;

// if 1
if (x > 0) {
    x++;
}else{

}

console.log('if1 = ' + x)


// if 2
if (y > 0) {
    y++;
}else {
    y=y-2;
}

console.log('if2 = ' + y)

// if 3
if(z > 0) {
    z++;
}else if(z < 0) {
    z=z-2;
}else if(z==0) {
    z = 10;
}

console.log('if3 = '+ z)


// if 4 , if 5
let m = 12; 
let n = -11;
let o = 5;

// if 4
let musbat = 0;

// m tekshirish
if (m > 0) {
    musbat++;
} else {}

// n tekshirish
if (n > 0) {
    musbat++;
}else {}

// o tekshirish
if(o > 0) {
    musbat++;
}else {}

console.log('musbatlar soni = ' + musbat)


// if 5
let manfiy = 0;

// m tekshirish
if (m < 0) {
    manfiy++;
} else {}

// n tekshirish
if (n < 0) {
    manfiy++;
}else {}

// o tekshirish
if(o < 0) {
    manfiy++;
}else {}

console.log('manfiylar soni = ' + manfiy)


// if 6 , if 7 , if 8

let c = 12 ;
let s = 17;

// if 6
if (s > c) {
    console.log('katta son = ' + s)
} else {}

// if 7
let tartib = 0;
if (s > c) {
    tartib = tartib + 1;
console.log('kattasi = ' + tartib)
} else {
    tartib = tartib + 2;
    console.log('kichigi = ' + tartib)
}

// if 8

if (c < s) {
    console.log('kattasi = ' + s + ' keyin ' + "kichigi = " + c)
} else {
    console.log('kichigi = ' + c + ' keyin ' + "kattasi = " + s)
}

// if 9 , if 10 

let a = 13;
let b = -3;

// if 9
b = a+b**2;
console.log('b katta a dan = '+ b)

// if 10

let a1 = 12;
let b1 = 13;
let c1 = a1+b1;

if (a1 !== b1 ) {
    a1 = c1;
    b1 = c1; 
} else {}

console.log('a1 = ' + a1 + ' va ' + 'b1 = ' +b1)

// if 11 
let a2 = 12;
let b2 = 12;

let c2 = 0;
let c3 = a2+b2;

if (a2 !== b2) {
    a2 = c3;
    b2 = c3;
}else if(a2 == b2) {
    a2 = c2;
    b2 = c2;
}

console.log('a2 = '+ a2 + ' va ' + 'b2 = ' + b2 )
 
// if 12 , if 13 , if 14, if 15
let m1 = 1;
let m2 = 4;
let m3 = 7;

let kichigi = 0;
let kottasi = 0;
let ortasi = 0; 


// if 12
if (m3 > m1) {
    kichigi = m1
} else{}

console.log('eng kichik son = ' + kichigi)

// if 13 
if (m3 > m2) {
    ortasi = m2
}else {}

console.log('ortadagi raqami = ' + ortasi)

// if 14 
if (m3 > m1) {
    kichigi = m1;  
    kattasi = m3;
} else {
    ortasi = m2
}

console.log('kichigi = ' + kichigi + ' va ' + 'kattasi = ' + kattasi)

// if 15

let yigindi1 = m2 + m3; 11
let yigindi2 = m1+m2; 5
let yigindi3 = m1 + m3; 8

let katta = 0;
let ortanchasi = 0;

if (yigindi1 > yigindi3 > yigindi2) {
    katta = yigindi1;
    ortanchasi = yigindi3;
console.log('katta yigindi = ' + katta + ' va ' + 'orta yigindi = ' + ortanchasi)
}


// if 18 

let num1 = 12;
let num2 = num1;
let num3 = 0;

tartib_raqam = 0;

if (num1 !== num3) {
    tartib_raqam=num3 + 3;
} else {}

console.log('qolganing tartibini raqami ' + tartib_raqam)

// if 19 

let numbers1 = 11;
let numbers2 = 10;
let numbers3 = numbers1;
let numbers4 = numbers1;

let raqam = 0;

if (numbers1 !== numbers2 ) {
    numbers2 = raqam + 2
    console.log('numbers2 ning tartib raqami = ' + numbers2 )
} else {}

// if 20
let ac = 12; 
let bc = 8;
let ab;

let eng_yaqini;
if (ac > bc) {
    ab = ac - bc;
} else {}

if (bc > ab ) {
    eng_yaqini = 'B nuqta'; 
}else {}

console.log('eng yaqini ' + eng_yaqini + ' va a dan bolgan masofasi ' + ab )


let n1 = 1;

let sam1 = n1;
let sam2 =n1 + 1;
let sam3 = n1 + 2;
