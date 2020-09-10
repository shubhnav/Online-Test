import React, { Component } from 'react';
import {Button,Table} from 'react-bootstrap';
import Course_selection from "../Course_selection/Course_selection"
import SignUp from "../Signup/Signup";

const course = 2;
const login = 1;
const signup = 3;
class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      pageStatus: login
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.checkValidUser = this.checkValidUser.bind(this);
  }

  render(){
    if(this.state.pageStatus === login){
      return(
        <center>
              <h2>Login</h2>
              <table>
              <tbody>
                <tr>
                  <td>Username:</td>
                  <td><input id = "name" type ="text" /> </td>
                </tr>
                <tr>
                  <td> Password:</td>
                  <td> <input type ="Password"  id = "pass" /> </td>
                </tr>
                <tr>
                </tr>
                </tbody>
              </table>
              <br/>
              <Button variant="primary" onClick={this.handleLogin}>LOGIN</Button>{' '}
              <Button variant="success" onClick={this.handleSignup}>SIGN UP</Button>
          </center>
        ) ;
    }
    else if(this.state.pageStatus === signup){
      return(<SignUp/>)
    }
    else{
      return (<Course_selection ></Course_selection>);
    }
  }

  async checkValidUser(user,pass){
    new Promise(async(resolve,reject)=>{
      let data = {};
      data.user = user;
      data.pass = pass;
      await fetch("/api/user",{
        method: "post",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
      }).then( async function(response){
        console.log("response",response);
        let data = await response.json();
        return data;
      }).then(data=>{
        if(data.length>0){
          console.log("client==>",data);
          this.setState({
            Id: data[0].Id,
            pageStatus: course
          },()=>{
            return resolve();
          });

        }
        else{
          return reject();
        }
      })
    })
  }

  handleSignup(){
    this.setState({
      pageStatus: signup
    })
  }
  async handleLogin(){
    return new Promise(async(resolve,reject)=>{
      let user = document.getElementById("name").value;
      let pass = document.getElementById("pass").value;
      console.log("user,pass",user,pass);
        if(user.length>0 && pass.length>0){
          await this.checkValidUser(user,pass);
        }
    })



    }
}
 export default Login;
