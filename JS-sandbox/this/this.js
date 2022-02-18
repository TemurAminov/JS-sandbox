// function hello(){
//     console.log('Hello!', this)
// }
// const person = {
//     name:'Tima',
//     age:25,
//     sayHello:hello,
//     sayHelloWindow:hello.bind(this),
//     logInfo:function (job, phone){
//         console.group(`${this.name} info:`)
//         console.log(`name is ${this.name}`)
//         console.log(`name is ${this.age}`)
//         console.log(`Phone is${phone}`)
//         console.log(`Job is ${job}`)
//         console.groupEnd()
//     }
// }
// const lena={
//     name:'Elena',
//     age:23
// }
//  // person.logInfo.bind(lena,'Fronted', '89045014623')()
// // person.logInfo.call(lena,'Fronted', '89045014623')
// person.logInfo.apply(lena,['Fronted', '89045014623'])

// ===============
// const array=[1,2,3,4,5]
// Array.prototype.multBy=function (n){
//     return this.map(function (i){
//
//         return i * n
//
//     })
// }
// console.log(array.multBy(2) )
// console.log(array.multBy(5) )




