import React from "react";
import { useTheme } from "./ThemContext";

const ThemeButton=()=>{
const {Theme,toggleTheme}=useTheme()


    return(
        <button style={{
            color:Theme==='light'?'black':'white',
           background:Theme
        }} onClick={toggleTheme}>


       toggleTheme </button>
    )
}
export default ThemeButton