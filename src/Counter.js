import React , { useState } from "react"

const Counter=()=>{
    const[count, setCount]=useState(0)

const Decreement=()=>{
    // setCount(count-1)
    setCount(preCount=>preCount-1)
    setCount(preCount=>preCount-1)
}
const increement=()=>{

    // setCount(count+1)
    setCount(preCount=>preCount+1)
    setCount(preCount=>preCount+1)
}


    return(
        <>
        <button onClick={Decreement}>-</button>
        <p >{count}</p>
        <button onClick={increement}>+</button>
        
       </>
    )
}
export default Counter