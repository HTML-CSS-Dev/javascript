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


// 5