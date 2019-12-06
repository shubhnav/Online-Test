import React, { Component } from 'react';
class Task extends Component{
  constructor(props){
    super(props);
    this.state = {
	message : ""
    }
    
  }
  async componentWillMount(){
      await fetch("/api",{
      method: "post",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({"message": "Hello"})
      }).then( async function(response){
	let data = await response.json();
	return data;
      }).then(data=>{
		console.log("client==>",data);
		this.setState({
			message: data.message
		})
	})
          
}
  render(){

    	return(<>Hello from Task  {this.state.message}</>);
    
 
  }
}
export default Task;
