import { createContext, useState } from "react"


const DarkModeContext = createContext()
const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
      {children}
    </DarkModeContext.Provider>
  )
}

export const DarkMode = DarkModeContext;
export default DarkModeContextProvider;