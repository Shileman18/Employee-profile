import React from "react";

const ChildComponent=(props)=>{
    return(
        <>
        <p>
            Hello iam {props.email}
        </p>
        <p>{props.data.email}</p>
        <p>{props.data.price}</p>
        </>
    );
};


export default ChildComponent