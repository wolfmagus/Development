const readlineSync = require("readline-sync");
let currentPlayerHp = [];
let currentMonsterHp = [];
const walkOption = ["Start walking"]
// const goblinAttackDiceRoll = goblinAttackAssignment()
const runDiceRoll = Math.floor(Math.random * 3)
let run = false;
let fight = false;


  // Greet the player
  const name = readlineSync.question("Greetings adventurer! What is your name?")

const goblinArray = [ 
        {
            name: "loneGoblin", 
            hp: 10, 
            attackValue: Math.floor(Math.random() * 3)
        }, 
        {
            name: "hobGoblin", 
            hp: 15, 
            attackValue: Math.floor(Math.random() * 5)
        },
        {
            name: "goblinChampion", 
            hp: 25, 
            attackValue: Math.floor(Math.random() * 9)
        },
        {
            name: "goblinLord", 
            hp: 20, 
            attackValue: Math.floor(Math.random() * 7)
        }
    ]

    const player = {
        name: "goblinSlayer",
        hp: 50,
        attackValue: Math.floor(Math.random * 8)

    }

function combatLoop(){
    console.log("You have now enterd the combat loop")
    let fightOptions = ["fight", "run"]
    let index = readlineSync.keyInSelect(fightOptions, "Will you fight or run?");
    console.log(index)
    if(index === 0){
        // Calculate monster and player hp
        console.log("You've selected fight")
        console.log(monsterSummoner())
        
    } else if(index === 1){
        console.log("You try to run")
    }

}
//Determines what monster you will encounter and sends result to combat loop
function monsterSummoner(){
    console.log("You have entered goblin summoner function")
    var goblin = goblinArray[Math.floor(Math.random() * goblinArray.length)];
    
        if (goblin === "loneGoblin"){
            console.log("Lone goblin has appeared")
        
        } else if(goblin === "hobGoblin"){
            console.log("Hob goblin has appeared")
        
        } else if(goblin === "goblinChampion"){
            console.log("Goblin champion has appeared")
        
        } else if(goblin === "goblinLord"){
            console.log("Goblin lord has appeared")
            
    }
    
    return goblin
    combatLoop()
}

//Determines whether or not you encounter a monster
function monsterEncounterTrigger(){
    console.log("I've entereted the monsterEncounter function")
    const encounterDiceRoll = Math.floor(Math.random() * 3 + 1);
    console.log("this is the random number: ", encounterDiceRoll)
    //let result

    if( encounterDiceRoll === 1){
        console.log("You have encountered a monster!")
        combatLoop()
    } else if(encounterDiceRoll === 2){
        console.log("You have spotted something off in the bushes.")
        walk()
    } else if(encounterDiceRoll === 3){
        console.log("You continue down the path.")
        walk()
    }
     //return result
}

//Starts the game
function walk(){
if (readlineSync.keyInYN('Will you walk?')) {
    // 'Y' key was pressed.
    console.log("You begin to walk");
    monsterEncounterTrigger()
  } else {
    // Another key was pressed.
    console.log("Your journey awaits");
    // Do something...
  }
}
walk()

// function goblinAttackAssignment(){

//     if(monsterGenerator === loneGoblin){
//         goblinAttackDiceRoll = Math.floor(Math.random * 3)
//     } else if(monsterGenerator === hobGoblin){
//         goblinAttackDiceRoll = Math.floor(Math.random * 5)
//     } else if(monsterGenerator === goblinChampion){
//         goblinAttackDiceRoll = Math.floor(Math.random * 9)
//     } else if(monsterGenerator === goblinLord){
//         goblinAttackDiceRoll = Math.floor(Math.random * 7)
//     }
//     return goblinAttackDiceRoll
// }

// //Manages goblin lord's hp
// function goblinLord(){
//     let goblinHp = 20;
//     const playerAttackDiceRoll = Math.floor(Math.random * 6)

//     for(let goblinHp = 20; goblinHp > 0; goblinHp - playerAttackDiceRoll){

//     }
// }

// //Manages goblin's hp
// function loneGoblin(){
//     let goblinHp = 10;
//     const playerAttackDiceRoll = Math.floor(Math.random * 6)

//     for(let goblinHp = 10; goblinHp > 0; goblinHp - playerAttackDiceRoll){

//     }
// }

// //Manages hobgoblin's hp
// function hobGoblin(){
//     let goblinHp = 15;
//     const playerAttackDiceRoll = Math.floor(Math.random * 6)

//     for(let goblinHp = 15; goblinHp > 0; goblinHp - playerAttackDiceRoll){

//     }
// }

// //Manages goblin champions's hp
// function goblinChampion(){
//     let goblinHp = 30;
//     const playerAttackDiceRoll = Math.floor(Math.random * 6)

//     for(let goblinHp = 30; goblinHp > 0; goblinHp - playerAttackDiceRoll){

//     }
// }


// //manages player's hp
// function playerHpCounter(){
// let playerHp = currentPlayerHp
// const goblinAttackDiceRoll = Math.floor(Math.random * 9)

// for(let playerHp = currentPlayerHp; currentPlayerHp > 0; currentPlayerHp - goblinAttackDiceRoll){

//     }
// }

// refactor monster generator function to return an object of a random monster 
// const monstersArr = [ 
//     {
//         name: "monster1", 
//         hp: 100, 
//         attackValue: Math.floor(Math.random * 3)
//     }, 
//     {
//         name: "monster2", 
//         hp: 100, 
//         attackValue: Math.floor(Math.random * 3)
//     }
//     {
//         name: "monster3", 
//         hp: 100, 
//         attackValue: Math.floor(Math.random * 3)
//     }
//     {
//         name: "monster4", 
//         hp: 100, 
//         attackValue: Math.floor(Math.random * 3)
//     }
// ]
/*
monster object example: 
    const monsterObj = {
        name: "somename", 
        hp: 100,
        attackvalue: Math.floor(Math.random * 3)
    }
*/ 

// if you want to check the name of the monster in an if statement, 
// if(monsterObj.name === "somename") {
//      // do something here 
// }

// 
// "loneGoblin" 
//

//     function walk(){
//     let startWalking = readlineSync.keyInSelect(walkOption, "Will you start walking? ")

//     if(startWalking === 1){
//         console.log("You start walking along the path")
//         monsterEncounterTrigger()
//     }
// }

// do{
//     walk()
// }
// while (currentPlayerHp > 0 )

//Game Loop
// while(currentPlayerHp > 0){
//     walk()
// }

// function combatLoop(){

//     let fightOptions = ["fight", "run"],
//     index = readlineSync.keyInSelect(fightOptions, "Will you fight or run?");

//     for(goblinAttackRoll, playerAttackRoll, hp; playerHp > 0 || goblin > 0; playerHp - goblinAttackDiceRoll, hp - playerAttackDiceRoll){
//         "Goblin attacks the player. Your hp is now " + playerHp + "<br>";
//         "Player attacks the goblin. Goblin hp is now " + hp + "<br>";
//         }
//     if(run = true){
//         runDiceRoll
//         }
//     }
























