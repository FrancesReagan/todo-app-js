// TodoInput.jsx is the component for add  new tools//
// putting export default at the beginning //

// import react hook for managing component state....and custom hook to access todo context//
import { useState } from "react";
import { useTodoContext } from "../contexts/TodoContext"


export default function TodoInput() {
// state to track what the user types in the input field//
  const [input, setInput] = useState("")
  // get addTodo function from TodoContext to add  new todos//
  const {addTodo} = useTodoContext();


  // function to handle form submission//
 const handleSubmit = (e) => {
  // prevents the page from refreshing//
  e.preventDefault()  
  // add the todo with the current input text//
   addTodo(input);
  //  clear input field//
   setInput("");
 };

  return (
 <form onSubmit= {handleSubmit} style={{ marginBottom: "20px" }}>
    <input 
    type="text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder="What needs to be done?"
    style={{ padding: "8px", width: "70%" }}
    />
<button type ="submit" style={{ padding: "8px" }}>
  Add Todo
  </button>
</form>
  );
}