var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

const oldEnough = peopleArray.filter(function(person){
    if(person.age >= 18)
    return true
   })
   //console.log(oldEnough)

   let oldEnough2 = oldEnough

   //console.log(oldEnough2)


   const sortOldEnough = oldEnough2.sort(function(person1, person2){
    if(person1.lastName < person2.lastName) return -1;
    else if(person1.lastName > person2.lastName) 1
    return 0;
})
//console.log(sortOldEnough)

let sortOldEnough2 = sortOldEnough

const oldEnoughList = sortOldEnough2.map(function (person){
  
    if(person.firstName){

      return `<li>${person.firstName} ${person.lastName} is ${person.age}</li>`
     
     } 

})
console.log(oldEnoughList)

// peopleArray.sort(function(person1,person2){
//     if(person1 < person2) return -1;
//     else if(person1 > person2) 1
//     return 0;
// })
// console.log(peopleArray)