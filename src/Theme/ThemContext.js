import React, {createContext,useContext,useState} from "react";


const ThemContext=createContext('light');

export const ThemProvider=({children})=>{
     const [Theme,setThem]=useState('light')


const toggleTheme=()=>{
    setThem((preThem)=>preThem==='light'?'dark':'light')
}



     return(
        <ThemContext.Provider value={{Theme, toggleTheme}}>
            {children}
        </ThemContext.Provider>
     )
}

export const useTheme=()=>{
    return useContext(ThemContext)
}