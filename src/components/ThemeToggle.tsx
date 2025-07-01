// this component uses themecontext to get theme and toggletheme from the context; shows current state--the button text
// shows what mode use will switch to; gives visual feedback by the button colors change based on current theme; and 
// simple functionality as it only calls toggleTheme when clicked//
import { useThemeContext } from "../contexts/ThemeContext";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      onClick={toggleTheme}
      style={{
        marginBottom: "20px",
        padding: "8px 16px",
        backgroundColor: theme === "light" ? "#333" : "#fff",
        color: theme === "light" ? "#fff" : "#333",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer"
      }}
      >
        Switch to {theme === "light" ? "dark" : "light"} Mode
        </button>
  );
}