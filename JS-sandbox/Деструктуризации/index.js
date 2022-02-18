function calcValue(a,b){
    return[
        a+b,
        undefined,
        a*b,
        a/b
    ]
}
const [sum,sub='вычитание нет',mult,...other]=calcValue(42,23)

// console.log(sum,mult,other,sub)

//Object
const person={
    name:'ttt',
    age:20,
    address:{
        country:'Cuba',
        city:'poco'
    }
}=person

const {name:firstName,age, sum78='no'}=person
console.log(firstName,age,sum78,address)
