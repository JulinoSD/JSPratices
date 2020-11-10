/*----------------
Maps, Filter, Redux
-----------------*/
const several = [
    {
        name: 'boi',
        typ: 'animal',
        age: 'unknown'
    },
    {
        name: 'peixe',
        typ: 'animal',
        age: '12'
    },
    {
        name: 'alface',
        typ: 'vegetable',
    },
    {
        name: 'banana',
        typ: 'fruit'
    },
    {
        name: 'cabache',
        typ: 'vegetable'
    }
]
const reduse = [
    {
        name: 'boi',
        typ: 'animal',
        age: 'unknown',
        weight: 150,
    },
    {
        name: 'peixe',
        typ: 'animal',
        age: '12',
        weight: 15,
    },
    {
        name: 'alface',
        typ: 'vegetable',
        weight: 2,
    },
    {
        name: 'banana',
        typ: 'fruit',
        weight: 3,
    },
    {
        name: 'cabache',
        typ: 'vegetable',
        weight: 1.5,
    }
]

const newSeveral = several.filter((other) =>{
    return other.typ === 'animal'
})

const soft = several.map((Names) => {
    return Names.name
})
console.log(soft)

// console.log(several)

// console.log(newSeveral)

// const Age = several.map((yea) => {
//     return yea.age
// })

// console.log(Age)

// const forSeveral = several.forEach((Age)=>{
//     return Age.age
// })
// console.log(forSeveral)

// const redUce = reduse.reduce((total, red)=>{
//     console.log('------ Returning one value--------')
//     console.log(`O total é ${total.toFixed(2)}, e o valor é ${red}`)
//     return total + red.weight
// }, 0)
// const redUxe = reduse.reduce((total, red)=>{
//     console.log('------ Returning two values--------')
//     console.log(`O total é ${total.totWeight}, e o valor é ${total.totalAge}`)
//     return {
//         totalAge: total.totalAge + red.age,
//         totWeight: total.totWeight + red.weight,

//     }
// }, {totalAge: 0, totWeight: 0})


const Encad = reduse.filter((age)=>{
    return age.age
}).reduce((total, W)=>{
    return total + W.weight
}, 0)

console.log(Encad)

console.log('Such a beautyfull thing, things we love to see: Practices and more practices')
