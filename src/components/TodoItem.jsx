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
   
     <li>
        <input type="checkbox"
        checked={TodoItem.completed} onChange={() => toggleTodo (todo.id)}/>
        <h2>{TodoItem.todoText}</h2>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        
        
     
  {isEditing ? (
    <form onSubmit={handleEditSubmit}>
      <input value={newText} onChange={(e) => setNewText(e.target.value)}/>
      <button type="submit">Save</button>
    </form>
  ):(
    <>
    {todo.text}
    <button onClick={() => SetisEditing(true)}>Edit</button>
</>
  )}
   </li>
  );
}
export default TodoItem;
