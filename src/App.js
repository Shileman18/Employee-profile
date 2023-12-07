import React from "react";
import ThemeHeader from "./ThemeHeader";
import ThemeButton from "./ThemeButton";
import { ThemProvider } from "./ThemContext";

const App=()=>{


    return(
        <ThemProvider>
            <div>
                <ThemeHeader/>
                <ThemeButton/>
            </div>
        </ThemProvider>
    )
}