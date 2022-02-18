// Rest

/*function average(arr){
    return arr.reduce((acc, i)=> acc += i, 0) / arr.length
}
console.log(average([10,20,30,40]))*/

/*function average(...args ){
    return args.reduce((acc, i)=> acc += i, 0) / args.length
}
console.log(average(10,20,30,40,50))*/
/*
function average(){
    return Array.from(arguments) .reduce((acc, i)=> acc += i, 0) / arguments.length
}
console.log(average(10,20,30,40,50))
*/

// Spreed

/*
const array = [1,2,3,5,8,13]
console.log(...array)
console.log(Math.max(...array))//13
console.log(Math.min(...array))//1
console.log(Math.max.apply(null,array))//13

const fib=[56,...array, ...array]
console.log(fib)
*/

// Destructuring

//const array = [1,undefined,3,5,8,13]
// const [a,b,...c]=array
// console.log(a,b,c)
// const [a,,c] =array
// console.log(a,c)

// Object

/*
const address={
    country:'Russia',
    city:'Moskva',
    //street:'Lenina',
    contact:function (){
        return `${this.country}, ${this.city}, ${this.street}`
    }
}
const {city,country,street='Tverskaya', contact:addressContact}=address
console.log(addressContact.call(address))
console.log(street)
console.log(address.contact())
*/

// const address={
//     country:'Russia',
//     city:'Moskva',
//     street:'Lenina',
//     contact:function (){
//         return `${this.country}, ${this.city}, ${this.street}`
//     }
// }
// const {city,...rest}=address
// console.log(city)
// console.log(rest)
// const newAddress = {...address, street: 'Tverskaya', code:1234, name:'Tima',lastName:'Aminov'}
// console.log(newAddress)

// spread 6.02.2022

// const array=[1,5,7,9,10,0,23,5,4]
// const array1 = ['name1','name2','name3']
// const array2 = ['name4','name5','name6','name7']
// const array3 = [...array2,'age',...array1]
//
// console.log(array3)
// console.log(Math.max(...array))
// console.log(Math.min(...array))
//
// const mas={
//     name:12,
//     age:15,
//     street:45,
//     city:1
// }
// const mas2={
//     name1:45,
//     age1:7,
//     street1:6,
//     city1:5
// }
// console.log({...mas})
// console.log({...mas,...mas2})

/// Practice
// const num=[5,8,9,3,12,35,1]
// console.log(Math.max(5,45,12,7,9,2))
// console.log(Math.max.apply(null,num))
// const div=document.querySelectorAll('div')
// const nodes=[...div]
// console.log(nodes)
// console.log(div,Array.isArray(div))
// console.log(nodes,Array.isArray(nodes))
// console.log(div.map())

//Rest
function sum(a,b, ...rest){
    return a+b+rest.reduce((a,i)=> a+i,0)
}
const num=[1,2,3,4,5,6,7,8,9,10]
// console.log(sum(...num))
// const a =num[0]
// const b =num[1]
// const [a,b,...other]=num
//
// console.log(a,b,other)
const person={
    name:'Max',
    age:26,
    city:'Tokyo',
    street:'asdafdsa'
}
const {name,age,...address}=person
console.log(name,age,address)






