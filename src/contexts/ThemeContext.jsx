// themecontext---this is the control center that switches the app's appearance betweeen 
// light and dark themes or modes.  ThemeContext stores the curent theme (light or dark) in state.---
// it provides a function to toggle between themes---saves the themes to localStorage--and changes the webpage's
// background and text colors.//

import { createContext, useContext, useState, useEffect }  from "react";

const ThemeContext = createContext(null);
export function ThemeProvider({children}) {
  // initalize the theme from localStorage or default to "light" theme//
  const [theme, setTheme] = useState(() =>{
    try {
      return localStorage.getItem("theme") || "light";

    } catch (error) {
      console.error("Failed to get theme:", error);
      return "light";
    }
  });

  // effect to save theme to localStorage and update the body class//
  useEffect(() => {
    try {
      localStorage.setItem("theme", theme);
      document.body.className = theme;
    }catch (error) {
      console.error ("Failed to save theme:", error);
      document.body.className = theme;
    }
    },[theme]);

    // function to toggle between light and dark themes//
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const value = { theme, toggleTheme };
  return (
  <ThemeContext.Provider value={value}>
    {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }

  return context;
}

// more info on ThemeContext: state---const[theme, setTheme] holds the current theme--and provides tool to update
// theme----toggle function--toggleTheme switches the theme.  Saving theme---useEffect saves the theme to localStorage
// and updates the webpage's look by changing the body class.  Provider---shares the theme and toggleTheme with the
// other components in the app//