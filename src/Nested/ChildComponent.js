import React from "react"
import GrandChildComponent from "./GrandChildComponent"
const ChildComponent=({name})=>{ 

    return(<>
    {/* <h1>{name}</h1> */}
   <GrandChildComponent name={name}/>
    </>)
}
export default ChildComponent

