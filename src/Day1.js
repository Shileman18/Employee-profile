import React from "react";

// let jsx=<h1>Hello react with jsx</h1>
let element=React.createElement("h1",{},"Hello react application")
// let name='virat'
// let element=(
// <>
// <h1>Hello react i am {name}</h1> 
// <h2>Hey it's me!!!!!!!</h2>
// <h2>Hey it's me!!!!!!!</h2>
// <h2>Hey it's me!!!!!!!</h2>
// <h2>Hey it's me!!!!!!!</h2>
// <h2>Hey it's me!!!!!!!</h2>
// </>)

// let ISlogIn=false;
// let element=(
// <>
// {ISlogIn?<p>Login successfully</p>:<p>plz login </p>}
// </>
// );

function Child1(){
    return(
      <h1 className='child1'>Hello i am functiional component</h1>
    )
  }
  function Child2(){
    return(
      <h1 style={{backgroundColor:'blue',color:'pink'}}>Hello i am functiional component</h1>
    )
  }
  function Child3(){
    return(
      <h1>Hello i am functiional component</h1>
    )
  }
  function Parent(){
    return(
    <>
    <Child1/>
    <Child2/>
    <Child3/>
    </>)
  }
  
  export default Parent
  