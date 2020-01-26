import React, { Component } from 'react';
import Login from "../Login/Login";
const login = 1;

class Signup extends Component{
    constructor(props){
      super(props);
      this.state = {
     }
     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleLogin = this.handleLogin.bind(this);
    }

    render(){
        if(this.state.pageStatus == login){
          return(<Login></Login>);
        }
        else{
        return(
        <div>
          <h2>Signup</h2>
            <table>
              <tr>
                <td>Username: </td>
                <td> <input type ="text" id="user"/> </td>
              </tr>
              <tr>
                 <td>Email</td>
                 <td> <input type = "text" id= "email" /> </td>
              </tr>
              <tr>
                <td>Password:</td>
                <td> <input type =  "password" id = "pass1"/> </td>
              </tr>
              <tr>
                <td>Confirm Password:</td>
                <td> <input type =  "password" id = "pass2" /> </td>
              </tr>
              <button type ="button" onClick ={this.handleSubmit }>SUBMIT</button>
              <button type ="button" onClick ={this.handleLogin }>LOG IN</button>
            </table>

        </div>
        );
      }
    }
    handleLogin(){
      this.setState({
        pageStatus: login
      })
    }
    async handleSubmit(){
      let user = document.getElementById("user").value;
      let email = document.getElementById("email").value;
      let pass1 = document.getElementById("pass1").value;
      let pass2 = document.getElementById("pass2").value;
      console.log("data", user,email,pass1,pass2);
      if(user.length>0 && email.length>0 && pass1.length>0 && pass2.length>0){
        if(pass1 === pass2){
          let data = {};
          data.user = user;
          data.pass = pass1;
          await fetch("/api/signup",{
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
            if(data.insert == true){
              this.setState({
                pageStatus: login
              })
            }
          })
        }
      }
    }
}
export default Signup;
