import { useTodos } from "../contexts/TodoContext";
import { useState } from "react";

function TodoItem({todo}) {
  const [newText, setNewText] = useState(todo.text)
  const [isEditing, SetisEditing] = useState(false)


  const {toggleTodo, deleteTodo, editTodo} = useTodos()

  const handleEditSubmit = (e) => {
    e.preventDefault()
    editTodo(todo.id, newText)
  }

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
