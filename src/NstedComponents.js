import React from "react";
 
const ParentComponent =()=>{
    const name ='Hello react'

return(
    <>
    <ChildComponent name={name}/>
    </>
)
}

const ChildComponent=({name})=>{ 

    return(<>
    <h1>{name}</h1>
    <GrandChildComponent name={name}/>
    </>)
}
const GrandChildComponent=({name})=>{ 

    return(<>
    <h1>{name}</h1>
    <GreateGrandChildComponent name={name}/>
    </>)
}
const GreateGrandChildComponent=({name})=>{ 

    return(<>
    <h1>{name}</h1>
   
    </>)
}

export default ParentComponent;