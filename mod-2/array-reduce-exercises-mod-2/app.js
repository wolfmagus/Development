const numArray = [1,2,3,4,5,6,7,8,9]
 //1.
const numTotal = numArray.reduce(function(final, num){
    final = final + num
    return final
 })
 console.log(numTotal)

 //2.*
 const numString = numArray.reduce(function(final, num){
    final = final.concat(num.toString())
    return final
 }, [])
 console.log(numString)

 var voters = [
   {name:'Bob' , age: 30, voted: true},
   {name:'Jake' , age: 32, voted: true},
   {name:'Kate' , age: 25, voted: false},
   {name:'Sam' , age: 20, voted: false},
   {name:'Phil' , age: 21, voted: true},
   {name:'Ed' , age:55, voted:true},
   {name:'Tami' , age: 54, voted:true},
   {name: 'Mary', age: 31, voted: false},
   {name: 'Becky', age: 43, voted: false},
   {name: 'Joey', age: 41, voted: true},
   {name: 'Jeff', age: 30, voted: true},
   {name: 'Zack', age: 19, voted: false}
]
//3.
 const voteCount = voters.reduce(function(final, voter){
    if(voter.voted){
       final++
    }
    return final
}, 0)
console.log(voteCount)

wishlist = [
   { title: "Tesla Model S", price: 90000 },
   { title: "4 carat diamond ring", price: 45000 },
   { title: "Fancy hacky Sack", price: 5 },
   { title: "Gold fidgit spinner", price: 2000 },
   { title: "A second Tesla Model S", price: 90000 }
]
//4.
const shoppingSpree = wishlist.reduce(function(final, item){
   return final + item.price
}, 0)
console.log(shoppingSpree)

var arrays = [
   ["1", "2", "3"],
   [true],
   [4, 5, 6]
]
//5.
const flattenArray = arrays.reduce(function(final, array){
   final = final.concat(array.toString())
   return final
 }, [])
 console.log(flattenArray)

 var voters = [
   {name:'Bob' , age: 30, voted: true},
   {name:'Jake' , age: 32, voted: true},
   {name:'Kate' , age: 25, voted: false},
   {name:'Sam' , age: 20, voted: false},
   {name:'Phil' , age: 21, voted: true},
   {name:'Ed' , age:55, voted:true},
   {name:'Tami' , age: 54, voted:true},
   {name: 'Mary', age: 31, voted: false},
   {name: 'Becky', age: 43, voted: false},
   {name: 'Joey', age: 41, voted: true},
   {name: 'Jeff', age: 30, voted: true},
   {name: 'Zack', age: 19, voted: false}
]
//6.*Figure out hot to print info in objects instead of number of objects
const agedVoterArray = arrays.reduce(function(final, voter){
   if(voter.voted === true && voter.age >= 18 && voter.age <= 25 ){
      final.youngPeople++
   } else if(voter.voted === true && voter.age >= 26 && voter.age <= 35){
      final = voter.voted
   } else if(voter.voted === true && voter.age >= 36 && voter.age <= 55){
      final = voter.voted
   }
   return final
 }, {})
 console.log(agedVoterArray)
 
//6. should produce a result similar to this 
//  peopleArray.sort(function(person1,person2){
//    if(person1 < person2) return -1;
//    else if(person1 > person2) 1
//    return 0;
// })