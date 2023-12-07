import React from "react";

const ParentComponent=()=>{
    const name="react"
    const Handler=()=>{
        console.log("button is clicked parent component")
    }
return(
    <>
    <ChildComponent name={name} handle={Handler}/>

    </>
)
}

const ChildComponent=(props)=>{
    return(
        <>
        <p>
            Hello iam {props.name}
        </p>
        <button onClick={props.handle}>Click me!!</button>
        </>
    );
};
export default ParentComponent;
