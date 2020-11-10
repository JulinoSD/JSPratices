// console.log('Hello world')

// let h = 'Hello'
// let w = 'world suck'

// console.log('%s, %s', h, w)

// /*--------------------
// Reverse string
// --------------------*/
// let tri = 'Oi pai!'
// let inv = ""

// tri.split("").forEach((revi) => {
//     inv = revi + inv
// })

// console.log(inv)

// const num = new Date()
// console.log(num)
// console.log(typeof (num))
// console.log(`Day of de week: ${num.getDay()}`)
// console.log(`Full year: ${num.getFullYear()}`)
// console.log(`Day of de mmilliseconds: ${num.getMilliseconds()}`)
// console.log(`Time in milliseconds: ${num.getTime().valueOf(2)}`)

// /*------------------------
// Ternary operators
// ------------------------*/
// let status = 200
// const message = (status === 200) ? 'Ok! Great perform' : 'Still trying'

// const some = (status === 200) ? status + 200 : status + 1
// console.log(some)

// console.log(message)

// let name = 'Julino'


// if (name === 'julino') {
//     console.log(`${name} Segunda Dídimo is studing, so far`)
// }
// else if (!name === 'julino') {
//     console.log('My love in programmer is going to be Bigger, then i can imagine, sure, with a couple of pain')
// } else {
//     console.log('Great!')
// }

// // else {
// //     console.log(`Dídimo, ${name} Segunda, is going to be great programmer, sooonnn`)
// // }

// /*-----------------
// Switch statement
// ------------------*/

// const statos = 100

// switch(statos) {
//     case 200:
//         console.log('Ok, budy')
//         break
//     case 201:
//         console.log('Go ahead, great job')
//         break
//     case 100:
//         console.log('Its the perfect way to start')
//         break
//     default:
//         console.log('Set a statement number')
// }

// /*-------
// Arrays
// --------*/

// const r = ['Ola','vida','como vai', 'Poliana']
// let cont = 0

// while( cont < r.length) {
//     cont ++
//     const array = r[cont]
//     console.log('---------')
//     console.log(array)
// }
// console.log(r)

/*------------
    Loops
while, and for
------------*/

const num = [ 1, 2, 3, 4, 5, 6, 7]
let cont = 0
while(cont < num.length) {
    cont++
    let res = num[cont]
    console.log(res)
}

const en = [10, 3, 5, 7, 8, 4, 2, 1]

// for(let index = 0; index <= en.length; index++){
//     let vl = en[index]
//     // console.log(vl)
//     console.log(`A ordem dos números é: ${vl}`)
// }
/*--------------------------------------------- 
When we use the:
const fe = ['Julino', 'Segunda', 'Dídimo'] 
for(let vl in fe){
    console.log(vl)
}
the console will return the positions of arrays
e.g: 0, 1, 2: assuming that we have 3 positions
----------------------------------------------*/
// const fe = ['Julino', 'Segunda', 'Dídimo']

// for(const vl of fe){
//     console.log('enume: %s', vl)
// }

/*------------
Functions
Arrow function
------------*/

const add = (a, b) => {
    if(a > b) {
        a++
        b--
        console.log(a, b)
    }
    else if (a < b) {
        console.log(b/a)
    }
    else {
        console.log(b*a)
    }
    // return add
}
console.log('---- vendo ai ----')
console.log(add(20, 20))
