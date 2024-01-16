Path: reactapp/assessment/SuccessStory.js
import React from "react";
import Success from "./Success";
import SuccessChild from "./SuccessChild";

let SuccessStory = ()=>{
    return(
        <div>
            <Success id={1}/>
            <SuccessChild name={"Gauri"} address={"Pune"}/>
        </div>
    )
}

export default SuccessStory;