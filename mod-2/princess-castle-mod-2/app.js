class Jumpman{
    constructor(name, status, totalCoins, hasStar, gameActive){
        this.name = name
        this.status = status
        this.totalCoins = totalCoins
        this.hasStar = hasStar
        this.gameActive = gameActive
    }

    setName(namePicked){
        let nameDiceRoll = Math.floor(Math.random() * 2)
        
        if(nameDiceRoll === 0){
            namePicked = "Mario"
        } else if(nameDiceRoll === 1){
            namePicked = "Luigi"
        }
        this.name = namePicked
    }
    
    gotHit(){
    
        if(this.status === "star"){
            this.status = "powers"
            this.hasStar = false
        }else if(this.status === "powers"){
            this.status = "big"
        }else if(this.status === "big"){
            this.status = "small"
        }else if(this.status === "small"){
            this.status = "dead"
            this.gameActive = false
        }
        
    }

    gotPowerUp(){
         
        if(this.status === "powers"){
            this.status = "star"
            this.hasStar = true
        }else if(this.status === "big"){
            this.status = "powers"
        }else if(this.status === "small"){
            this.status = "big"
        }else if(this.status === "dead"){

        }
    }

    addCoin(){ 
        this.totalCoins++
    }

    print(){
        console.log(`Name:${this.name}\n`, `Status:${this.status}\n`,
         `Coins:${this.totalCoins}\n`, `Star Power:${this.hasStar}` )
        
         console.log(`game active: ${this.gameActive}`)
    }

}
let mario = new Jumpman("", "big", 0, false, true )
mario.setName("Mario")

function marioCondition(){    
var jumpDiceRoll = Math.floor(Math.random() * 3)

    if(jumpDiceRoll === 0){
        mario.gotHit()
        console.log("I got hit. Waaah!")
        mario.print()
    } else if(jumpDiceRoll === 1){
        mario.gotPowerUp()
        console.log("Powered up! Wahooo!")
        mario.print()
    } else if(jumpDiceRoll === 2){
        mario.addCoin()
        console.log("Got a coin. Let's a-go!")
        mario.print()
    } 
    
    if(mario.gameActive === false){
        clearInterval(intervalId)
    }
}
const intervalId = setInterval(marioCondition, 3000)


