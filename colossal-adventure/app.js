const readlineSync = require("readline-sync");

// Greet the player
  const name = readlineSync.question("Greetings adventurer! What is your name?")

var goblinArray = [ 
        {
            name: "Lone Goblin", 
            hp: 10, 
            attackValue:Math.floor(Math.random() * 3)
            
        }, 
        {
            name: "Hob Goblin", 
            hp: 15, 
            attackValue:Math.floor(Math.random() * 5)
            
        },
        {
            name: "Goblin Champion", 
            hp: 25, 
            attackValue:Math.floor(Math.random() * 9)
            
        },
        {
            name: "Goblin Lord", 
            hp: 20, 
            attackValue:Math.floor(Math.random() * 7)
            
        }
    ]

//player stats and inventory
var player = {
    name: "goblinSlayer",
    hp: 50,
    attackValue: Math.floor(Math.random() * 5 + 3),
    inventory: []
        
}
    
// possible items player can find
var treasureArray = [ 
    {
        name: "Bomb", 
        attackValue: 10,   
    }, 
    {
        name: "Potion", 
    },
    {
        name: "Short Sword",
             
    }, 
    {
        name: "Drain Scroll",
            
    }
]
//Controls items player recieve at random after combat
function itemGenerator(){
    //Generates a random item from treasureArray and adds the item to player inventory
    var treasureDiceRoll = treasureArray[Math.floor(Math.random() * treasureArray.length)];
     console.log(treasureDiceRoll)
    player.inventory.push(treasureDiceRoll)
    console.log("You have gained the item " + treasureDiceRoll.name)
    //Removes sword and drain scroll after they are aquired once 
    if(treasureDiceRoll.name === "Short Sword" ){
        treasureArray.splice(2, 1)
        console.log(treasureArray)
    } else if( treasureDiceRoll.name === "Drain Scroll"){
        treasureArray.splice(3, 1)
        console.log(treasureArray)
    }

}

    //Controls the effects of items and allows player to use items
    //Prompt user to use potion or bomb
    function itemEffects(){
    items = ["Potion", "Bomb", "Sword", "Drain Scroll", "Inventory"],
    index = readlineSync.keyInSelect(items, "Use: Potion / Bomb / Sword / Drain Scroll / Inventory")
    //Potion Effect
    if(index === 0 && player.inventory.includes("Potion") > 0){
        console.log("You use a potion")
        player.hp = player.hp + 5
        console.log("Your hp is now " + player.hp)
    //Bomb effect
    } else if(index === 1 && player.inventory.includes("Bomb") > 0){
        console.log("You throw a bomb at the goblin")
        fightingGoblin.hp = fightingGoblin.hp - 8
        console.log("The goblin is exploded its HP is now " + fightingGoblin.hp)
    //Sword Effect
    } else if(index === 2){
        player.attackValue = Math.floor(Math.random() * 7 + 3)
        console.log("You draw your short sword " )
    //Drain Scroll effect
    } else if(index === 3){ 
        console.log("You steal VITALITY from the goblin ")
        fightingGoblin.hp = fightingGoblin.hp - 4
        console.log("Goblin hp is decreased to " + fightingGoblin.hp)
        player.hp = player.hp + 4
        console.log("Your hp increases to " + player.hp)
    //Inventory
    } else if( index === 4){
        console.log("- You peak into your pack and you see: " )
        // arr = [5, 6, 7, 8, 9]
        // arr[i] -> arr[]
        // arr.length
        /*
        var treasureArray = [ 
            {
                name: "Bomb", 
                attackValue: 10,   
            }, 
            {
                name: "Potion", 
            },
            {
                name: "Short Sword",
                    
            }, 
            {
                name: "Drain Scroll",
                    
            }
        ]

        console.log(player.inventory[0]) => {name: "bomb", attackValue: 10}
        console.log(player.inventory[0].name) => "bomb" 

        console.log(player.inventory[1]) => {name: "Potion"}
        console.log(player.inventory[1].name) => "Potion"
        
        
        */
        for(let i = 0; i < player.inventory.length; i++ ){
            console.log(player.inventory[i].name)
        }
    }
}

//Determines what monster you will encounter and sends result to combat loop 
function monsterSummoner(){
    console.log("You have entered goblin summoner function")
    //Generates random goblin
    var goblin = goblinArray[Math.floor(Math.random() * goblinArray.length)];

        if (goblin.name === "Lone Goblin"){
            console.log("You track a LONE GOBLIN in the area.")
            
        
        } else if(goblin.name === "Hob Goblin"){
            console.log("You track a HOBGOBLIN in the area.")
            
        
        } else if(goblin.name === "Goblin Champion"){
            console.log("You sense a GOBLIN CHAMPION nearby.")
            
        
        } else if(goblin.name === "Goblin Lord"){
            console.log("You sense a GOBLIN LORD in the area.")
            
    }
    
    return goblin
    
}

// //Determines whether or not the player escapes when they try to run
function run(){
    var runDiceRoll = Math.floor(Math.random() * 2)
    console.log(runDiceRoll)
        
    if (runDiceRoll === 0 ){
        console.log("You have successfully escaped")
           
    } else if (runDiceRoll === 1){
        console.log("You have failed to escaped")
            
        
         combatLoop()
        
    }
}

//Controls the assignment of hp values during a battle
function combatLoop(fightingGoblin){
    console.log("You have entered the combat loop")
    
    fightingGoblin = monsterSummoner()

    while(player.hp > 0 && fightingGoblin.hp > 0){
                
            console.log("YOU ATTACK THE " + fightingGoblin.name)
            var newGoblinHp = fightingGoblin.hp - player.attackValue
            fightingGoblin.hp = newGoblinHp
            console.log("~ The goblin's hp is now " + fightingGoblin.hp + " ~")
                        
            console.log("THE " + fightingGoblin.name + " ATTACKS YOU")
            var newPlayerHp = player.hp - fightingGoblin.attackValue
            player.hp = newPlayerHp  
            console.log("* Your hp is now " + newPlayerHp + " *")
        
            itemEffects()
               
    }
//Rewards player or prints dead screen
if(player.hp > 0 && fightingGoblin.hp <= 0){
    //console.log("You recieve an item")
    itemGenerator()
    console.log("You rest")
     player.hp = player.hp + 10
     console.log("You gain 10 HP. Your HP is now " + player.hp)
     
            
} else if(fightingGoblin.hp > 0 && player.hp <= 0){
        console.log("You are dead.")
            
    }
 }

//Allows the player to fight or run away
function combatChoice(){
    console.log("You have now enterd the combat choice")
    let fightOptions = ["fight", "run"]
    let index = readlineSync.keyInSelect(fightOptions, "Will you fight or run?");
    console.log(index)
    
    if(index === 0){
        // Calculate monster and player hp
        console.log("You've selected fight")

        combatLoop()
            
    } else if(index === 1){
        console.log("You try to run")
        run()
    }
    
}

//Determines whether or not you encounter a monster
function monsterEncounterTrigger(){
    console.log("I've entereted the monsterEncounter function")
    const encounterDiceRoll = Math.floor(Math.random() * 3 + 1);
    console.log("this is the random number: ", encounterDiceRoll)
    //let result

    if( encounterDiceRoll === 1){
        console.log("You have encountered a monster!")
        //monsterSummoner()
        combatChoice()
       
    } else if(encounterDiceRoll === 2){
        console.log("You have spotted something off in the bushes.")
        
    } else if(encounterDiceRoll === 3){
        console.log("You continue down the path.")
        
    }
     //return result
}

//Starts the game
function walk(){
if (readlineSync.keyInYN('Will you walk?')) {
    // 'Y' key was pressed.
    console.log("You begin to walk");
    console.log(treasureArray)
    monsterEncounterTrigger()
  } else {
    // Another key was pressed.
    console.log("Your journey awaits");
    // Do something...
  }
}

//let fightingGoblin = monsterSummoner()

while(player.hp > 0){
    walk()
}

























