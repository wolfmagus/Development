let numArray = [1,2,3,4,5]

//1.
const doubleNumbers = numArray.map(num =>  num * 2)
console.log(doubleNumbers)

// 2. 
const stringNumbers = numArray.map(num =>  num.toString())
console.log(stringNumbers)


// 3. Requires Attention
const people = ["john", "JACOB", "jinGleHeimer", "schmidt"]

const upperCaseFirst = people.map(function(name){ 
    return name[0].toUpperCase() + name.slice(1).toLowerCase()

})
console.log(upperCaseFirst)


const celebs = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]
// 4.
const celebNames = celebs.map(function(celeb){ 
    
   return celeb.name
    
})
console.log(celebNames)

//5.
const goToMatrix = celebs.map(function(celeb){ 
    
    if(celeb.age >= 18){
        return `${celeb.name} can go to The Matrix.`
    } else if(celeb.age < 18){
        return `${celeb.name} is under age!`
    }
     
 })
 console.log(goToMatrix)

 //6.
 const nameAndAge = celebs.map(function(celeb){ 
    
    return `<h1>${celeb.name}</h1><h2>${celeb.age}</h2>`

 })
 console.log(nameAndAge)

