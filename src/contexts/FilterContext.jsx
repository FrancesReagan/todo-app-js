// filter context controls which tasks show (all, active, completed)//
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