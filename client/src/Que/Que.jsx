import React, { Component } from 'react';
import Result from "../Result/Result"
;const results = 2;
const que = 1
class Que extends Component{
    constructor(props){
      super(props);
      this.state = {
        selectedAns: {},
        selectedIndex: 0,
        initial: false,
        pageStatus: que
     }

     this.handleRadio = this.handleRadio.bind(this);
     this.handleNext = this.handleNext.bind(this);
     this.handleEnd = this.handleEnd.bind(this);
    }

    async componentWillMount(){
      let req = {};
      req.BranchId = this.props.data.selectedBranch
      return new Promise(async(resolve,reject)=>{
        await fetch("/api/question",{
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
          let questionArray = [];
          let indexQidMap = {};
          let qidIndexMap = {};
          let max = data.length;
          for(let index = 0 ;index<data.length;index++){
            indexQidMap[index] = data[index].Qid;
            qidIndexMap[data[index].Qid] = index+1;
            questionArray[index] = [];
            questionArray[index].push(<tr >{data[index].Que}  </tr>);
            questionArray[index].push(<tr><input type="radio" name="comp" onChange = {this.handleRadio} value="a"/>{data[index].Op1}</tr>);
            questionArray[index].push(<tr><input type="radio" name="comp" onChange = {this.handleRadio} value="b"/>{data[index].Op2}</tr>);
            questionArray[index].push(<tr><input type="radio" name="comp" onChange = {this.handleRadio} value="c"/>{data[index].Op3} </tr>);
            questionArray[index].push(<tr><input type="radio" name="comp" onChange = {this.handleRadio} value="d"/>{data[index].Op4}</tr>);
          }
          this.setState({
            questionArray: questionArray,
            selectedIndex: 0,
            initial: true,
            indexQidMap: indexQidMap,
            qidIndexMap: qidIndexMap,
            max: max
          });

        })
      });
    }

    render(){
       let index = this.state.selectedIndex;
       console.log("index",this.state);
       if(this.state.initial == true && this.state.pageStatus == que){
         if(this.state.max> index){
            return(
                <div>
                  <table>
                    <tbody>
                      {this.state.questionArray[index]}
                    </tbody>
                  </table>
                  <button type="button" onClick = {this.handleNext} value="Next">  Next</button>
                </div>
                );
          }
          return (
            <div>
            TEST END!!<br/>
            <button type="button" onClick = {this.handleEnd} value="Submit">GO TO RESULTS</button>
            </div>
          );
          }
        else if(this.state.pageStatus == results){
          let data = {};
          data.selectedAns = this.state.selectedAns;
          data.qidIndexMap = this.state.qidIndexMap;
          return(<Result data = {data} ></Result>);
        }
        else{
          return(<></>);
        }
    }

   handleRadio = event=>{
     this.setState({
       selectedOption: event.target.value
     })
   }

   handleEnd(){
     this.setState({
       pageStatus: results
     });
   }


   handleNext(){
     let qid = this.state.indexQidMap[this.state.selectedIndex];
     let selectedOption = this.state.selectedOption;
     let selectedAns = this.state.selectedAns;
     selectedAns[qid] = selectedOption;

     let selectedIndex = this.state.selectedIndex;
     selectedIndex++;
     this.setState({
       selectedIndex: selectedIndex,
       selectedAns: selectedAns
     })
   }
    }
    export default Que;
