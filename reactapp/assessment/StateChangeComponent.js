//10. Make a state change, the state should be duplicate and then stop it to call render method to improve efficiency.

// Path: reactapp/assessment/Success.js
import React, { Component } from "react";

class StateChangeComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: 'Initial data...',
            duplicateData: 'Initial data...'
        }
    }

    updateState = ()=>{
        this.setState({data: 'Data updated...'})
    }

    updateDuplicateState = ()=>{
        this.setState({duplicateData: 'Data updated...'})
    }


    render(){
        return(
            <div>
                <button onClick={this.updateState}>Update State</button>
                <button onClick={this.updateDuplicateState}>Update Duplicate State</button>
                <h4>{this.state.data}</h4>
                <h4>{this.state.duplicateData}</h4>
            </div>
        )
    }
                    
}
