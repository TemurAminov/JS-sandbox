// const cityField='city'
// const job='Frontend'
// const person={
//     age:26,
//     name:'Tima',
//     job,
//     [cityField]:'Taganrog',
//     'country-live': 'Russia',
//     print: () => 'Person',
//     toString(){
//         return Object
//             .keys(this)
//             .filter(key => key !== 'toSting')
//             .map(key => this[key])
//             .join(' ')
//     }
// }

/*console.log(person.toString())
console.log(person.print())
console.log(person)*/

// Method

// const first = {a: 1}
// const second ={b: 2}
// // console.log(Object.is(20,20))//true
// // console.log(Object.is(20,10))//false
// /*
// console.log(Object.assign({}, first, {
//     c:2,
//     d:3
// }))
// console.log(first)*/
// const obj = Object.assign({}, first, {
//     c:2,
//     d:3
// })
// // console.log(obj)
// console.log(Object.entries(obj))//[ [ 'a', 1 ], [ 'c', 2 ], [ 'd', 3 ] ]
// console.log(Object.keys(obj)) // [ 'a', 'c', 'd' ]
// console.log(Object.values(obj)) // [ 1, 2, 3 ]

// getters , setters

    const person = Object.create({
        calculateAge(){
            console.log('Age:', new Date().getFullYear() - this.birthYear )
        }
    },
        {
        name:{
            value: 'Timur',
            enumerable: true,
            writable:true,
            configurable: true,
        },
        birthYear:{
                value: 1997,
                enumerable: false,
                writable: false,
                configurable: false
            },
        age:{
            get() {
                return new Date().getFullYear() - this.birthYear
            },
            set(value) {
                document.body.style.background = 'black'
                console.log('set age', value)
            }
        }
    })
   // person.name = 'Maxsim'
    for(let key in person){
        if(person.hasOwnProperty(key)){
            console.log('key',key,person[key])
        }
    }