//Методы массивов (forEach, map, filter, reduce, find, findIndex)
    const people=[
        {name:'Vladilen',age:25,budget:40000},
        {name:'Elena',age:17,budget:5000},
        {name:'Igor',age:45,budget:1640},
        {name:'Mixail',age:58,budget:7800},
        {name:'Vasilisa',age:12,budget:4450},
        {name:'Victor',age:35,budget:300}
    ]

    // for (let i=0;i<people.length;i++){
    //     console.log(people[i])
    // }
    // for (let person of people){
    //     console.log(person)
    // }

// ForEach

// people.forEach(function (person){
//     console.log(person)
// })
// people.forEach(person => console.log(person))

// Map

// // const newPeople =people.map(person =>`${person.name} (${person.age})`)
// const newPeople =people.map(person =>person.age*3)
// console.log(newPeople)

//Filter

// const adults=[]
// for (let i=0;i<people.length;i++){
//     if (person[].age >= 18){
//         adults.push(people[i])
//     }
// }
// const adults = people.filter(person=>{
//     if(person.age>=18){
//         return true
//     }
// })
// const adults = people.filter(person => person.age>=18)
// console.log(adults)

//Reduce

// let amount = 0
// for (let i=0;i<people.length;i++){
//     amount += people[i].budget
// // }
//     let amount = person.reduce((total,person)=>{
//         return total + person.budget
//     },0)
// let amount = person.reduce((total,person)=>total + person.budget)
// console.log(amount)

// Find

// const igor = people.find(person => person.name ==='Igor')
// console.log(igor)

// FindIndex

// const igor = people.findIndex(person => person.name ==='Igor')
// console.log(igor)

//=============================

// const amount = people
//     .filter(person=>person.budget > 3000)
//     .map(person => {
//         return{
//             info:`${person.name} (${person.age})`
//             budget:Math.sqrt(person.budget)
//         }
//     })
//     .reduce((total,person)=>total+person.budget,0)
// console.log(amount)

// массивы

// const cars = ['Mazda', 'Ford', 'Bmw', 'Mers']
// const pow2 = num => num ** 2
// const people = [
//     {name: 'Timur', budget: 4200},
//     {name: 'Elena', budget: 3500},
//     {name: 'Victoria', budget: 1000}
//     ]
// const allBudget = people
//     .filter(person => person.budget>2000)
//     .reduce((acc, person)=> {
//         acc+= person.budget
//         return acc
//     }, 0 )
// console.log(allBudget)
// const fib = [1, 2, 3, 5, 11, 12, 5, 8]

// const pow2 = num => num ** 2
// const pow2Fib = fib.map(pow2)
// const FilteredNumbers = pow2Fib.filter(num => num > 20)
// console.log(pow2Fib)
// console.log(FilteredNumbers)

// Method

// const cars = ['Mazda', 'Ford', 'Bmw', 'Mers']
// cars.push('Reno') // .push принимает в себя какой либо элеменет который мы хотим положить в массив ,
// // это тот обект который мутировать объект
// cars.unshift('Volvo') //складывает в начало массива
// const firstCar = cars.shift()// удаляет первый элемент в массив
// const lastCar = cars.pop()// удаляет последний элемент в массиве
// console.log(firstCar) // возвращает первый элемент массива
// console.log(lastCar)// возврашает последний элемент из массива
// console.log(cars) // вывод в консол
// console.log(cars.reverse())// reverse переворачивает массив с конца
// console.log(cars)
// const Index = cars.indexOf('Ford')
// cars[index] = 'Porsche'
// console.log(cars)

// const indices =['index = a']
// const array = ['a','d','b','d','a','c','d','a','d','b']// b=2 , a = 3 d = 4
// const array1=[1,5,6,4,9,10]
// const sum = array.concat(array1)
// const element = 'd'
// let idx = array.indexOf(element)
// while(idx !== -1){
//     indices.push(idx)
//     idx = array.indexOf(element, idx +1)
// }
// console.log(indices)
// console.log('concat():',sum)
// console.log('sort():',array.sort())//сортирует элементы массивана месте
// console.log('join():',array.join())// создает и возвращает новую строку путем объединения всех элементов массива
// console.log('lastIndexOf():',array.lastIndexOf('c'))//возвращает последний индекс
// console.log('pop():',array.pop())//удаляет последний элемент из массива и возвращает этот элемент
// console.log('push():',array.push('hello men'))//добавляет один или несколько элементов в конец массива и возвращает новую длину массива.
// console.log('revers():',array.reverse())//переворачивает массивна месте
// console.log('shift():',array.shift())//удаляет первый элемент из массива и возвращает этот удаленный элемент.
// console.log('toString():',array.toString())//возвращает строку, представляющую указанный массив и его элементы
// array.unshift('g','s')
// console.log('unshift():',array)

// let findedPerson
// for(const person of people){
//     if(person.budget === 3500){
//         findedPerson = person
//     }
// }
// console.log(findedPerson)
// const index = people.findIndex(function (person){
//     return person.budget === 3500
// })

// const person = people.find(function (person){
//     return person.budget === 3500
// })
// const person = people.find((person => person.budget === 3500))
// console.log(person)

// const upperCaseCars = cars.map(car =>{
//     return cars.toUpperCase
// })
// const pow2 = num => num ** 2
// const sqrt = num => Math.sqrt(num)
// const now2Fib = fib.map(pow2).map(Math.sqrt)
// console.log(now2Fib)

// Задача 1
// split метот делит строчку и в итоги возврашает нам массив
// метот reverse переворачивает массив
// join собирает в строчку массив
// const text = ' Привет , мы изучаем JavaScript'
// const  reverseText = text.split(' ').reverse().join('')
// console.log(reverseText)