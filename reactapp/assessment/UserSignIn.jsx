//6. create UserSignIn component using uncontrolled way, should be class component

Path: reactapp/src/Application/AppComponent/User/UserSignIn.jsx

import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userSignIn } from "../../Action/UserAction";

class UserSignIn extends Component{
    
        constructor(props){
            super(props);
    
            this.state = {
                userName : "",
                password : ""
            }
        }
    
        handleOnChange = (event)=>{
            this.setState({
                [event.target.name] : event.target.value
            })
        }
    
        handleOnSubmit = (event)=>{
            event.preventDefault();
            this.props.userSignIn(this.state);
        }
    
        render(){
            return(
                <div>
                    <h2>User Sign In</h2>
                    <form onSubmit={this.handleOnSubmit}>
                        <div>
                            <label>Username</label>
                            <input type="text" name="userName" onChange={this.handleOnChange} />
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" name="password" onChange={this.handleOnChange} />
                        </div>
                        <div>
                            <input type="submit" value="Sign In" />
                        </div>
                    </form>
                </div>
            )
        }

}