import React, { useMemo, useState } from "react";
 const Counter =()=>{
const[CounterOne, setCounterOne]=useState(0)
const[CounterTwo, setCounterTwo]=useState(0)

const incrementOne=()=>{
    setCounterOne(CounterOne+1)
}

const incrementTwo=()=>{
    setCounterTwo(CounterTwo+1)
}

const isEven=useMemo(()=>{
    let i=0;
    while(i<=2000000000)i++;
    return CounterOne%2===0;
},[CounterOne])
    return(
        <>
       <div>
        <button onClick={incrementOne}>Counter One:{CounterOne}</button>
        <span>{isEven? "Even":"Odd"}</span>
        </div> 
        <div>
        <button onClick={ incrementTwo}>Counter Two: {CounterTwo}</button>
        </div> 
        </>
    )
 }
 export default Counter