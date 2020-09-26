import React ,{ Component } from 'react';
import {Button} from 'react-bootstrap';
import Que from "../Que/Que";
import Login from "../Login/Login";
import Tab from "../TopNavigationTab/topNavigation";
import Badge from 'react-bootstrap/Badge'

const que=2;
const course=1;
const login = 3;
class Course extends Component{
    constructor (props){
    super(props);
    this.state = {
         pageStatus: course
     }
    this.handleCourse = this.handleCourse.bind(this);
    this.handlelogout = this.handlelogout.bind(this);
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
            branch.push(<><Button variant="outline-secondary"
            value = {data[index].BranchId} onClick={this.handleCourse}>
            {data[index].BranchName} </Button>{' '}</>);
          }
          this.setState({
            branch: branch
          });

        })
      });
    }

    render(){
    console.log("State", this.state);
    if(this.state.pageStatus == course){
        return (
          <>
          <Tab/>
             <center>
                <h2><Badge variant="info">Choose Your Branch</Badge></h2>
                    {this.state.branch}
                <br/>
                <br/>
                <br/>
                <Button variant="danger" onClick = {this.handlelogout} value = {login} >LOG OUT</Button>
              </center>
          </>
        )
    }
    else if(this.state.pageStatus == que){
        let data = {};
        data.selectedBranch = this.state.selectedBranch;
        return (<Que data = {data}></Que>);
        }
    else if(this.state.pageStatus == login){
            return (<Login></Login>);
            }
    else{
      return(<>Select Branch</>)
    }
  }

    handlelogout = event=>{
      this.setState({
        pageStatus: parseInt(event.target.value)
      })
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
