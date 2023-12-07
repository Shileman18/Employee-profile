import React, { useCallback, useState } from "react";
import Count from "./Count";
import Heading from "./Heading";
import Button from "./Button";

function ParentComponent(){
    const[age,setAge]=useState(25)
    const [salary,setsalary]=useState(25000)

    const incrementAge=useCallback(()=>{
setAge(preAge=>preAge+1)
    },[age])
    const incrementSalary=useCallback(()=>{
        setsalary(preSalary=>preSalary+1000)
    },[salary])

    return(
        <div>
            <Heading/>
            <Count text="age" count={age}/>
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text="salary" count={salary}/>
            <Button handleClick={incrementSalary}>Increment salary</Button>

        </div>
    )
}
export default ParentComponent