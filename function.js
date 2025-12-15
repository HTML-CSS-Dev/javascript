// 2
console.log('2 masala')
function eng_katta( a , b , c ) {
    if ( a > b && b > c ) {
    return 'eng katta son = ' + a

    } else if ( b > c  && c > a ) {
    return 'eng katta son = ' + b
    } else if(c > a && a > c) {
    return 'eng katta son = ' + c
    } else if (a > c && c > b) {
    return 'eng katta son = ' + a
    } else if( b > a && a > c ) {
    return 'eng katta son = ' + b
    } else  {
    return 'eng katta son = ' + c
    }
}

let m = eng_katta(  12 , 22 , 11 )
console.log(m)


// 5
console.log('5 masala')

function sign(x) {
    if ( x >= 0  ) {
    return 'musbat'
    } else if ( x < 0 ) {
    return 'manfiy'
    } else {
    return 'No!'
    }
}

console.log(sign(23))


// 6

console.log('6 masala')


function funcname( start , end ) {
let count = 0;

for ( let i = start + 1; i < end; i++ ) {
    if ( i%2 === 0 ) {
    count++;
    }
}

return count
}

console.log(funcname(2,8))

// 7
console.log('7 masala')
let n = 7;

function namese(n) {
let sum = 0
for (let i =1; i <= n; i++ ) {
    if ( i % 2 === 1 ) {
    sum +=i
    }
} 

return sum  

}

console.log(namese(9))

// 10

console.log('10 masala')

function temperature(temp) {

if ( temp < 17 ) {
    return 'issq kiyining'
} else {
    return 'yengil kiyining'
}

}

console.log(temperature(18))


// 11
console.log('11 masala')

// Qish , Baxor, Yoz , Kuz
/*
qish : dec , jan , feb

baxor: mart , aprel , may

yoz: iyun , iyul .avgust

kuz: sen , oktabr , noyabr 
*/

function season(number) {

if ( number > 0 && number < 3 ) {
    return 'Qish'
} else if( number >= 3 && number < 6 ) {   // 3, 4 , 5
    return 'Baxor'
} else if( number >= 6 && number < 9 ) {
    return 'Yoz'
} else if ( number >=9 && number < 12 ) {
    return 'Kuz'
} else if(number === 12) {
    return 'Qish fasli'
}

}

console.log(season(10))

// 12
console.log(' 12 masasla')


function speed( limit , tezlik ) {

let jarima = tezlik - limit;  // 20

if ( 0 < jarima && jarima < 20) {
    return 'kichik jarima' 
} else if( 20 <= jarima && jarima < 40 ) {
    return  'ortancha jarima'
} else if (40 <= jarima) {
    return 'katta jarima'
} else {
    return 'jarima yoq' 
}

}

console.log(speed( 200 , 170 ))


// 14

console.log('14 misol')

function chegirmali_narx( summa , statuss ) {

let chegirma;

if ( statuss === 'bronza' ) {
    chegirma = parseInt(summa - (summa * 5) / 100)
    return chegirma
} else if ( statuss === 'kumush' ) {
    chegirma = parseInt(summa - (summa * 10) / 100)
    return chegirma
} else if ( statuss === 'oltin' ) {
    chegirma = parseInt(summa - (summa * 15) / 100)
    return chegirma
} else {
     return 'sizga chegirma yoq'
}

}

console.log(chegirmali_narx( 120 , 'oltin' ))

// 19
console.log('19 masala')
function soliq_hisoblovchi (daromad) {

let soliq;

if ( daromad < 10 ) {
    soliq = parseInt((10 * daromad) / 100 )
    return soliq
} else if( daromad <= 10  && daromad < 20 )  {
    soliq = parseInt((15 * daromad) / 100 )
    return soliq
} else if ( 20 <= daromad  ) {
    soliq = parseInt((20 * daromad) / 100 )
    return soliq
}
}

console.log(soliq_hisoblovchi(100))
