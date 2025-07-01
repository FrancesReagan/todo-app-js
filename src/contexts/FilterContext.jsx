// filter context controls which tasks show (all, active, completed)//
// filter context is the control center for which tasks will show as stated above---it stores the current filter
// choice(all or active or completed) in state---it provides a function to change the filter---and other components
// like the task list use this to choose what to display--//

import { createContext, useContext, useState } from "react"

const FilterContext = createContext(null);

export function FilterProvider({children}) {
  // state to track current filter (all, active, completed)
  const [filter, setFilter] = useState("all");
  // value object to share with components//
  const value = {filter, setFilter};
  return (
  <FilterContext.Provider value={value}>
    {children}
    </FilterContext.Provider>
  );
}

export function useFilterContext(){
  const context =useContext(FilterContext);
  if (!context){
    throw new Error("useFilterContext must be used within a FilterProvider");
  }
  return context;

}

// more notes on filtercontext----state: const[filter,setFilter] is a box that holds the current filter (all) and a 
// tool (setFilter) to change it.  context--filtercontext--is another shared notebook--yet this one is focused on 
// which tasks to show...provider---shares the filter and setFilter function with other components----filter context
// is simple--as it manages only one piece of info.//