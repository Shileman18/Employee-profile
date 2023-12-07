import React from "react";
 import ChildComponent from "./ChildComponent";
const ParentComponent =()=>{
    const DataTopass ='Hello react'

return(
    <>
    <ChildComponent name={DataTopass }/>
    </>
)
}
export default ParentComponent