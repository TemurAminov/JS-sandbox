// Объекты
// const person = {
//     name: 'Timur',
//     age: undefined,
//     isProgrammer: true,
//     language:['Rus', 'Uzb', 'Eng'],
//     'complex key': 'Complex Value',
//     ['key_'+(1+3)]: 'Computed key', // key_4
//     greet(){
//         // console.log(' Greet from person')
//     },
//     info() {
//         console.log('Информация о человеке ', this.name)
//     }
// }

// Context
// person.info()
// const logger = {
//     keys(){
//         console.log('Object keys: ', Object.keys[this])
//     },
//     keysAndValues(){
//         Object.keys(this).forEach(key=>{
//             console.log(`"${key}": ${this[key]}`)
//     })
//     }
// }
// logger.keysAndValues.call({a: 1, c: 2})
// const bound = logger.keys.bind(person)
// bound()
// logger.keys.call(person)
// console.log(person)
// Object.keys(person).forEach((key)=>{
//     console.log('key', key),
//         console.log('value:', person[key])
// }
// )
//
// for(let key in person){
//     if(person.hasOwnProperty(key)){
//         console.log('key', key)
//         console.log('value:', person[key])
//     }
// }
// console.log(person.name)
// const ageKey = 'age'
// console.log(person['ageKey'])
// console.log(person['complex key'])
// person.greet()
//
// person.age++
// person.language.push('by')
// // person['key_4']= undefined
// delete person['key_4']
//
// console.log(person)
// console.log(person['key_4'])
// const name = person.name
// const age = person.age
// const language = person.language
// const {name, age: personAge = 10, language} = person

