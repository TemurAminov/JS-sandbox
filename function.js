function sum(a,b){
    return a+b
}
function cube(a){
    return a**a
}

// const sum=(a,b)=>{return a+b}
// const sum2=(a,b)=> a+b
//
// const cube= (a)=>{return a**3}
// const cube2 = a => a**3
//
// console.log('cube2', cube2(5))
// console.log('cube',cube(2))
//
// console.log('sum',sum(45,5))
// console.log('sum2',sum2(25,15))
// setTimeout(()=> console.log('After 2 second'),2000)

// Context

// function log(){
//     console.log(this)
// }
// const arrowLog = ()=> console.log(this)
// const person = {
//     name:'Maks',
//     age:25,
//     log:log,
//     arrowLog:arrowLog,
//     delayLog:function (){
//         const self = this
//         global.setTimeout( () => {
//                 console.log(this.name+' '+ this.age)
//         },500)
//     }
// }
//
// // person.arrowLog()
// person.delayLog()

