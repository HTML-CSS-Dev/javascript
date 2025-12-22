//1 Foydalanuvxhi bilan salomlashish

function salomlashish(ism) {
    console.log(`salom ${ism}`)
}

salomlashish('Ali')

// 2 yillik maoshni xisoblash

const hisoblash = function(oylik) {
  console.log(`yillik maosh = ${oylik*12}`)
}

hisoblash(900000)

// 3 ikta soni kopaytirish
function kopaytirish(x,y) {
  console.log(`kopaytrish = ${x*y}`)
}

kopaytirish(4,5)

//4 dollarni somga aylantirish

const somga = (dollar) => {
  const som = 13000
  console.log(`somda = ${dollar*som} so'm`)
}

somga(9500)

// 5

const dollarga = (som) => {
  const dollar = 13000;
    console.log(`dollarda = ${parseInt(som/dollar)} dollar`)
}

dollarga(1100000)

// 6  Mashinada bosib otilgan masofani hisoblash

const masofaHisobla = function(tezlik,vaqt)  {
     const masofa = tezlik * vaqt;
     console.log(`masofa = ${masofa}`)
}

masofaHisobla(60,2)

// 7
function uzunlik (matn) {
 console.log(`matn uzunligi = ${matn.length}`) 
}

uzunlik('Salom dunyo')

// 8


// 10
function yoshniHisobla (tugilganYil) {
 const shuYil = 2025;
 console.log(`yoshingiz = ${shuYil - tugilganYil}`)
}


yoshniHisobla(1995)

// 11 
const harfSoni = (satr, harf) => {
  let m = 0;
  for(let i = 0; i < satr.length;i++) {
    if (satr[i] === harf) {
      m++;
    }
  }
  console.log(`'javascript' da a soni: ${m}`)
}

harfSoni('javascript', 'a')

// 12

function faktorial(n) {
  let r = 1
  for (let i = 1 ; i <= n; i++) {
    r *= i
  }
  console.log(`n'ning faktoriali = ${r}`)
}

faktorial(5)

// 13
const teskariRaqam = function(son) {
    if ( son < 100 ) {
    let reverse = 10*(son%10) + parseInt(son/10)
    console.log(reverse)
    } else if (son >= 100 && son < 1000) {
    let reverse = 100 * ((son % 100)%10) + 10 * (parseInt((son % 100)/10)) +  parseInt(son / 100) 
    console.log(reverse)
    } else if(son >= 1000 && son < 10000) {
    let reverse = (son % 10) * 1000 + (parseInt(((son % 1000) % 100) / 10))*100 + (parseInt((son % 1000) / 100))  * 10 + (parseInt(son / 1000)) 
    console.log(reverse)
    } else if (son >= 10000 && son < 100000) {
    let reverse = 10000*(son % 10) + 1000 * (parseInt((((son % 10000) % 1000) % 100) / 10)) + 100 * (parseInt(((son % 10000) % 1000) / 100)) + 10 * (parseInt((son % 10000) / 1000)) + (parseInt(son / 10000))
    console.log(reverse) 
    }
}

teskariRaqam(12345)

// 16.

let number = 27;

for ( let i = 3; i <= number; i*=3) {
    if ( 3 ** i  ===  number ) {
    console.log('uchga karali')  // 
    break;
    } else {
    console.log('karali emas')
    break;
    }
}

// 17.

let a = 3;
let b = 10;
let d = 0;

for (let i = a; i <= b; i++) {
    d += i**2;
}

console.log(d)

// 18.
console.log('18 masala')

let n = 2;
let t = 0;

for (let i = 1; i <= n; i++) {
    t = t + (n+i)**2;
}

let summa = n**2 + t + (2*n)**2
console.log(summa)


// 14 , 15 , 19


// 20

let som = 100; //  1kg  = 100

for( let i = 1; i <= 2; i+=0.2) {
    console.log(`${i} kg konfetlning narxi = ${i*100}`)
}

