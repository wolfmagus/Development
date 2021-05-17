import React, {Component} from "react"

class Apps extends Component{
    constructor(){
        super()
        // intialize state with the properties you would like to track
        this.state = {
            firstName:"",
            lastName:"",
            age: "",
            gender:"",
            destination:"",
            isVegan: false,
            isKosher: false,
            isLactoseFree: false
            
        }
        this.handleChange = this.handleChange.bind(this)
    }

handleChange(event){
    const {name, value, type, checked} = event.target

this.setState({
    [name]: value
})
}

 render() {
    return(
        <main>
            <form>
                <input 
                name="firstName"
                value={this.state.firstName} 
                onChange={this.handleChange} 
                placeholder="First Name"
            />

                
                <input 
                name="lastName" 
                value={this.state.lastName} 
                onChange={this.handleChange} 
                placeholder="Last Name"
            />
                <input 
                name="age" 
                value={this.state.age} 
                onChange={this.handleChange} 
                placeholder= "Age"
            />
            <br />

            <label>
                <input
                    type="radio"
                    name="gender"
                    value= "male"
                    checked={this.state.gender === "male"}
                    onChange={this.handleChange}
                /> Male
            </label>

            <br />

            <label>
                <input
                    type="radio"
                    name="gender"
                    value= "female"
                    checked={this.state.gender === "female"}
                    onChange={this.handleChange}
                /> Female
            </label>

            <br />

            <select 
                    value={this.state.destination} 
                    name="destination" 
                    onChange={this.handleChange}
            >
                <option value="">--Please Choose a destination</option>
                <option value="ghana"> Ghana</option>
                <option value="brazil"> Brazil</option>
                <option value="mexico"> Mexico</option>
                <option value="china"> China</option>
            </select>
            
            <br />

            <label>
                <input
                    type="checkbox"
                    name="isVegan"
                    onChange={this.handleChange}
                    checked={this.state.isVegan} 
                /> Vegan?
                
                <input
                    type="checkbox"
                    name="isKosher"
                    onChange={this.handleChange}
                    checked={this.state.isKosher} 
                /> Kosher?
                
                <input
                    type="checkbox"
                    name="isLactoseFree"
                    onChange={this.handleChange}
                    checked={this.state.isLactoseFree} 
                /> Lactose Free?

                </label>

                <button>Submit</button>
            </form>
            <hr />
            <h2> Entered Information:</h2>
            <p>Your name:{this.state.firstName}{this.state.lastName}</p>
            <p>Your age:{this.state.age}</p>
            <p>Your gender:{this.state.gender}</p>
            <p>Your destination:{this.state.destination}</p>
            <p>Your dietary restrictions:</p>
            <p>Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
            <p>Kosher:{this.state.isKosher ? "Yes" : "No"}</p>
            <p>Lactose Free:{this.state.isLactoseFree ? "Yes" : "No"}</p>
            
  
        </main>
 
    )
 }
}

export default Apps