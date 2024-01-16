//4. create a functional component SuccessChild, make it child of Success and pass Name and Address to it from Success

// Path: reactapp/assessment/SuccessChild.js
import React from "react";


let SuccessChild = (props)=>{
    return(
        <div>
            <h3>Name - {props.name}</h3>
            <h3>Address - {props.address}</h3>
        </div>
    )
}






