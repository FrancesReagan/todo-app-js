import { TodoProvider } from "./contexts/TodoContext";  
import { FilterProvider } from "./contexts/FilterContext";
import { ThemeProvider } from "./contexts/ThemeContext";

export function AppProviders({children}){
  return (
    <ThemeProvider>
      <TodoProvider>
        <FilterProvider>{children}</FilterProvider>
      </TodoProvider>
    </ThemeProvider>
  );
}
