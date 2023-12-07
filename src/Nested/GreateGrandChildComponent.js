import React from "react"
import GreateGreateGrandChildComponent from "./GreateGreateGrandChildComponent"
const GreateGrandChildComponent=({name})=>{ 

    return(<>
    <h1>{name}</h1>
    <GreateGreateGrandChildComponent name={name}/>
   
    </>)
}
export default GreateGrandChildComponent