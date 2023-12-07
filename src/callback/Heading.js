import React from "react";

function Heading(){
    console.log("rendering Heading")

    return(<h1>useCallBack Hook</h1>)
}
export default React.memo(Heading)