import React ,{ Component } from 'react';
import Que from "../Que/Que";
const que=2;
const course=1;
class Course extends Component{
    constructor (props){
    super(props);
    this.state = {
         pageStatus: course
     }
    this.handleCourse = this.handleCourse.bind(this);
    }

    async componentWillMount(){
      return new Promise(async(resolve,reject)=>{
        await fetch("/api/course",{
          method: "post",
          headers:{
            "Content-Type":"application/json"
          }
        }).then( async function(response){
          console.log("response",response);
          let data = await response.json();
          return data;
        }).then(data=>{
          let branch = [];
          for(let index = 0 ;index<data.length;index++){
            branch.push(<button type="button" value = {data[index].BranchId} onClick={this.handleCourse}>{data[index].BranchName} </button>);
          }
          this.setState({
            branch: branch
          });

        })
      });
    }

    render(){
    if(this.state.pageStatus == course){
        return (
           <div>
               <center>
                <h1>Choose Your Branch</h1>
                    {this.state.branch}
                </center>
            </div>
        )
    }
    else if(this.state.pageStatus == que){
        let data = {};
        data.selectedBranch = this.state.selectedBranch;
        return (<Que data = {data}></Que>);
        }
    else{
      return(<>Select Branch</>)
    }
    }
    handleCourse=event=>{
        console.log("Selected BranchName", event.target.value);
        this.setState({
            selectedBranch : parseInt(event.target.value),
            pageStatus: que
        });
    }
}
export default Course;
