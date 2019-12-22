import React, { Component } from 'react';
class Task extends Component{
  constructor(props){
    super(props);
    this.state = {
	message : ""
    }

  }
  async componentWillMount(){
      await fetch("/api/user",{
      method: "post",
      headers:{
        "Content-Type":"application/json"
      }
      }).then( async function(response){
      console.log("response",response);
    	let data = await response.json();
    	return data;
      }).then(data=>{
		console.log("client==>",data);
		this.setState({
			message: data
		})
	})

}
  render(){
      console.log("message", this.state.message);
    //return(<>Hello from Task  {this.state.message}</>);
      return(
          <></>

      );


  }
}
export default Task;
