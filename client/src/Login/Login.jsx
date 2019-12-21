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
  }
  
  render(){
    if(this.state.pageStatus == login){
    return(
      <div>
          <form> 
            <h2>Login</h2>
            <table>
              <tr>
                <td>Username:</td>
                <td><input type ="text" name=" "/> </td>
              </tr>
              <tr> 
                <td> Password:</td>
                <td> <input type ="Password" name ="" /> </td>
              </tr>
              <tr>
              <button type ="submit" onClick={this.handleLogin}>Login</button>
              </tr>
            </table>
          </form>
        </div>
          ) ;
    }
    else{
      return (<Course_selection></Course_selection>);
    }
  }

  handleLogin(){
      let pageStatus = course;
      this.setState({
        pageStatus : pageStatus
      })
    }
}
 export default Login;        