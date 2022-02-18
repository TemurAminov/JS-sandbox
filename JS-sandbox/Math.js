
// 3 Math
// console.log(Math.E)//снование натуральных логарифмов, e, 2,718
// console.log(Math.PI)// Пи 3,141592653589793
// console.log(Math.sqrt(25))//возвращает квадратный корень числа, т.е.
// console.log(Math.pow(5,3))//возвращает в baseс тепень exponent, как в base^exponent
// console.log(Math.abs(-42))//возвращает абсолютное значение числа
// console.log(Math.max(42,12,23,11,422))// 422
// console.log(Math.min(42,12,23,11,422))//12
// console.log(Math.floor(2.9))// округляет в меншую сторону
// console.log(Math.ceil(3.9))// округляет в болшую сторону
// console.log(Math.round(4.9))// возвращает число , округленное к ближайшему целому
// console.log(Math.trunc(5.9))// возвращает целую часть числа путем удаления всех дробных
// console.log(Math.random())Псевдослучайное число с плавающей запятой от 0(включительно) до 1 (исключительно).

// 4 Example
// function getRandomBetween(min, max){
//     return Math.floor(Math.random()*(max-min)+min)
// }
// console.log(getRandomBetween(10, 42))

// BigInt
// console.log(typeof 90071992547409919999999)// Number
// console.log(typeof 90071992547409919999999n)// BigInt
// console.log(90071992547409919999999n - 9007199254740991999n)
// console.log(- 9007199254740991999n)
//console.log(90071992547409919999999.23421n)// error
// console.log(10n - 4)//error
// console.log(parseInt(10n)-4)
// console.log(10n-BigInt(4))
// console.log(5n/2n)//2n

// number
// const num = 42
// const float =42.42
// const pow=10e3
// console.log('MAX_SAFE_INTEGER : ', Number.MAX_SAFE_INTEGER)
// console.log('Math.pow 53:', Math.pow(2, 53)-1)
// console.log('MIN_SAFE_INTEGER : ', Number.MIN_SAFE_INTEGER)
// console.log('MAX_VALUE ', Number.MAX_VALUE)
// console.log('MIN_VALUE ', Number.MIN_VALUE)
// console.log('POSITIVE_INFINITY : ', Number.POSITIVE_INFINITY)
// console.log('NEGATIVE_INFINITY : ', Number.NEGATIVE_INFINITY)
// console.log('2 / 0' , 2/0)
// console.log(Number.NaN)// not a number
// console.log(typeof NaN)
// const weird=2/undefined
// console.log(Number.isNaN(weird))
// console.log(Number.isNaN(42))
// console.log(Number.isFinite(Infinity))
// console.log(Number.isFinite(42))
// const stringInt ='40'
// const stringFloat ='40.40'
// console.log(Number.parseInt(stringInt) + 2)
// console.log(parseInt(stringInt) + 1)
// console.log(Number(stringInt)+4)
// console.log(+ stringInt +5)
// console.log(parseFloat(stringInt)+6)
// console.log(+stringFloat + 2)

