import React, { Component } from "react";
 


function SimpleComponent(){
    return(
        <h1>hello world!!!!</h1>
    )
}
function JSXComponent(){
    let name='Virat'
    return(
        <h1>Hello i Am {name}</h1>
    )
}

function Parent(){
    return(
        <>
        <SimpleComponent/>
        <JSXComponent/>
        <ConditionalRendaring/>
        <ListComponent/>
        <StylingComponent/>
        <Thank/>
        </>
    );
}

function ConditionalRendaring(){
    let showText=false;
    return showText?<p>Visible</p>:null;
}



function ListComponent(){
    const items=["item 1","item 2","item 3"];
    
    return(
 <ul>
 {
 items.map(((item,index)=>(
            <li>{item}</li>
            )))}
</ul>
    );
}

let StylingComponent=()=>{
    let style={
        color:"blue",
        fontSize:'19px',
    };
    return(
        <>
        
        <p style={style}>HELLO STYLING</p></>
    );
}

class Thank extends Component{
    render(){
       return <p>This is class component</p>
    }
}
export default Parent;