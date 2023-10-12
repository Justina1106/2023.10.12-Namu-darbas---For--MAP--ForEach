console.groupCollapsed('Masyvų teorija')

// Masyvai / arrays
const numsArray = [5, 500, -5, 57.5, 4534, 4444]
// Indeksai        0   1    2    3     4    5

console.log(numsArray)
console.log(numsArray.length)

// console.log(numsArray[0])
// console.log(numsArray[1])
// console.log(numsArray[2])
// console.log(numsArray[3])
// console.log(numsArray[4])
// console.log(numsArray[5])

for (let i = 0; i < numsArray.length; i++) {
  console.log(numsArray[i])
}

const newArr = ['Vienas', 'Du', 5, true, [1, 2, 5]]
// Indeksai        0       1    2    3       4
                                       // 0  1  2

console.log(newArr)
console.log(newArr[0])
console.log(newArr[1])
console.log(newArr[2])
console.log(newArr[3])
console.log(newArr[4])
console.log(newArr[4][0])
console.log(newArr[4][1])
console.log(newArr[4][2])

console.log(newArr[1])
newArr[1] = 200
console.log(newArr[1])

newArr[newArr.length] = 500
console.log(newArr)

console.log(typeof newArr)

const cities = ['Vilnius', 'Kaunas', 'Klaipėda', 'Šiaulia', 'Panevėžys'];
console.log(cities)

// pop, push, shift ir unshift metodai modifikuoja (mutuoja) originalų masyvą.

// pop() metodas - pašalina paskutinį masyvo narį.
const lastCity = cities.pop()
console.log(lastCity)

cities.pop()

console.log(cities)

// shift() metodas - pašalina pirmą masyvo narį.
const firstCity = cities.shift()
console.log(firstCity)

cities.shift()

console.log(cities)

// push() metodas - prideda naują narį (narius) į masyvo pabaigą.
const updatedCitiesLength = cities.push('Šiauliai')
console.log(updatedCitiesLength)

cities.push('Panevėžys')
cities.push('Vilnius', 'Kaunas')

console.log(cities)

// unshift() metodas - prideda naują narį (narius) į masyvo pradžią.
const updatedCitiesLength2 = cities.unshift('Nida')
console.log(updatedCitiesLength2)

cities.unshift('Tauragė', 'Palanga')

console.log(cities)

const countries = ['Lithuania', 'Latvia', 'Poland', 'France', 'Germany', 'Italy'];
// Index                0          1         2          3         4         5
// Slice (+)      0           1         2         3         4          5        6
// Slice (-)     -6          -5        -4        -3        -2         -1      

// SLICE - nemutuoja (nemodifikuoja) originalaus masyvo
console.log('------------SLICE-------------')
console.log(countries)

const slicedCountries1 = countries.slice()
console.log(slicedCountries1)
const slicedCountries2 = countries.slice(0)
console.log(slicedCountries2)
const slicedCountries3 = countries.slice(2)
console.log(slicedCountries3)
const slicedCountries4 = countries.slice(2, 4)
console.log(slicedCountries4)
const slicedCountries5 = countries.slice(0, 3)
console.log(slicedCountries5)
const slicedCountries6 = countries.slice(-4)
console.log(slicedCountries6)
const slicedCountries7 = countries.slice(-4, -2)
console.log(slicedCountries7)
const slicedCountries8 = countries.slice(-4, 2)
console.log(slicedCountries8)
const slicedCountries9 = countries.slice(-3, 2)
console.log(slicedCountries9)
const slicedCountries10 = countries.slice(2, -2)
console.log(slicedCountries10)
const slicedCountries11 = countries.slice(-2, -4)
console.log(slicedCountries11)
const slicedCountries12 = countries.slice(4, 2)
console.log(slicedCountries12)

console.groupEnd()

console.groupCollapsed('Pirmos užduoties 29 ir 30 dalies sprendimas')

const arr = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']
console.log(arr)

// 2.29. Gauti pirmus penkis ir paskutinius šešis masyvo narius. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.

// 1. Pirmi 5 nariai
const task229first = arr.slice(0, 5)
console.log(task229first)

// 2. Paskutiniai 6 nariai
const task229last = arr.slice(-6)
console.log(task229last)

// 3. Bendras masyvas
// const task229all = task229first.concat(task229last)
// const task229all = [task229first, task229last].flat()
const task229all = [...task229first, ...task229last]
console.log(task229all)

// 2.30. Gauti masyvo narius nuo 3 iki 5 ir nuo 15 iki 17. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.

const task230first = arr.slice(2, 5)
console.log(task230first)

const task230last = arr.slice(14, 17)
console.log(task230last)

// const task230all = task230first.concat(task230last)
// const task230all = [task230first, task230last].flat()
const task230all = [...task230first, ...task230last]
console.log(task230all)

console.groupEnd()


// SPLICE - modifikuoja (mutuoja) originalų masyvą
let nums = [  1  ,   2  ,   3  ,   4  ,   5  ,   6  ,   7  ,   10];
//         0     1      2      3      4      5      6      7     8
//        -8    -7     -6     -5     -4     -3     -2     -1

console.log(nums)

// const splicedNums = nums.splice(2)
// const splicedNums = nums.splice(0, 2)
// const splicedNums = nums.splice(2, 1)
// const splicedNums = nums.splice(2, 3)
// const splicedNums = nums.splice(-1)
// const splicedNums = nums.splice(-3, 2)
// const splicedNums = nums.splice(-3, 2, 2)
// const splicedNums = nums.splice(3, 2, 'Trys')
// const splicedNums = nums.splice(2, 1, 2.5)
// const splicedNums = nums.splice(2, 0, 2.5)
const splicedNums = nums.splice(2, 0, 2.5, 2.7, 2.8)

console.log(splicedNums)
console.log(nums)


// FILTER
let originalNums = [1, 2, 3, 4, 5, 6, 7, 8, 10];
console.log(originalNums);

// let filteredNums = []
// for (let i = 0; i < originalNums.length; i++) {
//   if (originalNums[i] > 5) {
//     filteredNums.push(originalNums[i])
//   }
// }
// console.log(filteredNums)

// const filteredNums = originalNums.filter(function(num, index, arr) {
//   console.log('Array: ', arr)
//   console.log('Index: ' + index)
//   console.log('Item: ' + num)
//   console.log(num > 5)

//   return num > 5
// })

const filteredNums = originalNums.filter(function(num){
  return num > 5
})
console.log(filteredNums)

const filteredNums2 = originalNums.filter(function(num){
  return num > 3 && num < 8
})
console.log(filteredNums2)

// const filteredNums3 = originalNums.filter((num) => {
//   return num >= 7 && num % 2 === 0
// })
const filteredNums3 = originalNums.filter(num => num >= 7 && num % 2 === 0)
console.log(filteredNums3)

// MAP
const numsArr = [1, 4, 9, 12]

for (let i = 0; i < numsArr.length; i++) {
  console.log('Index: ' + i)
  console.log('for ciklas: ' + numsArr[i])
}

// numsArr.map(function(num, index, originalArray) {
//   console.log('Index: ' + index)
//   console.log('Map ciklas: ' + num)
//   console.log('Original array: ', originalArray)
// })

numsArr.map((num, index, originalArray) => {
  console.log('Index: ' + index)
  console.log('Map ciklas: ' + num)
  console.log('Original array: ', originalArray)
})

numsArr.forEach((num, index, originalArray) => {
  console.log('Index: ' + index)
  console.log('ForEach ciklas: ' + num)
  console.log('Original array: ', originalArray)
})

// map - grąžina reikšmę
// forEach - negrąžina reikšmę

// const mapNums = numsArr.map((num) => {
//   return num * num
// })

const mapNums = numsArr.map(num => num * num).reverse()

console.log(numsArr)
console.log(mapNums)

const forEachNums = numsArr.forEach(num => num * num)

console.log(forEachNums)

let dataArr = ['text', 454, 'kitas text', 77841, 454, 'labas']
console.log(dataArr)

function task41a() {
  for (let i = 0; i < dataArr.length; i++) {
    if (typeof dataArr[i] === 'number') {
      console.log(dataArr[i])
    }
  }
}

// task41a()

function task41b() {
  dataArr.forEach((item) => {
    if (typeof item === 'number') {
      console.log(item)
    }
  })
}

// task41b()

console.groupCollapsed('Namu darbas 4-ta uzduotis')
const array = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']
console.log(array)
// 4. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant for ciklą ir map/forEach metodą. Kiekvieną užduotį atlikti abiem būdais (for ciklu ir map/forEach metodu). Visus narius išvesti į konsole pagal žemiau pateiktas sąlygas:
// 4.1. Tik skaičius (number tipo duomenis).
function task41a() {
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === 'number') {
        console.log(array[i])
      }
    }
  }
  
//   task41a()
  
  function task41b() {
    array.forEach((item) => {
      if (typeof item === 'number') {
        console.log(item)
      }
    })
  }
  
//   task41b()
// 4.2. Tik tekstą (string tipo duomenis).
function task42a() {
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === 'string') {
        console.log(array[i])
      }
    }
  }
  
// task42a()
  
  function task42b() {
    array.forEach((item) => {
      if (typeof item === 'string') {
        console.log(item)
      }
    })
  }
  
//  task42b()
// 4.3. Tik skaičius (number tipo duomenis) ir juos pakelti 4-tuoju laipsniu.
function task43a() {
    let poweredNumbers = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' && !isNaN(array[i])) {
            poweredNumbers.push(Math.pow(array[i], 4));
        }
    }
    
    console.log("skaičius (number tipo duomenis) ir juos pakelti 4-tuoju laipsniu:", poweredNumbers);
  }
  
// task43a()
  
function task43b() {
  let poweredNumbers = [];

    array.forEach(function(element) {
    if (typeof element === 'number' && !isNaN(element)) {
        poweredNumbers.push(Math.pow(element, 4));
    }
});

console.log("skaičius (number tipo duomenis) ir juos pakelti 4-tuoju laipsniu:", poweredNumbers);
}
  
// task43b()

// 4.4. Tik skaičius (number tipo duomenis) ir prie jų pridėti 55.
function task44a() {
    let numbersWith55 = [];

for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number' && !isNaN(array[i])) {
        numbersWith55.push(array[i] + 55);
    }
}

console.log("Tik skaičius (number tipo duomenis) ir prie jų pridėti 55:", numbersWith55);
  }
  
// task44a()
  
function task44b() {
    let numbersWith55 = [];

    array.forEach(function(element) {
        if (typeof element === 'number' && !isNaN(element)) {
            numbersWith55.push(element + 55);
        }
    });
    
    console.log("Tik skaičius (number tipo duomenis) ir prie jų pridėti 55:", numbersWith55);
}
  
task44b()
// 4.5. Tik skaičius (number tipo duomenis) ir juos padalinti iš 2.
// 4.6. Tik skaičius (number tipo duomenis) ir prieš juos pridėti teksta, tokiu formatu: "Number: 2".
// 4.7. Tik skaičius (number tipo duomenis) ir pridėti tekstą su jų pačių indeksais, pvz.:
//   "Index: 0, Number: 2"
//   "Index: 1, Number: 3"
//   "Index: 2, Number: 5"
//   Ir t.t.
// 4.8. Tik skaičius (number tipo duomenis) ir juos padauginti iš jų pačių indekso.
// 4.9. Tik skaičius (number tipo duomenis) ir juos padauginti iš ankstesnio nario, pvz.:
//   - Pirmo skaičiaus dauginti nereikia.
//   - Antrą skaičių dauginti iš pirmo.
//   - Trečią skaičių dauginti iš antro.
//   - Ketvirta skaičių dauginti iš trečio.
//   - Penktą skaičių dauginti iš ketvirto.
//   Ir t.t.
// 4.10. Tik tuos skaičius (number tipo duomenis), kuriuos padauginus iš 5, atsakymas gaunasi didesnis už 350.
// 4.11. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti kiek simbolių jis turi, pvz. "Start has 5 symbols".
// 4.12. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio raidę išskiriant brūkšniu ir paverčiant ją didžiąja raide, pvz.: "S-T-A-R-T".
// 4.13. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio pirmą ir trečią raidę pakeičiant brūkšniu (underscore), pvz.: "_t_rt";
// 4.14. Tik tekstą (string tipo duomenis), tačiau žodį parašant atvirkščiai, pvz.: vietoje "start" parašyti "trats";
// 4.15. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti tarp kokių narių masyve jis yra, pvz.: "Word obuolys is between -5564 and -51 in the array".


console.groupEnd()
