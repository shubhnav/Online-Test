import React, { Component } from 'react';
class Result extends Component{
  constructor(props){
    super(props);
    this.state = {
	 
    }
    
  }
  render() {
    return(
        <script>
            function get_score()
            { var ans1,ans2,ans3;
            if (document.f.comp.[0].checked)
              { ans1 = document.f.comp[0].value;}
            else if(document.f.comp[1].checked)
              {ans1 = document.f.comp[1].value;}
            else if(document.f.comp[2].checked)
              {ans1 = document.f.comp[2].value;} 
            else if(document.f.comp[3].checked)
              {ans1 = document.f.comp[3].value;}   
            }
            var selected_ans =newArray(ans1,ans2,ans3);
            var correct_ans = newArray('b');
            var total =0,i;
            for(i=0;i<3;i++)
            { if(selected_ans[i]==correct_ans[i])
              { total= total+1;
              }
            }
            document.getElementById("result").innerHTML="Your score is :" +total;

        </script> 
       );
    }
        export default Result;
