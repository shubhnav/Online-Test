import React, { Component } from 'react';
import {Button,Table} from 'react-bootstrap';
import Course from "../Course_selection/Course_selection";
const course = 2;
class Result extends Component{
  constructor(props){
    super(props);
    this.props = props;
    this.state = {

    }
  }
  async componentWillMount(){
    let req = {};
    req.Ans = this.props.data.selectedAns;
    return new Promise(async(resolve,reject)=>{
      await fetch("/api/result",{
        method: "post",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(req)
      }).then( async function(response){
        console.log("response",response);
        let data = await response.json();
        return data;
      }).then(data=>{

        let resultArray = [];
        let total_score = 0;
        let max_score = 0;
        for(let index = 0 ;index<data.length;index++){
          let resultRow = [];
          max_score +=4;
          resultRow.push(<td >{this.props.data.qidIndexMap[data[index].Qid]}</td>);
          resultRow.push(<td>{data[index].selectedOption}</td>);
          resultRow.push(<td>{data[index].correct_answer}</td>);
          if(data[index].selectedOption == data[index].correct_answer){
            resultRow.push(<td>+4</td>);
            total_score +=4;
          }
          else{
            resultRow.push(<td>0</td>);
          }

          resultArray.push(<tr>{resultRow}</tr>)
        };
        this.setState({
          resultArray: resultArray,
          max_score: max_score,
          initial: true,
          total_score: total_score
        });

      })
    });
  }
  render() {
    if(this.state.initial == true){
      if(this.state.pageStatus == course){
        return(<Course></Course>);
      }
      else{
      return(
          <>
          <Table striped bordered hover>
          <thead>
            <th>QUESTION </th>
            <th>SELECTED OPTION</th>
            <th>CORRECT OPTION</th>
            <th>MARKS OBTAINED</th>
          </thead>
          <tbody>
            {this.state.resultArray}
          </tbody>
          </Table>
          <Table striped bordered hover variant="dark">
          <thead>
            <th>MAX SCORE</th>
            <th>OBTAINED</th>
          </thead>
          <tbody>
          <tr>
          <td>{this.state.max_score}</td>
          <td>{this.state.total_score}</td>
          </tr>
          </tbody>
          </Table>
          <center><Button variant="success" value = {course} onClick= {this.handleHome}>GO TO HOME</Button></center>
          </>
         );
       }
    }
    else{
      return (<></>)
    }
  }
  handleHome =event=>{
    this.setState({
      pageStatus: event.target.value
    })
  }
  }
  export default Result;
