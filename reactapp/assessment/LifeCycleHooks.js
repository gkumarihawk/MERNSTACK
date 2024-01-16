//9. Create a class component and show all the life cycle hooks

// Path: reactapp/assessment/LifeCycleHooks.js
import React, { Component } from "react";

export default class LifeCycleHooks extends Component{
    constructor(props){
        super(props);
        console.log("Constructor Called");
    }

    componentWillMount(){
        console.log("Component Will Mount Called");
    }

    componentDidMount(){
        console.log("Component Did Mount Called");
    }

    componentWillReceiveProps(){
        console.log("Component Will Receive Props Called");
    }

    shouldComponentUpdate(){
        console.log("Should Component Update Called");
        return true;
    }

    componentWillUpdate(){
        console.log("Component Will Update Called");
    }

    componentDidUpdate(){
        console.log("Component Did Update Called");
    }

    componentWillUnmount(){
        console.log("Component Will Unmount Called");
    }

    componentDidCatch(){
        console.log("Component Did Catch Called");
    }

    static getDerivedStateFromProps(){
        console.log("Get Derived State From Props Called");
    }

    getSnapshotBeforeUpdate(){
        console.log("Get Snapshot Before Update Called");
    }

    render(){
        console.log("Render Called");
        return(
            <div>
                <h1>Life Cycle Hooks</h1>
            </div>
        )
    }
    
}



