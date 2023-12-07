import React from "react"
import GreateGrandChildComponent from "./GreateGrandChildComponent"


const GrandChildComponent=({name})=>{ 

    return(<>
    <h1>{name}</h1>
    <GreateGrandChildComponent name={name}/>
   
    </>)
}
export default GrandChildComponent