// ---------------  1 Функции
// Function Declaration может вызывать функции до того как ее создал
// function greet(name){
//     console.log('Привет - ' , name)
// }

// --------------- Function Expression
// создаем функцию и складываем в переменную
// const greet2 = function greet2(name){
//     console.log('Привет 2 - ', name)
// }
// // greet('Лена')
// // greet2('Тима')
// // console.dir(greet)

// ------------------- 2 Анонимный функции
// let counter = 0
// const interval = setInterval(function (){
//     if(counter === 5) {
//         clearInterval(interval) // clearTimeout
//     }else {
//         console.log(++counter)
//     }
// }, 1000)
//

//---------------  3 Стрелочные функции
// function greet(name){
//     console.log('Привет - ' , name)
// }
// const arrow = (name, age) =>{
//     console.log('Привет - ' , name, age)
// }
// const arrow2 = name => console.log(' Privet -', name)
//
// arrow2('Тимур')
//
// const pow2 = num => num ** 2
//
// console.log(pow2(9))

//------------------ 4 параметы по умолчание
// const sum = (a = 20, b = a + 2) => a + b // a = 20 b = 22
// console.log(sum(25,55))
// console.log(sum())
// function sumAll(...all){
//    let result = 0
//     for(let num of all){
//         result += num
//     }
//     return result
// }
// const res = sumAll(1,2,3,4,5,6,7,8,9)
// // console.log(res)

// -------------- Замыкания
// function createMember(name){
//     return function (lastName){
//         console.log(name + lastName)
//     }
// }
//
// const  LogWithLastName = createMember('Тима')
// console.log(LogWithLastName)
// greet('Tima')
// greet2('tima2')
// greet3('Tima3')
// function greet(name){
//     console.log('function1', name)
// }
// const greet2=function greet2(name){
//     console.log('function2', name)
// }
// const greet3 = (name) => {
//     console.log('function3', name)
// }
