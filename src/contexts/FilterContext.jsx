// filter context controls which tasks show (all, active, completed)//
import { createContext, useContext, useState } from "react"

const FilterContext = createContext(null);

export function FilterProvider({children}) {
  const [filter, setFilter] = useState("all");
  const value = {filter, setFilter};
  return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>;

}

export function useFilterContext(){
  const context =useContext(FilterContext);
  if (!context){
    throw new Error("useFilterContext must be used withina FilterProvider");
  }
  return context;

}