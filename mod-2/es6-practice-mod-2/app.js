//task 0
const name = "John"
let age = 101

function runForLoop(pets) {
    var petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])

//task 1

const carrots = ["bright orange", "ripe", "rotten"]

let mapVegetables = arr => {
     return arr.map( carrot => ({ type: "carrot", name: carrot }))
    
}
console.log(mapVegetables(carrots))

//task 2
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

let filterForFriendly = arr => {
    return arr.filter( person => {
        return person.friendly})
    
}
console.log(filterForFriendly(people))

//task 3 pt 1

let  doMathSum = (a, b) => a + b

console.log(doMathSum(1,2))

//task 3 pt 2
var produceProduct = (a, b) => a * b

console.log(produceProduct(3,4))

//task 4
const janeDoe = [
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 100
    }
]

const personMessage = janeDoe.map( person => {
  
    if(person.firstName){
        return ` Hi ${person.firstName} ${person.lastName}, how does it feel to be ${person.age}?`
     } 
})
console.log(personMessage)

//task 5
const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 let filterForDogs = arr => arr.filter(animal => {if (animal.type === "dog") return true})
 
 console.log(filterForDogs(animals))
