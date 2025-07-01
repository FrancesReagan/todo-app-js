// todolist is the task display---the component that displays the filtered list of todos//
// shows all of the user's tasks but only the ones that match the current filter//
// uses both TodoContext (for tasks) and FilterContext (for the filter)//

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

  // more notes on TodoList component---contexts--grabs todos from TodoContext and filter form FilterContext--
  // filtering--uses a switch to choose which tasks to show based on the filter---rendering--shows each task using
  // TodoItem or a message if there are not tasks.//