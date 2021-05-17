import React, {Component} from "react"
import style from "./style.css"

class DiceBox extends Component {
    constructor() {
        super()
        this.state={
            dice:[0,0,0,0,0]
        }
        this.diceRoll = this.diceRoll.bind(this) 
    }
 
    diceRoll(){
        this.state.dice.map(
                () =>{
                this.setState({
                    dice: [
                        Math.floor(Math.random() * 6 + 1),
                        Math.floor(Math.random() * 6 + 1),
                        Math.floor(Math.random() * 6 + 1),
                        Math.floor(Math.random() * 6 + 1),
                        Math.floor(Math.random() * 6 + 1)
                    ]
            })
        }
    )      
} 

     render() {
        return(
            <div >
                <h1 className="padding">{  this.state.dice  }</h1>
                
                <button onClick={this.diceRoll}>Roll the dice</button>
            </div>
        )
    }    

}


// function DiceBox(){
//     return(
//         <div>
//             <Die />
//             <Die />
//             <Die />
//             <Die />
//             <Die />

            
            
//         </div>
//     )
// }
// class DiceBox extends Component{
//     constructor() {
//         super()
//         this.state={
//             dice:[0,0,0,0,0]
//         } 
//         this.diceRoll = this.diceRoll.bind(this)
//     }
 
// //     diceRoll(){
// //         this.setState({
// //             dice: [
// //                 Math.floor(Math.random() * 7),
// //                 Math.floor(Math.random() * 7),
// //                 Math.floor(Math.random() * 7),
// //                 Math.floor(Math.random() * 7)
// //                 ]
// //         })
// //         //console.log(this.state.dice)
// // } 

//     diceRoll=() => {
//                 this.setState({
//                     dice: [
//                         Math.floor(Math.random() * 7),
//                         Math.floor(Math.random() * 7),
//                         Math.floor(Math.random() * 7),
//                         Math.floor(Math.random() * 7)
//                         ]
//                 })
//                 //console.log(this.state.dice)
//     }  

    
//     render() {

//         return(
//             <div>
//                 {this.state.dice.map(die => <Die num={die} />)}
//                 <button onClick={() =>this.diceRoll}>Roll the dice</button>
//             </div>
//         )
//     }    

// }

export default DiceBox