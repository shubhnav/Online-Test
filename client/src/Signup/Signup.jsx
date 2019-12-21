import React, { Component } from 'react';
class Signup extends Component{
    constructor(props){ 
      super(props);
      this.state = {
     }
    } 

    render(){
        return(
        <div>
          <h2>Signup</h2>
          <form>
            <table>
              <tr>
                <td>Username: </td>
                <td> <input type ="text" name=" "/> </td>
                </tr>
                <tr>
                 <td>Email</td>
                 <td> <input type = "text" name= "" /> </td>
                </tr>
                <td>Password:</td>
                <td> <input type =  "password"/> </td>
                <tr>
                  <button type ="submit">SignUp</button>
                </tr>
                </table>
                </form>
        </div>
        );
    }
}
export default Signup;