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


// if 12 , if 13 , if 14
let nums1 = 12 , nums2 = 4 , nums3 = 1 ;

// if 12
if (nums1 > nums3 && nums2 > nums3) {
    console.log('eng kichkina son bu = ' + nums3)
}else {}


// if 13
if (nums1 > nums2 && nums2 > nums3 ) {
    console.log('ortancha son bu = ' + nums2)
} else{}


// if 14

let q = 12;
let $ = 11;
let _ = 0;

if (q > $ && $ > _ ) {
    console.log('birinchi kattasi = '+ q)
    console.log("keyin kichigi = " + _)
} else{}

// if 15

let $num1 = 12, $num2 = 34 , $num3 = 10;

let sum1 = $num1 + $num2; // 46
let sum2 = $num1 + $num3; // 22
let sum3 = $num2 + $num3; // 44

if (sum1 > sum2 && sum3 > sum2) {
    console.log("eng katta ikta qoshuvchilar: " + sum1 + " va " + sum3)
} else {}


// if 16
let _num1 = 23, _num2 = 24 , _num3 = 25;
if (_num1 < _num2 && _num2 < _num3) {
    console.log("_num1 = " + _num1**2 + "_num2 = " + _num2**2 + "_num3 = " + _num3**2)
} else {
    console.log("_num1 = " + _num1 * (-1) + "_num2 = " + _num2* (-1)  + "_num3 = " + _num3 * (-1))
}

// if 17
let _nam1 = 13, _nam2 = 17 , _nam3 = 10;

if (_nam1 < _nam2 && _nam2 < _nam3 || _nam1 > _nam2 && _nam2 > _nam3) {
    console.log("_nam1 = " + _nam1**2 + "_nam2 = " + _nam2**2 + "_nam3 = " + _nam3**2)
} else {
    console.log("_nam1 = " + _nam1 * (-1) + "_nam2 = " + _nam2* (-1)  + "_nam3 = " + _nam3 * (-1))
}

//  if 18

let raq1 = 12 , raq2 = 13, raq3;
raq3 = raq1;
let tartib_raqam = 0;
if (raq2 > raq1 || raq2 > raq3) {
    tartib_raqam += 2;
    console.log('raq2 tarttib raqami = ' + tartib_raqam)
}

// if 19

let raqam1 = 12 , raqam2, raqam3, raqam4 = 1;
raqam2 = raqam1;
raqam3 = raqam1;
let ochered = 0;
if (raqam4 < raqam2 && raqam4 < raqam3 && raqam4 < raqam1) {
    ochered += 4;
    console.log('raqam4 = ' + ochered)
}else {}

// if 20

let A = -2 , B = 1 , C = 3;

let AB = -1*(-2 -1) // 3 - orasidagi masofa 
let BC = -(1 - 3) //2 - orasidagi masifa 

if ( BC < AB ) {
    console.log('A ga eng yaqin masofa C ba ularning orasidagi masofa =' + BC )
} else {}