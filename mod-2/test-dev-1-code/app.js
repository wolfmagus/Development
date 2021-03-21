const readlineSync = require('readline-sync');
const playerName = readlineSync.question("input player one's name ")
const walkingTheTown = 'w'
let player = {
    name: playerName,
    hp: 10
}
readlineSync.question('Hello ' +
    `${player.name}` +
    ' welcome to Colossal Adventure type' + +' to walk and explore the town > ')
// function walk() {
//     const value = Math.floor((Math.random() * 5) + 1);
//     if (playerAction === 'w') {
//         if (value === 4) {
//             wildEnemy()
//             encounterEnemy()
//         } else {
//             console.log('You made it... press "w" to keep walking')
//         }
function walk() {
    readlineSync.question(`
            Hello ${playerName}
            welcome to Clossal Adventure type "w"
            to walk and explore the town `);
    const value = randomNum(5)
    if (playerAction === 'w') {
        if (value === 4) {
            wildEnemy()
            encounterEnemy()
        } else {
            console.log('You made it... press "w" to keep walking')
        }
    }
    return value
}
function randomNum(max) {
    return Math.floor(Math.random() * max)
}
function randomNumberInRange(min, max) {
    //max value = 8 Min value = 3
    const adjustedMin = min - 1;
    const adjustedMax = max - 1;
    return Math.floor(Math.random() * (adjustedMax - adjustedMin) + adjustedMin)
}
function wildEnemy() {
    const arr = [wildEnemyBill = 'Wild Bill', wildEnemyJesseJames = 'Jessie James', wildEnemyTheKid = 'Billy the Kid']
    const enemyIndex = randomNum(arr.length)
    return arr.enemyIndex
}
function encounterEnemy() {
    const playerAction = readlineSync.question('You can either attack or run. Enter A to attack and R to run.')
    if (playerAction === 'A') {
        attack()
    } else {
        run()
    }
}
function attack() {
    const damage = randomNumberInRange(3, 9)
    player.hp - damage
    encounterEnemy()
    isDead()
    return damage
}
function run() {
    randomNum(1, 2)
    if (randomNum < 2) {
        console.log(enemyIndex + 'Has caugt you...' + 'Prepare for battle.')
        attack()
    } else {
        walk()
    }
}
function isDead(hp, damage) {
    if (player.hp <= 0) {
        console.log("Your dead! " + "You messed up " + `
                    $ { enemyIndex }
                    ` + " killed you!")
    } else {
        console.log("Your still alive" + `${enemyIndex}` + `
                    took $ { damage }
                    ` + " from you")
    }
}