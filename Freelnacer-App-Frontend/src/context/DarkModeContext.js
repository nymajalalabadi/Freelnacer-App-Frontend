import { createContext, useContext, useEffect } from "react"
import useLocalStorageState from "../hooks/useLocalStoragesTate";


const DarkModeContext = createContext();

export function DarkModeProvider({ Children }) {

  const [ isDarkMode, setIsDarkMode ] = useLocalStorageState("isDarkMode", false)

  const toggleDarkMode = ()  => setIsDarkMode((prev) => !prev);

  useEffect(() => {
      if(isDarkMode)
      {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
      }
      else
      {
        document.documentElement.classList.add("light-mode");
        document.documentElement.classList.remove("dark-mode");
      }
  }, [ isDarkMode ])

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

