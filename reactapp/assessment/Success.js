//3. create a class component named - Success and show some quotes on success in it

import React, { Component } from "react";

export default class Success extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            randomValue: "Some random value",
          };
    }

    //this method returns virtual dom on every change of state using this.setState


    render(){
        return(
            <div className="about" >  
                <h2>Some quote on Success... </h2>  
                <p className="about-content"> Success is not final; failure is not fatal: It is the courage to continue that counts.</p>  
                <SuccessChild Name="Gauri" Address="123 Main St" />
                <SuccessStory story={this.state.randomValue} />
                <p>id = {this.props.id}</p>
            </div>
        )
    }
}

//10. Make a state change, the state should be duplicate and then stop it to call render method to improve efficiency.








