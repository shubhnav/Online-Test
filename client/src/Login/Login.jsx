import React, { Component } from 'react';
import Que from "../Que/Que";
const Question = 2;
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
      return (<Que></Que>);
    }
    }
    handleLogin(){
      let pageStatus = Question;
      this.setState({
        pageStatus : Question
      })
    }
}
 export default Login;        