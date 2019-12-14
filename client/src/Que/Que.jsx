import React, { Component } from 'react';
class Que extends Component{
    constructor(props){ 
      super(props);
      this.state = {
     }
    } 

    render(){
        return(
            <div>
            <table>
            <tr> Q1:-What is full form of RAM </tr>
            <tr>   <input type="radio"name="comp" value="a"/>Read Only Memory </tr>
            <tr>    <input type="radio"name="comp" value="b"/>Random Access Memory </tr>
            <tr>    <input type="radio"name="comp" value="c"/> Read For Memory </tr>
            <tr>    <input type="radio"name="comp" value="d"/>Random Only Memory </tr>
            
            </table>

           
            <p><input type="button" value="Submit"/> </p>
            <p><input type="button" value="Next"/>  </p>
            </div>
            );
        }
    }
    export default Que;

    // <p> Q2:-What is captial of India ? 
    // <input type="radio"name="comp" value="a"/>New Delhi 
    // <input type="radio"name="comp" value="b"/>Mumbai 
    // <input type="radio"name="comp" value="c"/>Chennai 
    // <input type="radio"name="comp" value="d"/>Ahmedabad 
    // </p>