// todolist is the component that displays the filtered list of todos//

import { useTodoContext } from "../contexts/TodoContext";
import { useFilterContext } from "../contexts/FilterContext";
import TodoItem from "./TodoItem";

export default function TodoList(){
  // get todos from TodoContext//
  const { todos } = useTodoContext();
  // get current filter from FilterContext//
  const { filter } = useFilterContext();

  // filter todos based on current filter setting//
  const filteredTodos = todos.filter((todo) => {
     switch (filter) {
      case "active":
        // show incomplete todos//
        return !todo.completed;
        case "completed":
          // show completed todos//
          return todo.completed;
        default:
          return true;
  }
    });

    return (
      <div>
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo) => <TodoItem key={todo.id}todo={todo}/>)
        ) : (

          <p>No todos yet! Add one above.</p>
        )}      
      </div>
    );
  }