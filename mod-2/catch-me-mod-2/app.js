function sum(x, y){
    return x + y;
}
var f = true;
sum(1,f)

try{
    if(sum !== Number){
        throw "This is an error"
    }
}
catch(err){
    console.log(err)
}


// const actual = sum(10,1)
// const expected = 20

//     try{
//         if(actual !== expected){
//             throw new Error(`TEST FAILED: Expected ${expected}, but received ${actual}.`)
//         }
//         console.log(`TEST PASSED: ${expected} === ${actual}`)
//     }
//     catch(err){
//         console.log(err)
//     }


// console.log(sumTest())
// try{
//     sum(1,2)
// }

// catch(err){
//     console.log(err)
// }

const user = {username: "sam", password: "123abc"};
// const actual = user.
const expected = 20

function login(username, password){
  //check credentials
  
  try{
    if(username != "sam"){
        throw "Username or password invalid!"
    } if(password != "123abc"){
        throw "Username or password invalid!"
    }
    console.log("Did I console log?")
}
catch(err){
    console.log(err)
}
}

// console.log(login())

// function sum(num1, num2){
//     return num1 + num2
//}

// expected, actual
// const actual = sum(10, 10)
// const expected = 20

// if(actual !== expected){
//     throw new Error(`TEST FAILED: Expected ${expected}, but received ${actual}.`)
// } else {
//     console.log(`TEST PASSED: ${expected} === ${actual}`)
// }



// finally {
//    console.log("I am running no matter wha") 
// }
