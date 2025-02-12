import { Children, createContext, useState } from "react"
import { useState } from 'react';


 const DarkModeContext = createContext();

 export function DarkModeProvider({ Children }) {

    const {isDarkMode, setIsDarkMode} = useState(false);

    const toggleDarkMode = ()  => setIsDarkMode((prev) => !prev);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {Children}
    </DarkModeContext.Provider>
  )
}


export function useDarkMode() {
    const context = useContext(DarkModeContext);

    if (context === undefined) 
    {
        throw new Error('useDarkMode must be used within a DarkModeProvider');
    }

    return context;
}

