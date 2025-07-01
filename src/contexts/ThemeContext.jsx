// theme context switches the light/dark mode//
import { createContext, useContext, useState, useEffect }  from "react";

const ThemeContext = createContext(null);
export function ThemeProvider({children}) {
  const [theme, setTheme] = useState(() =>{
    try {
      return localStorage.getItem("theme") || "light";

    } catch (error) {
      console.error("Failed to get theme:", error);
      return "light";
    }
  });

  



}