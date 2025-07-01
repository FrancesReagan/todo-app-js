// putting export default at the beginning //

import { useState } from "react";
import { useTodos } from "../contexts/TodoContext"


export default function TodoInput() {

  const [input, setInput] = useState("")
  const {addTodo} = useTodoContext();

 const handleSubmit = (e) => {
  e.preventDefault()
   addTodo(innput)
   setTodoText("");
 };

  return (
 <form onSubmit= {handleSubmit} style={{ marginBottom: "20px" }}>
    <input 
    value="text" 
    onChange={(e) => setInput(e.target.value)}
    placeholder="What needs to be done?"
    style={{ padding: "8px", width: "70%" }}
    />
<button type ="submit" style={{ padding: "8px" }}>Add Todo</button>
</form>
  );
}