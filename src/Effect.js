import React, { useEffect, useState } from "react";


// const Counter =()=>{
// const [count,setCount]=useState(0);

// useEffect(()=>{
//     console.log('rendering at time of loading')
// },[count])
// const Handle=()=>{
//     setCount(count+1)
// }


//     return(
//         <>
//         <p>count: {count}</p>
//         <button onClick={Handle}>+</button>
//         </>
//     )
// }
// export default Counter

function MyComponent(){

    const [count, setCount]=useState(0);


    useEffect(()=>{
        const intervaid=setInterval(()=>{
            setCount((preCount=>preCount+1))
        },1000);

        return()=>{
            clearInterval(intervaid)
        }
})
    return<div>{count}second elepsed</div>
}

export default MyComponent
