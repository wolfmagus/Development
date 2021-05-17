import React, {Component} from "react"
import style from "./style.css"

class App extends Component{
    constructor(){
        super()
        this.state ={
            firstName:"",
            lastName:"",
            email:"",
            birthPlace:"",
            phoneNum: "",
            faveFood:"",
            textBox:"",
            badges:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    handleChange(e){
        const {name, value} = e.target
        this.setState({
            [name]: value
          });
        console.log(this.state)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.setState(
            (prevState) => {
                return {
                    firstName: "",
                    lastName:"",
                    email:"",
                    birthPlace:"",
                    phoneNum: "",
                    faveFood:"",
                    textBox:"",
                    badges: [
                                ...prevState.badges, 
                                {
                                firstName: prevState.firstName,
                                lastName: prevState.lastName,
                                email: prevState.email,
                                birthPlace:prevState.birthPlace,
                                phoneNum:prevState.phoneNum,
                                faveFood:prevState.faveFood,
                                textBox:prevState.textBox
                    
                            } ]
                }
            }
        )
    }

    render() {
        let mappedBadges = this.state.badges.map(badge => {
            return (
                <div className="badge-border">
                    <h1 className="word-border"> First Name: {badge.firstName}</h1>
                    <h1 className="word-border"> Last Name: {badge.lastName}</h1>
                    <h1 className="word-border">E-mail: {badge.email}</h1>
                    <h1 className="word-border">Place of Birth: {badge.birthPlace}</h1>
                    <h1 className="word-border">Phone Number: {badge.phoneNum}</h1>
                    <h1 className="word-border">Favorite Food: {badge.faveFood}</h1>
                    <h1 className="textBox-border">{badge.textBox}</h1>
                </div>
            )
        })
    
        return(
        <div >
        <form className="form-border" onSubmit={this.handleSubmit}>
            <input 
                name="firstName"
                type="text"
                value={this.state.firstName}
                onChange={this.handleChange} 
                placeholder="First Name"
            />
            <input 
                name="lastName"
                type="text"
                value={this.state.lastName}
                onChange={this.handleChange} 
                placeholder="Last Name"
            />
            <input 
                name="email"
                type="text"
                value={this.state.email}
                onChange={this.handleChange} 
                placeholder="Email"
            />
            <input 
                name="birthPlace"
                type="text"
                value={this.state.birthPlace}
                onChange={this.handleChange} 
                placeholder="Place of Birth"
            />
            <input 
                name="phoneNum"
                type="number"
                value={this.state.phoneNum}
                onChange={this.handleChange} 
                placeholder="Phone Number"
            />
            <input 
                name="faveFood"
                type="text"
                value={this.state.faveFood}
                onChange={this.handleChange} 
                placeholder="Favorite Food"
            />
    
            <textarea 
                name="textBox"
                type="text"
                value={this.state.textBox}
                onChange={this.handleChange} 
                placeholder="Tell us about yourself"
            />
        <button>Submit</button>
        
        </form>
                {mappedBadges}
        </div>
        )
    }
}



export default App