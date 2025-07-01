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

      

     
        
        
     
  
   </div>
  );
}

