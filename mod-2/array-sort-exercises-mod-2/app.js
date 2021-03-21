const numArray = [34, 6, 22, 1, 6, 44, 3, 64, 234, 5]
//1.
numArray.sort(function(num1, num2){
    return num1 - num2
})
console.log(numArray)
//2.
numArray.sort(function(num1, num2){
    return num2 - num1
})
console.log(numArray)

const stringArray = ["dog", "wolf", "by", "family", "eaten"]
//3.
stringArray.sort(function(word1,word2){
    return word1- word2
})
console.log(stringArray)
//4.
stringArray.sort(function(word1,word2){
    if(word1 < word2) return -1;
    else if(word1 > word2) 1
    return 0;
})
console.log(stringArray)

const strangerArray = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]
 strangerArray.sort(function(stranger1, stranger2){
    return stranger1.age  - stranger2.age
 })
 console.log(strangerArray)