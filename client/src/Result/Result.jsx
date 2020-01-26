import React, { Component } from 'react';
class Result extends Component{
  constructor(props){
    super(props);
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
      return(

          <table>
          <thead>
            <th>Question </th>
            <th>Selected Option</th>
            <th>Correct Option</th>
            <th>Marks Obtained</th>
          </thead>
          <tbody>
            {this.state.resultArray}
          </tbody>
          </table>
         );
    }
    else{
      return (<></>)
    }
  }
  }
  export default Result;
/*
<tr>
  <td>{this.state.max_score}</td>
  <td>{this.state.total_score}</td>
</tr>
*/
