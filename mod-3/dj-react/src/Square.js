import React, {Component} from "react"
import style from "./style.css"
//const colors =[ white, white, white, white]

class Square extends Component{
    
    constructor() {
        super()
        this.state={
            colors: ["white", "white", "white", "white"],
            borders:["1px solid #000", "1px solid #000", "1px solid #000", "1px solid #000"]
        }
        this.blackOrWhite = this.blackOrWhite.bind(this)
        this.topHalfPurple = this.topHalfPurple.bind(this)
        this.bottomLeftBlue = this.bottomLeftBlue.bind(this)
        this.bottomRightBlue = this.bottomRightBlue.bind(this)
        this.yellowBorder = this.yellowBorder.bind(this)
        this.greenBorder = this.greenBorder.bind(this)
        this.pinkBorder = this.pinkBorder.bind(this)
        this.redBorder = this.redBorder.bind(this)
    }
    //add if not white or black
    blackOrWhite(){
        this.state.colors.map(
         (color) => {   
        if(color === "white"){
            this.setState({
                colors: ["black", "black", "black", "black"]
            })
            return
        } if(color === "black"){
            this.setState({
                colors: [ "white", "white", "white", "white"]
            })
            return
            } if(color !== "white"||"black"){
                this.setState({
                    colors: [ "white", "white", "white", "white"]
                })
            }
        }
    )
    const audio1 = document.getElementsByClassName("audio-element1")[0]
    audio1.play()
       //return console.log(this.state.colors)
    }   

    topHalfPurple(){
        this.state.colors.map(
            (color) => {
                if(color !== "purple"){
                    this.setState(prevState =>{
                        return {
                            colors:["purple","purple",prevState.colors[2], prevState.colors[3]]
                        }
                    }) 
                } 
            }
        )
    
    }

    bottomLeftBlue(){
        this.state.colors.map(
            (color) => {
                if(color){
                    this.setState(prevState =>{
                        return{
                            colors:[prevState.colors[0], prevState.colors[1], "blue", prevState.colors[3]]
                        }
                })
            }
        }
    )
}

bottomRightBlue(){
    this.state.colors.map(
        (color) => {
            if(color){
                this.setState(prevState =>{
                    return{
                        colors:[prevState.colors[0], prevState.colors[1], prevState.colors[2], "blue" ]
                    }
            })
        }
    }
)
}

yellowBorder(){
    this.state.borders.map(
        (border) => {
            if(border){
                this.setState(prevState =>{
                    return{
                        borders:["10px solid #ffff66", prevState.colors[1], prevState.colors[2], prevState.colors[3] ]
                    }
                })
            }
        }
    )
}

greenBorder(){
    this.state.borders.map(
        (border) => {
            if(border){
                this.setState(prevState =>{
                    return{
                        borders:[prevState.colors[0], "10px solid #66ff33", prevState.colors[2], prevState.colors[3] ]
                    }
                })
            }
        }
    )
}

pinkBorder(){
    this.state.borders.map(
        (border) => {
            if(border){
                this.setState(prevState =>{
                    return{
                        borders:[prevState.colors[0], prevState.colors[1], "10px solid #ff99cc", prevState.colors[3] ]
                    }
                })
            }
        }
    )
}

redBorder(){
    this.state.borders.map(
        (border) => {
            if(border){
                this.setState(prevState =>{
                    return{
                        borders:[prevState.colors[0], prevState.colors[1], prevState.colors[2], "10px solid #ff0000" ]
                    }
                })
            }
        }
    )
}

    render() {

        return(
            
            <div className="grid">
               
                <div 
                    style={
                        {
                            display:"block", 
                            width:"200px", 
                            height:"200px", 
                            border:this.state.borders[0], 
                            background: this.state.colors[0]
                }}>
                    <audio className="audio-element1">
                            <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"></source>
                    </audio>
                </div>

                <div 
                    style={
                        {
                            display:"block", 
                            width:"200px", 
                            height:"200px", 
                            border:this.state.borders[1], 
                            background: this.state.colors[1]
                }}>
            
                </div>
                <div 
                    style={
                        {
                            display:"block", 
                            width:"200px", 
                            height:"200px", 
                            border:this.state.borders[2], 
                            background: this.state.colors[2]
                }}>
                </div>
                <div 
                    style={
                        {
                            display:"block", 
                            width:"200px", 
                            height:"200px", 
                            border:this.state.borders[3], 
                            background: this.state.colors[3]
                }}>
                </div>

                <button onClick={this.blackOrWhite}>Change Black or White</button>
                <button onClick={this.topHalfPurple}>Change top to purple</button>
                <button onClick={this.bottomLeftBlue}>Change bottom left blue</button>
                <button onClick={this.bottomRightBlue}>Change bottom right blue</button>
                <button onClick={this.yellowBorder}>Change yellowBorder</button>
                <button onClick={this.greenBorder}>Change greenBorder</button>
                <button onClick={this.pinkBorder}>Change pinkBorder</button>
                <button onClick={this.redBorder}>Change redBorder</button>
                
            </div>
        )
    }

    //style={{display:block, width:"300px",height:"300px", border:"1px #000", background:"white"}}
}

export default Square