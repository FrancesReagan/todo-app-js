// putting export default at beginning//
// single task--shows one task with a checkbox, text, and buttons to edit/delete.//
// uses toggleTodo, deleteTodo, and editTodo to update tasks//
// shows checkbox, task text, and buttons//
import { useState } from "react";
import { useTodoContext } from "../contexts/TodoContext";


export default function TodoItem({todo}) {
  // get todo manipulation functions from context//
  const {toggleTodo, deleteTodo, editTodo} = useTodoContext();
  // state to track new text when editing and whether user is in edit mode.//
  const [newText, setNewText] = useState(todo.text);
  const [isEditing, setIsEditing] = useState(false);


// function to handle edit/save button clicks//
  const handleEdit = () => {
    if (isEditing) {
      // if currently editing, save the changes//
      editTodo(todo.id,newText);
      setIsEditing(false);
    } else {
      // if not editing, enter edit mode//
      setIsEditing(true);
    }
  };

  return (
   <div style={{ margin: "10px 0"}}>
    {/* checkbox that toggles completion status */}
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => toggleTodo(todo.id)}
      />

     {/* show either edit input or task text based on the editing state */}
      {isEditing ? (
        <input
        type="text"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
        style={{ padding: "5px" }}
        />
      ): (
        <span style={{ textDecoration: todo.completed?"line-through":"none" }}>
        {todo.text}
        </span>
      )}

      {/* edit/save button */}
       <button onClick={handleEdit} style={{ marginLeft: "10px"}}>
        {isEditing ?"Save":"Edit"} 
        </button> 

      {/* delete button */}
      <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft:"10px"}}>
        Delete
        </button>
        </div>
     );
   }

     
        
        
     
  
   </div>
  );
}

