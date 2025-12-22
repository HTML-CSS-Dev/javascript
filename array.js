//1.1 
const stack = [];
stack.push(1, 2, 3, 4, 5);
let returns = stack.pop()*2;
stack.push(returns)
console.log(stack)

//1.2
const stack2 = ['Salom', 'Dunyo', 'JavaScript'];
const arxiv = []
arxiv.push(stack2.pop())
console.log(arxiv)

// 1.3
const randomNumbers = [3, 6 , 7, 10 , 0]
console.log(randomNumbers.pop()+randomNumbers.pop() + randomNumbers.pop() + randomNumbers.pop() + randomNumbers.pop())


// 2 unshift() va shift()

// 2.1
const navbat = ['Ali', 'Vali' , 'Gani']
var istemolchi = navbat.shift();
navbat.unshift('Eshmat')
console.log(`${istemolchi} haridni tugatdi`)

// 2.2
const sonlar = [12,4, 5, 7, 9 ,11]
sonlar.push(sonlar.shift())
console.log(sonlar)

// 2.3
const old = ['info1' , 'info2' , 'info3']
old.unshift('new info')
if ( old.length > 4 ) {
    old.pop()
    console.log(old)
} else {
    console.log(old)
}

// 3 splice

// 3.1

const arr = [10,20,30,40,50]
arr.splice(2,1,31,32)
console.log(arr)

// 3.2
const mevalar = ['olma' , 'olcha', 'gilos', 'orik' , 'banan']  // ortasi gilos
mevalar.splice(2,2)
console.log(mevalar) // 'olma' , 'olcha', 'banan'

// 3.3
const numbers = [1 , -1 , 4, 10 , -2 , 4, -4]
numbers.splice(1,1,0)
numbers.splice(4,1,0)
numbers.splice(6,1,0)
console.log(numbers)

// 4 slice()

// 4.1

const sahifalar = []

for (let i = 1; i <=10; i++ ) {
    sahifalar.push(i)
}

console.log(sahifalar.slice(2,5))
console.log(sahifalar)

// 4.2
const newArray = new Array()
newArray.push(sahifalar.slice(7,10))
console.log(newArray.flat())

// 4.3
const original = [1,2,3,4,5]
const copy = []

copy.push(original.slice(0,5))
console.log(copy.flat().shift() + copy.flat().pop())

console.log(original)


// 5.1 1-masala: forEach ()

const narxlar = [100, 200 , 300]

function massiv(index) {
  console.log(index - (index*10)/100)
}

console.log(narxlar.forEach(massiv))


// 5.2 2-masala:

const ismlar = [" Ali ", "Vali "  , " harf "]

function uzunlik(items) {
  console.log(items + items.length + ' harf')
}

console.log(ismlar.forEach(uzunlik))

// 5.3 3 masala 

const raqamlar = [ 1, 8 ,5 , 6 ,7, 6 ]

let x = 0
function juftSonlar( items ) {

  if ( items % 2 === 0 ) {
     x = x+items;
  }
}

console.log(raqamlar.forEach(juftSonlar))
console.log(x)


// 6 map

// 6.1
const selsiy = [38 , 23 , 13 , -11]

let man = `F = ${selsiy.map(elements => parseInt(elements * 1.8 + 32) )}`
console.log(man.trimStart())

// 6.2

const obj = [{name:'Ali', age:20} , {name:'Vali' , age: 25}]

function object(index) {
    return index.name
}

console.log(obj.map(object))

// 6.3

const raq = [ 1 , 4, -1 , -4 , -5]

function phonk(items) {
    if (items < 0 ) {
        items*=(-1) 
    }

    return items
}

console.log(raq.map(phonk))

