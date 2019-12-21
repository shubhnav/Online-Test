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

    render(){
    if(this.state.pageStatus == course){
        return (
           <div>
               <center>
                <h1>Choose Your Branch</h1>
                <table>
                    
                    <tr> 
                         <button type="submit" onClick={this.handleCourse}>Computer Science  </button>               
                         <button type="submit" onClick> Mechanical </button>
                         <button type="submit" onClick>  Civil  </button>
                       {/*}  <button type ="submit" onClick={this.handleCourse}>Submit</button> */}
                    </tr> 
                </table>
                </center>
            </div>
        )
    }
    else { 
        return (<Que></Que>);
        }
    }
    handleCourse(){
        let pageStatus = que;
        this.setState({
            pageStatus : pageStatus
        });
    }
}
export default Course; 