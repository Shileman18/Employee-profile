import React from "react";
import ChildComponent from "./Child";

const ParentComponent=()=>{
    // const props.name="react"
    const data={
            email:'virat',
            price:2000,
    }
return(
    <>
    <ChildComponent data={data}  />
    
    </>
)
}
export default ParentComponent