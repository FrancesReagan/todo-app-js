// appproviders combines all three --todocontext, filtercontext, and themecontext---so the app can use them together//
// it wraps the app with TodoProvider, FilterProvider, and ThemeProvider---it makes sure that lal components can 
// access the contexts.//

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

// approvider is a meeting place where all the context providers are present (--todoprovider (task manager)---
// filterprovider--the display controller---and the themeprovider--the style manager---,etc)--the children are the rest 
// of the app(task list or buttons) that need to talk to the context providers----so the providers are nested as 
// every component needs access to all three contexts.---its like putting all of the app's tools (task list, filter,
// theme switcher) in a toolbox so everyone can use these tools.//