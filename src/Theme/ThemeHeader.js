import React from "react";
import { useTheme } from "./ThemContext";

const ThemeHeader=()=>{
const {Theme}=useTheme();



    return(
        <h1 
        style={
{
color: Theme==="light"?"black":"green",background:Theme,
}

            
        }       
        
        
        >Theme ThemeHeader</h1>
    )
}
export default ThemeHeader