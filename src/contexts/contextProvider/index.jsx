"use client"
import { useState } from "react";
import { AppContext } from "../appContext";
const ContextProvider = ({ children }) => {
    const [locale,setLocale]=useState("en");
    return (
        <AppContext.Provider value={{locale,setLocale}}>
            { children }
        </AppContext.Provider>
    );
}

export default ContextProvider;
