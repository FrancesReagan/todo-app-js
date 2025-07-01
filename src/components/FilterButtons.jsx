// put export default function at beginning---as this function returns JSX---its a component not a hook--
// so not using the hook naming convention of useFilterButtons//
import { useFilterContext } from "../contexts/FilterContext";

export default function FilterButtons(){
  const {filter, setFilter} = useFilterContext();

  return (
    <div style={{marginBottom: "20px"}}>
      {/* all button -- shows all todos */}
      <button onClick={() => setFilter("all")}
        style={{fontWeight: filter === "all"?"bold": "normal",
          marginRight: "10px",
          padding: "8px 12px"
        }}
        >
          All
        </button>

        {/* active button--shows only incomplete todos */}
        <button onClick={() => setFilter("active")}
        style={{fontWeight: filter === "active"?"bold": "normal",
          marginRight: "10px",
          padding: "8px 12px"
        }}
        >
          Active
        </button>

        {/* completed button--shows only completed todos */}
        <button
           onClick={() => setFilter("completed")}
           style={{fontWeight: filter === "completed"?"bold": "normal",
            padding: "8px 12px"
           }}
           >
            Completed
           </button>
    </div>
  );
}