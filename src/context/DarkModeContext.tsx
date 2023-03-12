import { createContext, PropsWithChildren, ReactNode, useState } from "react";

type DarkModeState = {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<DarkModeState>({ darkMode: false, toggleDarkMode: () => { } });

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }} >
      {children}
    </DarkModeContext.Provider>
  )
}