// put export default function at beginning---as this function returns JSX---its a component not a hook--
// so not using the hook naming convention of useFilterButtons//
import { useFilterContext } from "../contexts/FilterContext";

export default function FilterButtons(){
  const {filter, setFilter} = useFilterContext();

  return (
    <div style={{marginBottom: "20px"}}>
      <button onClick={() => setFilter("all")}
        style={{fontWeight: filter === "all"?"bold": "normal"}}
        >
          All
        </button>
        <button onClick={() => setFilter("active")}
        style={{fontWeight: filter === "completed"?"bold": "normal"}}
        >
          Completed
        </button>
    </div>
  );
}