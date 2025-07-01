// putting export default at beginning//
import { useState } from "react";
import { useTodoContext } from "../contexts/TodoContext";


export default function TodoItem({todo}) {
  const {toggleTodo, deleteTodo, editTodo} = useTodoContext();
  const [newText, setNewText] = useState(todo.text);
  const [isEditing, setIsEditing] = useState(false);



  const handleEdit = () => {
    if (isEditing) {
      editTodo(todo.id,newText);
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  return (
   <div style={{ margin: "10px 0"}}>
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => toggleTodo(todo.id)}
      />

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
       <button onClick={handleEdit} style={{ marginLeft: "10px"}}>
        {isEditing ?"Save":"Edit"} 
        </button> 
        </div>

     
        
        
     
  
   </div>
  );
}

