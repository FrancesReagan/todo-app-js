// put export default function at beginning//
import { useFilterContext } from "../contexts/FilterContext";

export default function useFilterButtons(){
  const {filter, setFilter} = useFilterContext();

  return (
    <div style={{marginBottom: "20px"}}>
      <button onClick={() => setFilter("all")}
        style={{fontWeight: filter === "all"?"bold": "normal"}}
        >
          All
        </button>
    </div>
  )
}