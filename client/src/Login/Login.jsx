import React, { Component } from 'react';
import Course_selection from "../Course_selection/Course_selection"
const course = 2;
const login = 1;
class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      pageStatus: login
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.checkValidUser = this.checkValidUser.bind(this);
  }

  render(){
    console.log("page", this.state);
    if(this.state.pageStatus == login){
      return(
        <div>
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
                </tbody>
              </table>
              <button type ="button" onClick={this.handleLogin}>Login</button>
          </div>
        ) ;
    }
    else{
      return (<Course_selection {...this.props} ></Course_selection>);
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
