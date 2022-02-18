
// class Student{
//     constructor(name) {
//         this.name = name
//     }
//     greet(){
//         console.log(`Hi! My name is ${this.name}`)
//     }
// }
// class ProtoStudent{
//     universitv = 'Oxvord'
// }
// const student = Reflect.construct(Student,['Igor'], )
// // const student = Reflect.construct(Student,['Igor'], ProtoStudent)
// // console.log(student.__proto__ === ProtoStudent.prototype)
// Reflect.apply(student.greet,{name:'Tester'},[])
// console.log(Reflect.ownKeys(student))
// Reflect.preventExtensions(student)// block student
// student.age=25
// console.log(Reflect.isExtensible(student))//false
// console.log(student)

