import { useTodoContext } from "../contexts/TodoContext";
import { useFitlerContext } from "../contexts/FilterContext";
import TodoItem from "./TodoItem";

export default function TodoList(){
  const { todos } = useTodoContext();
  const { filter } = useFilterContext();

  const filteredTodos = todos.filter((todo) => {
     switch (filter) {
      case "active":
        return !todo.completed;
        case "completed":
          return todo.completed;
        default:
          return true;
  }
    });

    return (
      <div>
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo) => <TodoItem key={todo.id}={todo}/>)
        ) : (

          <p>No todos yet! Add one above.</p>
        )}      
      </div>
    );
  }

// function TodoList() {

//   const {todos} = useTodos() 

//   return (
// <>
//   <ul>
//     {todos && todos.map(todo => (
//       <TodoItem key = {todo.id} 
//     todo={todo}/>
//   ))} </>
//   </ul>
  

//   );
// }
// export default TodoList;