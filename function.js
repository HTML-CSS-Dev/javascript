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

// Qudrat akani kitobi

// 1
console.log('qudrata aka № 1:')
let ishora = (a) => {
    if ( a > 0 ) {
    return 1
    } else if( a <0 ) {
    reurn -1
    } else {
    return o
    }
}

console.log(ishora(10))

// 2
console.log('qudrata aka № 2:')

let diskriminant = (a,b,c) => {

let d = b**2 - 4*a*c;

if ( d > 0 ) {
    return '2 ta yechim'
} else if( d = 0 ) {
    return '1 ta yechim'
} else {
    return 'yechim yoq'
}
}

console.log(diskriminant(1,4,2))

// 3 
console.log('qudrata aka № 3:')
// S = PI*r**2
const doira = (r1 , r2, r3) => {
    const pi = 3.14;
    S1 =  pi * r1**2;
    S2 =  pi * r2**2;
    S3 =  pi * r3**2;
    return '1 doira yuzi = ' + S1 + ',' +'2 doira yuzi = ' + S2 + ',' + '3 doira yuzi = ' + S3
}

console.log(doira(3,1,4))


// 4
console.log('qudrata aka № 4:')

const daraja = (son) => {
let n1 = son;
let k;
let i= 1; 
while ( i <= n1 ) {
k = 2 ** i;
    i++
}

return '2 ning n darajasi = ' + k
}

console.log(daraja(5))


// 5
console.log('qudrata aka № 5:')

let number1 = 12;
let count1 = 0 , count2 = 0, count3 = 0; 
let number2 = 18;


for ( let i = 1; i <=number1; i++) {
    if ( number1 % i === 0 ) {
        count1++;
    }
}

console.log(count1) // 6 ta

for ( let i = 1; i <= number2; i++) {
    if ( number2 % i === 0 ) {
        count2++;
    }
}

console.log(count2) // 6 ta

if ( count1 === count2) {
console.log('ekub(number1 , number 2) = ' + count1 )
} else {
    console.log('ekub sonlari ozaro teng emas')
}

//  7

console.log('qudrata aka № 7:')

const darajas = (son1 , son2) => {
let n1 = son1;
let n2 = son2;
let k;
let i = 0; 
while ( i <= son2 ) {
k = n1 ** i;
    i++
}

return '2 ning n darajasi = ' + k
}

console.log(darajas(2 , 4))



// 5

console.log(' 5 si savol: ')

let ekub = ( a , b , c ) => {
    if( b > a && a > c ) {
  let count1 , count2 , count3;
  // c
  for (let i = 1; i <= c; i++) {
    if (c % i === 0) {
      count1 = i
    }
  }

  for (let i = 1; i <= c; i++) {
    if (a % i === 0) {
      count2 = i
    }
  }
  

for (let i = 1; i <= c; i++) {
    if (b % i === 0) {
      count3 = i
    }
  }
    
  if ( count1 === count2 && count2 === count3 ) {
    return 'ekub(a , b , c) = ' + count1
  } else {
    return  'bu sonlarning ekubi mavjud emas'
  }

}  else if( a > b && b > c  ) {
      let count1 , count2 , count3;
  // c
  for (let i = 1; i <= c; i++) {
    if (c % i === 0) {
      count1 = i
    }
  }

  for (let i = 1; i <= c; i++) {
    if (a % i === 0) {
      count2 = i
    }
  }
  

for (let i = 1; i <= c; i++) {
    if (b % i === 0) {
      count3 = i
    }
  }
    

  if ( count1 === count2 && count2 === count3 ) {
    return 'ekub(a , b , c) = ' + count1
} else {
    return  'bu sonlarning ekubi mavjud emas'
}
}  else if (a > c && c > b) {

let count1 , count2 , count3;
  // c
  for (let i = 1; i <= b; i++) {
    if (c % i === 0) {
      count1 = i
    }
  }

  for (let i = 1; i <= b; i++) {
    if (a % i === 0) {
      count2 = i
    }
  }
  

for (let i = 1; i <= b; i++) {
    if (b % i === 0) {
      count3 = i
    }
  }
    
  
  if ( count1 === count2 && count2 === count3 ) {
    return 'ekub(a , b , c) = ' + count1 
  } else {
    return 'bu sonlarning ekubi mavjud emas'
  }


}  else if ( c > a && a > b) {

let count1 , count2 , count3;
  // c
  for (let i = 1; i <= b; i++) {
    if (c % i === 0) {
      count1 = i
    }
  }

  for (let i = 1; i <= b; i++) {
    if (a % i === 0) {
      count2 = i
    }
  }
  
for (let i = 1; i <= b; i++) {
    if (b % i === 0) {
      count3 = i
    }
  }
  
  
  if ( count1 === count2 && count2 === count3 ) {
    return 'ekub(a , b , c) = ' + count1 
  } else {
    return 'bu sonlarning ekubi mavjud emas'
  }

} else if(b > c && c > a )  {

    let count1 , count2 , count3;
  // c
  for (let i = 1; i <= a; i++) {
    if (c % i === 0) {
      count1 = i
    }
  }

  for (let i = 1; i <= a; i++) {
    if (a % i === 0) {
      count2 = i
    }
  }
  
for (let i = 1; i <= a; i++) {
    if (b % i === 0) {
      count3 = i
    }
  }
  
  
  if ( count1 === count2 && count2 === count3 ) {
    return 'ekub(a , b , c) = ' + count1
  } else {
    return 'bu sonlarning ekubi mavjud emas'
  }
} else if ( c > b && b > a ) {
        let count1 , count2 , count3;
  // c
  for (let i = 1; i <= a; i++) {
    if (c % i === 0) {
      count1 = i
    }
  }

  for (let i = 1; i <= a; i++) {
    if (a % i === 0) {
      count2 = i
    }
  }
  

for (let i = 1; i <= a; i++) {
    if (b % i === 0) {
      count3 = i
    }
  }
  
  
  if ( count1 === count2 && count2 === count3 ) {
    return  'ekub(a , b , c) = ' + count1
  } else {
    return 'bu sonlarning ekubi mavjud emas'
  }
}

}

console.log(ekub(12,18,24))



// Param 1
console.log('Param 1:')

function min( a , b , c , n) {

let k1 = a;
let k2 = b;
let k3 = c;

for ( let i = 0; i < n; i++ ) {
    k1.push(a[i])
}

console.log('a(min) = ' + Math.min(...k1))

for ( let i = 0; i < n; i++ ) {
    k2.push(b[i])
}

console.log( 'b(min) = ' + Math.min(...k2))

for ( let i = 0; i < n; i++ ) {
    k3.push(c[i])
}

return 'c(min) = ' + Math.min(...k3)
}


console.log(min([2 , 6, 8 , 9] , [ 9 , 11, 2 ,5] , [11,2, 10 , 0] , 4 ))


//  Param 2
console.log('Param 2:')
function max( a , b , c , n) {

let k1 = a;
let k2 = b;
let k3 = c;

for ( let i = 0; i < n; i++ ) {
    k1.push(a[i])
}

console.log('a(max) = ' + Math.max(...k1))

for ( let i = 0; i < n; i++ ) {
    k2.push(b[i])
}

console.log( 'b(max) = ' + Math.max(...k2))

for ( let i = 0; i < n; i++ ) {
    k3.push(c[i])
}

return 'c(max) = ' + Math.max(...k3)
}


console.log(max([2 , 6, 8 , 9] , [ 9 , 11, 2 ,5] , [11,2, 10 , 0] , 4 ))



// Param 3
console.log('Param3')

let minMax = (t,y,u) => {

let sum1 = t
let sum2 = y
let sum3 = u

console.log(sum1.indexOf(Math.min(...sum1)))
console.log(sum1.indexOf(Math.max(...sum1)))

console.log(sum2.indexOf(Math.min(...sum2)))
console.log(sum2.indexOf(Math.max(...sum2)))

console.log(sum3.indexOf(Math.min(...sum3)))
return sum3.indexOf(Math.max(...sum3))

}

console.log( minMax([12 , 2, 4],[11, 0 ,10], [9 , 0, 1]))