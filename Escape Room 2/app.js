const readline = require("readline-sync")

// Greet the player
const name = readline.question("What is your name?")
console.log("Greetings " + name + "!" )

// Set up Global variables
let gameOver = false
let foundKey = false
let options = ["Put hand in hole", "Search the room", "Open the door"]


// Game loop
while(!gameOver){
    const userAnswer = readline.keyInSelect(options, "What will you do?: ")
    console.log(userAnswer)
    // Player dies and game exits.
    if(userAnswer === 0){
        console.log("You died, you silly Billy. Haven't you ever played Dark Souls?")
        gameOver = true
    // Response when user tries to cancel.
    }  else if(userAnswer === -1){
        console.log("You can not escape fate in this way. Please continue foolish one..")
        gameOver = false
    // User finds the key.
    }   else if(userAnswer === 1){
        console.log("You have found a key!")
        foundKey = true
        gameOver = false
    // User escapes the room and game ends.
    }   else if(userAnswer === 2 && foundKey === true){
        console.log("Eureka! The key opens the door. You have escaped the room. Congratulations!")
        gameOver = true
    // User tries to open door without key.
    }  else if(userAnswer === 2){
        console.log("The door is locked. Maybe there's a key around here somewhere.")
        gameOver = false

}

 
}