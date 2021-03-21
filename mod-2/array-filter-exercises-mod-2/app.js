const numArray = [1,2,3,4,5,6,7,8,9]
//1.
const fiveOrMore = numArray.filter(function(num){
    if(num > 5){
        return true
    }
})

console.log(fiveOrMore)
//2.
const onlyEvens = numArray.filter(function(num){
    if(num % 2 === 0)
    return true
})

console.log(onlyEvens)
//3.
const stringArray = ["dog", "wolf", "by", "family", "eaten", "camping"]

const fiveLettersOrLess = stringArray.filter(function(word){
    if(word.length <= 5)
    return true
})
console.log(fiveLettersOrLess)
const clubMembers = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]
//4.
const memberPermit = clubMembers.filter(function(person){
    if(person.member === true)
    return true
})
console.log(memberPermit)

const celebArray = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]
//5.
const oldEnough = celebArray.filter(function(celeb){
 if(celeb.age >= 18)
 return true
})
console.log(oldEnough)