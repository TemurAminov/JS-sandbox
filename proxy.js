const validator = {
    get(target, prop){
        return prop in target ? target[prop] : `Polya ${prop} v object`
    },
    set(target, prop, value){
        if(value.length > 2){
            Reflect.set(target,prop,value)
        }else{
            console.log('Dlina doljna bit bolwe 2x simbol. seycas '+ value.length)
        }
    }
}

const form={
    login:'tester',
    password:'12345'
}

const formProxy = new Proxy(form, validator)

// console.log(formProxy.login)
// console.log(formProxy.password)
// console.log(formProxy['username'])

// formProxy.password = '13'
// console.log(formProxy.password)

function log(message){
    console.log('[log]: ', message)
}
const proxy = new Proxy(log,{
    apply(target, thisArg, argArray) {
        if(argArray.length===1){
            Reflect.apply(target, thisArg, argArray)
        }else{
            console.log('Колличество аргументов не совпадает')
        }
    }
})
proxy('Custom message')
proxy('Message',2)

