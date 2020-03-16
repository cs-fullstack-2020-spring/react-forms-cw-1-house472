import React, { Component } from 'react'


class PersonStats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: "",
            feeling: ""
        }
    }
    nameEntry = (event) => {
        this.setState(
            {
                name: event.target.value,
                
            }
        )
        
    }
    ageEntry = (event) => {
        this.setState(
            {
                age: event.target.value,
                
            }
        )
        
    }
    feelingEntry = (event) => {
        this.setState(
            {
                feeling: event.target.value,
                
            }
        )
        
    }
    render() {
        return (
            <div>
                <form action="">
                <fieldset>
                <legend>Make Entry Here</legend>
                <label htmlFor="">Name</label>
                <input type="text" onChange={this.nameEntry} value={this.state.name} />
                <br/>
                <label htmlFor="">Age</label>
                <input type="text" onChange={this.ageEntry} value={this.state.age} />
                <br></br>
                <label htmlFor="">feeling</label>
                <input type="text" onChange={this.feelingEntry} value={this.state.feeling} />
                </fieldset>
                </form>
                <div>
                    {`Hello: ${this.state.name}`} <br/>
                      {`Your Age is: ${this.state.age}`}<br/>
                      {`And you are feeling: ${this.state.feeling}`}
                </div>


            </div>


        );

    }
}
export default PersonStats;