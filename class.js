// class Person {
//     type = 'human'
//     constructor(name) {
//         this.name=name
//     } greet(){
//         console.log(this.name +' Говорит Привет')
//     }
// }

// const max = new Person('Max')
// max.greet()
// console.log(max.type)
// console.log(max.__proto__ === Person.prototype)

// class Programmer extends Person{
//     constructor(name,job) {
//         super(name);
//         this._job = job
//     }
//     get job(){
//         return this._job.toLowerCase()
//     }
// set job(job){
//         if(job.length<2){
//             console.log('VALIDATION')
//         }else{
//             this._job = job
//         }
// } greet() {
//         super.greet()
//         console.log('Rewritten')
//     }
// }
// const frontend =new Programmer('Max', 'Frontend')
// // console.log(frontend)
// // frontend.greet()
// // console.log(frontend.job)
// frontend.job = 'Backend'
// // console.log(frontend.job)

// Static

// class Util {
//     static average(...args){
//         return args.reduce((acc, i)=> acc += i, 0) / args.length
//     }
// }
// const res = Util.average(1,1,2,3,5,8,13)
// console.log(res)
// // const util = new Util()
// // console.log(util.average(1,1,2,3,5,8,13))

// ES6 class

// const animal = {
//     name:'Animal',
//     age: 5,
//     hasTail: true
// }

// class Animal {
//     static type = 'Animal'
//     constructor(option) {
//         this.name = option.name,
//         this.age = option.age,
//         this.hasTail = option.hasTail
//     }
//     voice(){
//         console.log('I am Animal!')
//     }
// }
//
// // const animal = new Animal({
// //     name: 'Animal',
// //     age: 5,
// //     hasTail: true
// // })
//
// class Cat extends Animal{
//     static type = 'Cat'
//     constructor(option) {
//         super(option)
//         this.color = option.color
//     }
//     voice (){
//         super.voice()
//         console.log('I am Cat')
//     }
//     get ageInfo(){
//         return this.age * 7
//     }
//     set ageInfo(newAge){
//         this.age = newAge
//     }
// }
//
// const cat = new Cat ({
//     name: 'Cat',
//     age: 7,
//     hasTail: true,
//     color: 'black'
// })

// class Component {
//     constructor(selector) {
//         this.$el = document.querySelector(selector)
//     }
//     hide(){
//         this.$el.style.display = 'none'
//     }
//     show(){
//         this.$el.style.display = 'black'
//     }
// }
// class Box extends Component{
//     constructor(options) {
//         super(options.selector)
//         this.$el.style.width = this.$el.style.height = options.size + 'px'
//         this.$el.style.background = options.color
//     }
// }
// const box1 = new Box({
//     selector: '#box1',
//     size: 100,
//     color: 'red'
// })
// const box2 = new Box({
//     selector: '#box2',
//     size: 150,
//     color: 'black'
// })
// class Circle extends Box {
//     constructor(options) {
//         super(options);
//
//         this.$el.style.borderRadius = '50%'
//     }
// }
// const c = new Circle({
//     selector: '#circle ',
//     size: 90,
//     color: 'green'
// })

