
/*
const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Success')
    },1000)
})
*/

// const delay = ms => new Promise(((resolve, reject)=>{
//     setTimeout(() => resolve(`Done! ${ms}`),ms)
// } ))
/*

delay(1000)
    .then(data => delay(500))
    .then(data=> console.log(data))
    .catch(err=>console.log(err))
    .finally(()=>console.log('Finally'))
*/

/*
async function asyncDelay(){
    try{
        const data = await delay(2000)
        console.log(data)
    }catch(e){
        console.log('Error1', e)
    }
}
asyncDelay()
*/

//01.02.2022
// console.log('Start')
    /*
    Promise.all([
        delay(1000),
        delay(500),
        delay(2000)
    ]).then(data=>console.log(data))
    Promise.race([
        delay(1000),
        delay(500),
        delay(2000)
    ]).then(data=>console.log(data))
    */

// console.log('Request data..')
//     const p = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             console.log('Preparing data....')
//             const backendData ={
//                 server: 'awe',
//                 port: 2000,
//                 status: 'stady'
//             }
//             resolve(backendData)
//         },2000)
//     })
//
//     p.then(data =>{
//         return new Promise((resolve, reject)=> {
//             setTimeout(() => {
//                 data.modified = true
//                 resolve(data)
//             },2000)
//         })
//     })
//         .then(clientData=>{
//         clientData.fromPromise = true
//         return clientData
//     }).then(data => {
//         console.log('Modified', data)
//     })
//         .catch(err => console.error('Error:', err))
//         .finally(() => console.log('Finally'))

    // const sleep = ms => {
    //     return new Promise(resolve => {
    //         setTimeout(() => resolve(),ms)
    //     })
    // }
    // // sleep(2000).then(() => console.log('After 2 sec'))
    // // sleep(3000).then(() => console.log('After 3 sec'))
    // Promise.all([sleep(2000), sleep(3000)]).then(() => {
    //         console.log('All promises')
    //     })
    // Promise.race([sleep(2000), sleep(3000)]).then(() => {
    //         console.log('Race promises')
    //     })



