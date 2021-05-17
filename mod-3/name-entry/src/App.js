import React, {Component} from "react"

//Houses the current info of state
class App extends Component {
    constructor() {
        super()
        this.state = {
            name:"",
            names:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this) 
    }

    handleChange(e) {
        this.setState({
          name: e.target.value
        });
      }

    handleSubmit(event){
        const {name, value} = event.target
        
          this.setState({
            [name]: value
            })

        this.state.names.push(this.state.name)
        console.log(this.state.name)
        return this.state.names
    }

  
//Show these things in the user interface 
    render() {
        const names=this.state.names.map(i => <li>{i}</li>)
        return (
            <div>
                    <input 
                        
                        name="name"
                        //type="text"
                        value={this.state.name}
                        onChange={this.handleChange} 
                        placeholder="Name"
                    />
            
            <h1>Names:</h1>
            <ol>
                {this.state.name}
                {names}
            </ol>
            
            <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

export default App


    //
    // handleChange(event){
    //     const {name, value} = event.target
        
    //     //this.state.name.map(
    //         this.setState({
    //             [name]: value
    //         })
    //     //)
    //     console.log(this.state.name)

    // }
  // pushName(){
    //     this.state.names.push(this.state.name)
    //     return this.state.names
    // }
      //?
    //  handleSubmit(){
    //     const namesArray = this.state.name.split(',');
    //     this.setState({
    //       toDoList: namesArray
    //     });
    //  }
